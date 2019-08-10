import express from 'express';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import store from '../src/store';
import render from './render';
import Routes from '../src/router/Routes';

const PORT= 8079;
const app = new express();
app.use('/dist', express.static('dist'));
app.use('/img', express.static('img'));
app.get('*', (req, res) => {
    const context = {};
    const content = render(req.path, store, context);
  
    res.send(content);
  });
  
app.listen(PORT, ()=> console.log(`Frontend listening on PORT:${PORT}`));