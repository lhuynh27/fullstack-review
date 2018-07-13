const request = require('request');
const config = require('../config.js');

let getReposByUsername = (req, res) => {
  // TODO - Use the request module to request repos for a specific user from the github API
  // The options object has been provided to help you out, but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let cb = (error, response, body) => {
    if(!error && response.statusCode = 200) {
      var info = JSON.parse(body);
      console.log(info);
    }
  }
  
  request(options, cb);
}

module.exports.getReposByUsername = getReposByUsername;

https://api.github.com/users/lhuynh27/repos