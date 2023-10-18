import { writeFile } from 'node:fs/promises';

async function randomNum() {
  const note = process.argv[2];
  const write = await writeFile('note.txt', note + '\n');
  console.log(write);
}

try {
  await randomNum();
} catch (err) {
  console.log(err);
}
