import { readFile } from 'node:fs/promises';

async function read() {
  const msg = await readFile('./dijkstra.txt', 'utf-8');
  console.log(msg);
}

try {
  await read();
} catch (error) {
  console.log(error);
}
