import express from 'express';
import * as config from './config.js';
import loginRoutes from './routes/login.js';

const app = express();

app.use(loginRoutes);

const server = app.listen(config.port, () => {
  console.log('Now listening on %j', server.address());
});
