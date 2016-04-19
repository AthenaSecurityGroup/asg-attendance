import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/app.js';
import Page from '../components/page.js';
import { match } from 'react-router';

const router = Router();

router.all('*', (req, res) => {
  match({routes, location:req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      res.send(ReactDOMServer.renderToStaticMarkup(
        <Page>
          <div id="app" dangerouslySetInnerHTML={
            {__html: ReactDOMServer.renderToString(<App {...props}/>)}
          }/>
        </Page>
      ));
    } else {
      res.status(404).send('Not Found');
    }


  });
});

export default router;
