import express from 'express';
import config from './utils/config';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'hello there' });
});

app.listen(config.port);
