# Linkedn Preview Search Server

This test application uses the Google Custom Search API to return Linkedin Account previews from the top search result

## Features:

This application is to be used with a React Frontend, that can be found [here](https://github.com/sotek222/linkedin_preview_search_frontend). Clients will be able to:

- Request a linkedin preview, that is returned in JSON format, by sending a valid linkedin url. e.g. https://wwww.linkedin.com/in/matthew-masiello

## Technology:

This project was built using Nodejs with Express.js. In addition it uses:

- node-fetch (for an easier time making HTTP requests)
- Mocha chai (for testing the server)
- dotenv (for storing environment variables in development)

## Instructions for Running:

- Clone this repo down and cd into it
- Run `npm install` (this will install all necessary dependencies)
- In order to successfully use the dotenv module and the google search API follow these steps:
  - Make sure to generate a Google Custom Search API key and Search Engine ID. [You can learn about how to do this here!](https://developers.google.com/custom-search/v1/overview)
  - Once you have these keys you must create a `.env` file in your root directory and the keys following the syntax and naming found in `./controllers/search.js` under the `createEndpoint` function. Information on how to set this up can be found in more detail [here](https://www.npmjs.com/package/dotenv)
  - Once you have set this up you can run `npm start` and make requests to server at the available endpoints

---
