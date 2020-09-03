// Importing the express package
const express = require('express');
const bodyParser = require('body-parser');

const resourceNotFound = require('./controllers/error');

// Invoking express as our server
const server = express();
server.use('/', (req, resp, next) => {
  resp.status(200).end();
})

server.use(resourceNotFound);
server.listen(3001);