// Imports the controlloer function
const { findLinkedinPreview } = require('../controllers/search');

// Imports the Router module and invokes it
const Router = require('express').Router();

// Calls the post method which requires both a route and an 
// action in the form of a callback function 
Router.post('/search', findLinkedinPreview);

module.exports = Router;