import { readdir, realpath } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const root = resolve(process.argv[2] || 'public');

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.name.toLowerCase() === 'portfolio.pdf' ||
        entry.name === '.private' || entry.name === '.env' || entry.name.startsWith('.env.')) {
      throw new Error(`Private asset must not be published: ${relative(root, path)}`);
    }
    if (entry.isSymbolicLink()) {
      const target = relative(root, await realpath(path));
      if (target === '..' || target.startsWith(`..${sep}`)) {
        throw new Error(`Public asset links outside its directory: ${relative(root, path)}`);
      }
      // Do not allow directory symlinks to bypass recursive checks or form cycles.
      throw new Error(`Replace public symlink with an explicitly reviewed asset: ${relative(root, path)}`);
    }
    if (entry.isDirectory()) await check(path);
  }
}

await check(root);
console.log(`Public asset checks passed: ${process.argv[2] || 'public'}`);
