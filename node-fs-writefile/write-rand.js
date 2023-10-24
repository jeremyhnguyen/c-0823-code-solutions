import { writeFile } from 'node:fs/promises';

async function randomNum() {
  const write = await writeFile('random.txt', Math.random() + '\n');
  console.log(write);
}

try {
  await randomNum();
} catch (err) {
  console.log(err);
}
