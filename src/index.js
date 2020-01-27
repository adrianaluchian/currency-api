const cors = require('cors');
const express = require('express');
const graceful = require('node-graceful');
const bodyParser = require('body-parser');
const requestHandlers = require('./conversion-request-handlers');

const port = 80;
const app = express();
const jsonParser = bodyParser.json();

app.use(cors());

app.get('/currencies', (req, res) => requestHandlers.handleGetCurrencies(req, res));

app.post('/currencies/convert', jsonParser, (req, res) => requestHandlers.handlePostConvert(req, res));

// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

graceful.on('exit', () => {
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    });
  });
});
