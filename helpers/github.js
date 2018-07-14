const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific user from the github API
  // The options object has been provided to help you out, but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let filterData = (error, response, body) => {
    if(error){
      callback(error, null);
    }
    if(!error) {
      var parseBody = JSON.parse(body);
      var repos = [];
      parseBody.forEach(repo => {
        var obj = {
          repo_id: repo.id,
          username: repo.owner.login,
          repo_name: repo.name,
          repo_url: repo.html_url,
          forks: repo.forks
        }
      repos.push(obj);
    });
    callback(null, repos);
    //console.log(repos, 'I AM LOCATED IN YOUR GITHUB.JS');
    }
  }
  request(options, filterData);
};

module.exports.getReposByUsername = getReposByUsername;