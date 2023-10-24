import { writeFile, readFile } from 'node:fs/promises';

async function copy() {
  const [, , source, dest] = process.argv;
  const fileList = await readFile(source);
  await writeFile(dest, fileList);
}
try {
  await copy();
} catch (err) {
  console.log(err);
}
