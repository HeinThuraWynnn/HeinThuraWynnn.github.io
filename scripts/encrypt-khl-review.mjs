import { readFile, readdir, writeFile } from 'node:fs/promises';
import { randomBytes, pbkdf2Sync, createCipheriv } from 'node:crypto';
const password = process.env.KHL_REVIEW_PASSWORD;
if (!password) throw new Error('Set KHL_REVIEW_PASSWORD to encrypt the local .private/KHL-Client-Review source.');
const source = new URL('../.private/KHL-Client-Review/', import.meta.url);
const files = {};
for (const name of await readdir(source)) {
  if (name === 'index.html') continue;
  files[name] = { type: name.endsWith('.pdf') ? 'application/pdf' : 'image/png', data: (await readFile(new URL(name, source))).toString('base64') };
}
const html = await readFile(new URL('index.html', source), 'utf8');
const salt = randomBytes(16), iv = randomBytes(12), iterations = 600000;
const key = pbkdf2Sync(password, salt, iterations, 32, 'sha256');
const cipher = createCipheriv('aes-256-gcm', key, iv);
const data = Buffer.concat([cipher.update(JSON.stringify({html, files})), cipher.final(), cipher.getAuthTag()]);
await writeFile(new URL('../public/KHL-Client-Review/review.enc.json', import.meta.url), JSON.stringify({salt: salt.toString('base64'), iv: iv.toString('base64'), iterations, data: data.toString('base64')}));
console.log('Encrypted proposal and all assets. Unencrypted originals remain in ignored .private/.');
