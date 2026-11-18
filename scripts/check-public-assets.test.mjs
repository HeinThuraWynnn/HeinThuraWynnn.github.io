import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, symlink, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const checker = new URL('./check-public-assets.mjs', import.meta.url);

async function fixture(run) {
  const directory = await mkdtemp(join(tmpdir(), 'wsm-assets-'));
  try {
    const root = join(directory, 'public');
    await mkdir(root);
    const check = () => spawnSync(process.execPath, [checker.pathname, root], { encoding: 'utf8' });
    await run(root, directory, check);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

test('allows the custom domain, ordinary assets and encrypted review data', () => fixture(async (root, _, check) => {
  await writeFile(join(root, 'CNAME'), 'www.wynnsolutionsmyanmar.com');
  await mkdir(join(root, 'review'));
  await writeFile(join(root, 'review', 'review.enc.json'), '{}');
  assert.equal(check().status, 0);
}));

test('rejects accidentally restored private portfolio and environment files, including nested paths', async () => {
  for (const filename of ['portfolio.pdf', 'PORTFOLIO.PDF', '.env', '.env.production', '.private']) {
    await fixture(async (root, _, check) => {
      await mkdir(join(root, 'nested'));
      await writeFile(join(root, 'nested', filename), 'private fixture');
      const result = check();
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /Private asset must not be published/);
    });
  }
});

test('rejects a renamed symlink to a private file', () => fixture(async (root, directory, check) => {
  const privateFile = join(directory, 'private.pdf');
  await writeFile(privateFile, 'private fixture');
  await symlink(privateFile, join(root, 'renamed.pdf'));
  const result = check();
  assert.notEqual(result.status, 0);
  assert.match(result.stderr, /links outside its directory/);
}));
