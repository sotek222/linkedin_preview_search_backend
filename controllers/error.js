
/**
 * If there is a request made to any route other than the
 * ones assigned it will lead to this callback
 * @param {Object} req - an object containing properties associated with an incoming request from the client
 * @param {Object} resp - an object representing a response. It is used to send status codes, and data to a client
 */
module.exports = (req, resp) => {
  resp.status(404).send('Not Found').end();
};