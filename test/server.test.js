const { expect } = require('chai');
const fetch = require('node-fetch');
const sinon = require("sinon");
const findLinkedinPreview = require('../controllers/search');

const MOCK_GOOGLE_RESPONSE = {
  items: [{
    kind: 'customsearch#result',
    title: 'Karel Lahmy - VP Research & Development - Hunterz.io | LinkedIn',
    htmlTitle: '<b>Karel Lahmy</b> - VP Research &amp; Development - Hunterz.io | <b>LinkedIn</b>',
    link: 'https://www.linkedin.com/in/karellahmy',
    displayLink: 'www.linkedin.com',
    snippet: 'View Karel Lahmy\'s profile on LinkedIn, the world\'s largest professional \ncommunity. Karel has 8 jobs listed on their profile. See the complete profile on \nLinkedIn ...',
    htmlSnippet: 'View <b>Karel Lahmy&#39;s</b> profile on <b>LinkedIn</b>, the world&#39;s largest professional <br>\ncommunity. Karel has 8 jobs listed on their profile. See the complete profile on <br>\n<b>LinkedIn</b>&nbsp;...',
    formattedUrl: 'https://www.linkedin.com/in/karellahmy',
    htmlFormattedUrl: '<b>https</b>://www.<b>linkedin.com/in/karellahmy</b>'
  }, {
    kind: 'customsearch#result',
    title: 'Irit Gillath - VP Marketing - Avantra | LinkedIn',
    htmlTitle: 'Irit Gillath - VP Marketing - Avantra | <b>LinkedIn</b>',
    link: 'https://www.linkedin.com/in/iritgillath',
    displayLink: 'www.linkedin.com',
    snippet: 'View Irit Gillath\'s profile on LinkedIn, the world\'s largest professional community. \nIrit has 9 jobs listed on their profile. See the complete profile on LinkedIn and ...',
    htmlSnippet: 'View Irit Gillath&#39;s profile on <b>LinkedIn</b>, the world&#39;s largest professional community. <br>\nIrit has 9 jobs listed on their profile. See the complete profile on <b>LinkedIn</b> and&nbsp;...',
    formattedUrl: 'https://www.linkedin.com/in/iritgillath',
    htmlFormattedUrl: '<b>https</b>://www.<b>linkedin</b>.com/in/iritgillath',
  }]
};

describe('fetching data for application', () => {
  const noop = () => { };

  const responseMock = {
    json: sinon.spy(),
    status: sinon.spy(),
    send: noop,
    end: noop
  };

  const requestMock = {
    body: {
      url: "https://www.linkedin.com/in/matthew-masiello"
    }
  };

  const fetchMock = sinon.stub(fetch, 'Promise').returns(Promise.resolve(MOCK_GOOGLE_RESPONSE));

  afterEach(function () {
    fetchMock.restore();
  });

  it('handles fetch data correctly by sending a request to Google and receiving a JSON response', async () => {
    await findLinkedinPreview(requestMock, responseMock, fetchMock);
    expect(responseMock.json.calledOnce).to.be.true;
  });

  it('prepares the data and sends it as an object', async () => {
    await findLinkedinPreview(requestMock, responseMock, fetchMock);
    const jsonData = responseMock.json.firstCall.args[0];
    expect(jsonData).to.be.an('object');
  });

  it('sends the data as a JSONified object with the correct properties', async () => {
    await findLinkedinPreview(requestMock, responseMock, fetchMock);
    const jsonData = responseMock.json.firstCall.args[0];
    expect(jsonData.title).to.be.a('string');
    expect(jsonData.link).to.be.a('string');
    expect(jsonData.snippet).to.be.a('string');
  });

  it('handles a bad response from the google api', async () => {
    const badFetchMock = sinon.stub(fetch, 'Promise').returns(Promise.resolve({}));
    await findLinkedinPreview(requestMock, responseMock, badFetchMock);
    sinon.assert.calledWith(responseMock.status, 404);
  });
});