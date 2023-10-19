import express from 'express';

const app = express();
const port = 8080;
app.use('/', (req, res) => {
  console.log(req.method);
  res.send('A string');
});

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
