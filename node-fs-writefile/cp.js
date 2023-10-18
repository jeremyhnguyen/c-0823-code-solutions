// import { writeFile, readFile } from 'node:fs/promises';

// async function randomNum() {
//   const [,,...files]= process.argv;
//   const note = process.argv[2];
//   const fileList = files.map(n => readFile(n, 'utf-8'));
//   const promises = await Promise.all(fileList);
//   const msg = promises.join();
//   console.log(msg);
//   const write = await writeFile('copy-of-note.txt', msg + '\n');
//   console.log(write);
// }

// try {
//   await randomNum();
// } catch (err) {
//   console.log(err);
// }
