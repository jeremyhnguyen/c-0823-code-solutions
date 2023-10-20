import express from 'express';

const app = express();
const port: number = 8080;
let nextId: number = 1;

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || score === undefined) {
    res.status(400).json('Bad request');
    return;
  }
  const grade = req.body;
  grade.id = nextId;
  grades[nextId++] = grade;
  res.status(201).json(grade);
});

app.get('/api/grades', (req, res) => {
  res.json(Object.values(grades));
});

app.delete('/api/grades/:id', (req, res) => {
  const { id } = req.params;
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: `${id} is not an integer` });
    return;
  }
  if (!(id in grades)) {
    res.sendStatus(404).json({ error: `${id} not found` });
    return;
  }
  delete grades[req.params.id];
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
