const expect = require('chai').expect;
const axios = require('axios');
const { response } = require('express');

const BASE_URL = "http://localhost:3001/";

describe('Server sends response', () => {
  it('recieves a request and sends a 200 response code', done => {
    axios.get(BASE_URL)
    .then(response => {
      expect(response.status).to.equal(200);
      done();
    });
  });

  it('sends a 400 status code for resources that arent found', done => {
    axios.get(BASE_URL + "fake_resource")
    .then(response => {
      expect(response.status).to.equal(400);
      done();
    });
  });
})