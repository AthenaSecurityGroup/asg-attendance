import { Router } from 'express';
import SteamLogin from '../src/login.js';
import url from 'url';

const RETURN_SLUG = '/login/verify';
const REALM = process.env.HOST;

const router = Router();
const login = new SteamLogin(url.parse(REALM + RETURN_SLUG), REALM);

router.get('/login', (req, res) => {
  login.authenticate()
    .then((authUrl) => res.redirect(authUrl))
    .catch((error) => res.status(500).send(error));
});

router.all(RETURN_SLUG, (req, res) => {
  login.verify(req)
    .then((result) => res.status(200).send(result))
    .catch((error) => res.status(500).send(error));
});

export default router;
