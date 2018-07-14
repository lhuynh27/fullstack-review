const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;

app.use(express.static(__dirname + '/../client/dist'));


// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let body = '';
  req.on('data',(chunk) => {
    body += chunk;
  }).on('end', () => {
    getReposByUsername(body, (data) => {
      //SEND OVER TO DATABASE
      //USE SAVE FUNCTION HERE

      res.send('Post Works!') 
    });
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  res.send('Get Works')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

