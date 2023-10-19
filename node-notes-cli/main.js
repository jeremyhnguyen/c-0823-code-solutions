import { readFile, writeFile } from 'node:fs/promises';

const [, , op, id, note] = process.argv;

async function readData() {
  const data = await readFile('data.json', 'utf-8');
  return JSON.parse(data);
}

async function writeData(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}
// write error handling function (update/delete)
// if (!(id in data.notes)) {
//   console.error("Note doesn't exist", id);
//   process.exit(1);
// }

// function to check if note is empty

switch (op) {
  case 'add':
    await add(id);
    break;
  case 'read':
    await read();
    break;
  case 'update':
    await update(id, note);
    break;
  case 'delete':
    deleteNote(id);
    break;
  default:
    console.error('no operation');
    process.exit(1);
}

async function add(note) {
  const data = await readData();
  data.notes[data.nextId++] = note;
  await writeData();
}

async function read() {
  const data = await readData();
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}
async function update(id, note) {
  const data = await readData();
  data.notes[id] = note;
  await writeData(data);
}

async function deleteNote(id) {
  const data = await readData();
  delete data.notes[id];
  await writeData(data);
}
