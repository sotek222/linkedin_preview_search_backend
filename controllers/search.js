const fetch = require('node-fetch');

function findLinkedinPreview(req, resp, _){
  const linkedinUrl = req.body.url;
  
  fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${linkedinUrl}`)
  .then(response => response.json())
  .then(searchResult => {
    const topSearchResult = searchResult.items[0];
    const { title, link, snippet } = topSearchResult;
    const imageUrl = topSearchResult.pagemap.cse_image.pop().src;

    resp.json({ title, link, snippet, imageUrl});
    resp.end();
  })
  .catch(err => console.log("THERE WAS AN ERROR FETCHING FROM GOOGLE: ", err));
};

module.exports = {
  findLinkedinPreview
}