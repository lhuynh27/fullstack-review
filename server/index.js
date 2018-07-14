const express = require('express');
let app = express();
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;
const top25 = require('../database/index.js').top25;

app.use(express.static(__dirname + '/../client/dist'));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  let body = '';
  req.on('data',(chunk) => {
    body += chunk;
  }).on('end', () => {
    getReposByUsername(body, (err, data) => {
      if(err) return err;
      save(data);
      res.send('Post Works!');
    });
  });
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  top25((err, repo) => {
  
  });
  res.send('Get Request Completed!');
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

