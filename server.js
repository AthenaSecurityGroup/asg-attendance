import express from 'express';
import config from './config.js';
import loginRoutes from './routes/login.js';
import reactRoutes from './routes/react.js';
import * as path from 'path';

const PUBLIC_DIR = path.join(__dirname, 'public/');

const app = express();

app.use(express.static(PUBLIC_DIR, {redirect: true}));
app.use(loginRoutes);
app.use(reactRoutes);

const server = app.listen(config.port, () => {
  console.log('Now listening on %j', server.address());
});
