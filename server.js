import express from 'express';
import config from './config.js';
import loginRoutes from './routes/login.js';
import reactRoutes from './routes/react.js';

const app = express();

app.use(express.static('public/', {redirect: true}));
app.use(loginRoutes);
app.use(reactRoutes);

const server = app.listen(config.port, () => {
  console.log('Now listening on %j', server.address());
});
