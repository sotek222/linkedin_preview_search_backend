// Imports the controlloer function
const { findLinkedinPreview } = require('../controllers/search');

// Imports the Router module and invokes it
const Router = require('express').Router();

// Calls the post method which requires both a route and an 
// action in the form of a callback function 
// We pass both the request and response here inorder for 
// the action to function with a dependency injection
Router.post('/search', (req, resp) => findLinkedinPreview(req, resp));

module.exports = Router;