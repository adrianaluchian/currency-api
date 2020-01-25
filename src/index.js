const express = require('express');
const graceful = require('node-graceful');

const port = 3000;
const app = express();

app.get('/', (req, res) => res.send('Hello'));

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