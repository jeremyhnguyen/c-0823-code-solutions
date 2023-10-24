import { writeFile } from 'node:fs/promises';

async function randomNote() {
  const note = process.argv[2];
  const write = await writeFile('note.txt', note + '\n');
  console.log(write);
}

try {
  await randomNote();
} catch (err) {
  console.log(err);
}
