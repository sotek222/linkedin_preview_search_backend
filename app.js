// Importing the express package
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

// Import the following routes and controllers 
const resourceNotFound = require('./controllers/error');
const searchRoutes = require('./routes/search');

// Invoking express as our server
const server = express();

// middleware for allowing cross-origin-requests 
server.use(cors());

// middleware for parsing incoming request bodies to be made easier to work with in controllers. 
server.use(bodyParser.json());

// Tells the server when an incoming request comes to use the appropraite 
// controller

server.use(searchRoutes);

// for 404's
server.use(resourceNotFound);

// The server should start listening to requests from port 3001
server.listen(3001);