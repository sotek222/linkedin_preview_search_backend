const expect = require('chai').expect;
const fetch = require('node-fetch');
const BASE_URL = "http://localhost:3001/";

const URL_OPTIONS = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    url: "https://www.linkedin.com/in/matthew-masiello"
  })
};

describe('Server is working and sends responses', () => {
  it('receives a request and sends a 200 response code', done => {
    fetch(BASE_URL + 'test-search')
    .then(response => {
      expect(response.status).to.equal(200);
      done();
    });
  });

  it('sends a 404 status code for resources that arent found', done => {
    fetch(BASE_URL + "fake_resource")
    .then(response => {
      expect(response.status).to.equal(404);
      done();
    })
  });

  it('receives a post requests with a body of a url and returns a response', done => {

    fetch(BASE_URL + "search", URL_OPTIONS)
    .then(response => response.json())
    .then(data => {
      expect(data).to.be.a('object');
      done();
    });
  });

  it('receives a link and returns data about the linkedin account', done => {
    fetch(BASE_URL + "search", URL_OPTIONS)
    .then(response => response.json())
    .then(data => {
      // We want an object that looks like:
      // { title, link, snippet, imageUrl }

      expect(data).to.have.all.keys('title', 'link', 'snippet', 'imageUrl');
      done();
    })
  });
})