const expect = require('chai').expect;
const BASE_URL = "http://localhost:3001/";
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

const fetchDataMock = () => {
  return Promise.resolve(MOCK_GOOGLE_RESPONSE);
};

const requestMock = () => {
  return {
    body: {
      url: "https://www.linkedin.com/in/matthew-masiello"
    }
  }
};

const responseMock = () => {
  const noop = () => { };
  return {
    json: noop,
    end: noop
  }
}


describe('application', () => {
  it('handles fetch data correctly', done => {
    findLinkedinPreview(requestMock, responseMock, fetchDataMock)
  });
});