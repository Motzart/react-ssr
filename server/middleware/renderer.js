import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../../src/containers/App/App.js';
import { StaticRouter } from 'react-router-dom'
import { Helmet } from "react-helmet";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
    const context = {}
    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        const html = ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
                <App/>
          </StaticRouter>
        );

        // inject the rendered app into our html and send it
        const helmet = Helmet.renderStatic();

        if (context.url) {
            res.writeHead(301, {
              Location: context.url
            })
            return res.end()
        } else {
            return res.send(

                htmlData.replace(
                    '<div id="root"></div>',
                    `<div id="root">${html}</div>`
                )
            );
          }
    });
}
