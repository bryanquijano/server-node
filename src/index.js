import express from 'express';
import config from './utils/config';
import logger from './utils/logger';

const app = express();
app.use(logger.middleware);
app.get('/', (req, res) => {
  logger.log.success('Calling Root');
  res.send({ msg: 'hello there' });
});

app.listen(config.port);
