const express = require('express');
const graceful = require('node-graceful');
const requestHandlers = require('./conversion-request-handlers');

const port = 3000;
const app = express();

app.get('/currencies', (req, res) => requestHandlers.handleGetCurrencies(req, res));

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
