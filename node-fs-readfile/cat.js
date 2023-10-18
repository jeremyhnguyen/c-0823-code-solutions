import { readFile } from 'node:fs/promises';

async function readInOrder() {
  const [, , ...args] = process.argv;
  const argsList = args.map((n) => readFile(n, 'utf-8'));
  const allPromises = await Promise.all(argsList);
  const msg = allPromises.join('\n');
  console.log(msg);
}

try {
  await readInOrder();
} catch (error) {
  console.log(error);
}
