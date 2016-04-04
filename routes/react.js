import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/app.js';
import Page from '../components/page.js';

const router = Router();

router.all('*', (req, res) => {
  res.send(ReactDOMServer.renderToStaticMarkup(
    <Page>
      <div id="app" dangerouslySetInnerHTML={
        {__html: ReactDOMServer.renderToString(<App/>)}
      }/>
    </Page>
  ));
});

export default router;