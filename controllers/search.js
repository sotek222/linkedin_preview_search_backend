const fetch = require('node-fetch');

/**
 * returns a complete google search URL for use in a fetch request
 * @param {string} linkedinUrl - a string representing a valid linkedin url
 */
const createEndpoint = (linkedinUrl) => {
  return `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${linkedinUrl}`
}

/**
 * 
 * @param {string} linkedinUrl - a string representing a valid linkedin url
 */
const fetchData = (linkedinUrl) => {
  return fetch(createEndpoint(linkedinUrl))
    .then(response => response.json())
};

/**
 * gets search results from google and cleans it up for a JSON response to the requesting client
 * @param {Object} req  - an object containing all data sent with the request from the client
 * @param {Object} resp - an object representing a response object. It can be used to send data to a client
 */
const findLinkedinPreview = (req, resp) => {
  // pull the url out of the request body
  const linkedinUrl = req.body.url;
  fetchData(linkedinUrl)
    .then(searchResult => {
      // if we fail to pull any results we land in the catch block
      try {
        // grab the top result
        const topSearchResult = searchResult.items[0];
        // destructure the required properties out of that result
        const { title, link, snippet } = topSearchResult;
        // send the result as JSON back to the client
        resp.json({ title, link, snippet });
        // signifies the response is finished
        resp.end();
      } catch (err) {
        // This will only occur if the items property is none existant 
        // we want to send a 404 status code to the client so it can 
        // hendle the error on that end
        resp.status(404).send("No Search Reults found");
        resp.end();
      }
    })
    .catch(err => console.log("THERE WAS AN ERROR FETCHING FROM GOOGLE: ", err));
};

module.exports = {
  findLinkedinPreview
}