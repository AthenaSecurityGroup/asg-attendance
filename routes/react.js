import {Router} from 'express';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import Page from '../components/page.js';
import {match, RouterContext} from 'react-router';
import routes from './router.js';

const router = Router();

router.all('*', (req, res) => {
  match({routes, location: req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      //noinspection CheckEmptyScriptTag
      res.send(renderToStaticMarkup(
        <Page>
          <div id="app" dangerouslySetInnerHTML={
            {__html: renderToString(
              <RouterContext {...props}/>
            )}
          }/>
        </Page>
      ));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

export default router;
