import { readFile } from 'node:fs/promises';

async function readAny() {
  const msg = await readFile(process.argv[2], 'utf-8');
  console.log(msg);
}

try {
  await readAny();
} catch (error) {
  console.log(error);
}
