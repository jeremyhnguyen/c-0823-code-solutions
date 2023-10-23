import express from 'express';
import {readFile, writeFile} from 'node:fs/promises'

type Note = {
  id: number,
  content: string
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
}

const app = express();
const port = 8080;
app.use(express.json());


async function readData(): Promise<Data> {
  const data = await readFile('./data.json', 'utf-8');
  const dataParsed = JSON.parse(data);
  return dataParsed;
}

async function writeData(data: Data): Promise<void> {
  const entry = JSON.stringify(data, null, 2);
  await writeFile('./data.json',  entry, 'utf-8')
}

// GET a list of notes (needs error handling)

app.get('/api/notes', async (req, res) => {
  const notesArray: Note[] = [];
  const data: Data = await readData();
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.status(200).json(notesArray);
});

// GET a single not by ID (error handling not working for no note with id)

app.get('/api/notes/:id', async (req, res) => {
  const id = Number(req.params.id);
  const noteData = await readData();
  const noteContent = noteData.notes[id];
  if (id > 1) {
  res.status(200).json(noteContent);
  return;
  }
  if (id < 1) {
    res.status(400).json({error: `${id} is not a positive integer`});
    return;
  };
  if (id === undefined) {
    res.status(404).json({error: `note with id: ${id} does not exist`});
  }
});

// POST (WIP)
app.post('/api/notes', async (req, res) => {
  const data = await readData();
  const {content} = req.body;
  const newNote = {
    id: data.nextId,
    content,
  };
  data.notes[data.nextId++] = newNote;
  await writeData(data);
  res.json(newNote);
});

// PUT (WIP)
app.put('api/notes/:id', async (req, res) => {
  const data = await readData();
  const {id} = req.params;
  const {content} = req.body;
  const note: Note = {
    id: +id,
    content,
  };
  data.notes[+id] = note;
  await writeData(data);
  res.status(201).json(note);
});

// delete (WIP)
app.delete('api/notes/:id', async (req, res) => {
  const data = await readData();
  const {id} = req.params;
  delete data.notes[+id];

});

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
