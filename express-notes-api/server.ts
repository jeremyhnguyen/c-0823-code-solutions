import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
};

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
  await writeFile('./data.json', entry, 'utf-8');
}

// GET a list of notes

app.get('/api/notes', async (req, res, next) => {
  try {
    const notesArray: Note[] = [];
    const data: Data = await readData();
    for (const key in data.notes) {
      notesArray.push(data.notes[key]);
    }
    res.status(200).json(notesArray);
  } catch (error) {
    next(error);
  }
});

// GET a single note by ID

app.get('/api/notes/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const noteData = await readData();
    const noteContent = noteData.notes[id];
    if (id > 1) {
      res.status(200).json(noteContent);
      return;
    }
    if (id < 1 || Number.isNaN(id) || !Number.isInteger(id)) {
      throw new ClientError(400, `${id} is not a positive integer`);
      return;
    }
    if (id === undefined) {
      throw new ClientError(404, `note with id: ${id} does not exist`);
    }
  } catch (error) {
    next(error);
  }
});

// POST
app.post('/api/notes', async (req, res, next) => {
  try {
    const data = await readData();
    const { content } = req.body;
    if (content === undefined) {
      throw new ClientError(400, 'content is a required field');
    }
    const newNote = {
      id: data.nextId,
      content,
    };
    data.notes[data.nextId++] = newNote;
    await writeData(data);
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
});

// PUT
app.put('api/notes/:id', async (req, res, next) => {
  try {
    const data = await readData();
    const { id } = req.params;
    const { content } = req.body;
    const note: Note = {
      id: +id,
      content,
    };
    if (Number.isNaN(id) || !Number.isInteger(id) || Number(id) < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    if (content === undefined) {
      throw new ClientError(400, 'content is a required field');
    }
    if (id === undefined) {
      throw new ClientError(400, `cannot find note with id ${id}`);
    }
    data.notes[+id] = note;
    await writeData(data);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
});

// Delete
app.delete('api/notes/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
      throw new ClientError(400, 'id must be a positive integer');
    }
    const data = await readData();
    if (data.notes[id] === undefined) {
      throw new ClientError(404, `cannot find note with id ${id}`);
    }
    delete data.notes[id];
    await writeData(data);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
