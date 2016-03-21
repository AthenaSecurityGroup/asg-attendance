import { Router } from 'express';
import * as SteamLogin from '../src/login.js';

const router = Router();

router.get('/login', (req, res) => {
  SteamLogin.authenticate()
    .then((x) => res.sendStatus(200))
    .catch((x) => res.status(500).send(x));
});

router.all('/login/verify', (req, res) => {
  SteamLogin.verify(req)
    .then((x) => res.status(200).send(x))
    .catch((x) => res.status(500).send(x));
});

export default router;
