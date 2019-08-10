import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../src/router/Routes';

export default (pathname, store, context)=>{
    const content = renderToString( 
        <Provider store={store}>
            <StaticRouter location={pathname} context={context}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <title>::: Boilerplate :::</title>
    </head>
    <body>
        <div id="app">${content}</div>
        <script>
            window.INITIAL_STATE=${JSON.stringify(store.getState())}
        </script>
        <script src="dist/bundle.js"></script>
    </body>
    </html>
    `;
}