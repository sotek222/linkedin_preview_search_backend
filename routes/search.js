const { findLinkedinPreview } = require('../controllers/search');

const Router = require('express').Router();

Router.get('/test-search', (req, resp, _) => {
  resp.status(200).send('Success');
  resp.end();
});

Router.post('/search', findLinkedinPreview);

module.exports = Router;