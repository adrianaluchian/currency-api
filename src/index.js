const express = require('express');
const graceful = require('node-graceful');
const bodyParser = require('body-parser');
const requestHandlers = require('./conversion-request-handlers');

const port = 3000;
const app = express();
const jsonParser = bodyParser.json();

app.get('/currencies', (req, res) => requestHandlers.handleGetCurrencies(req, res));

app.post('/currencies/convert', jsonParser, (req, res) => requestHandlers.handlePostConvert(req, res));

const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

graceful.on('exit', () => {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
});