const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id: Number,
  username: String,
  repo_name: String,
  repo_url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // This function should save a repo or repos to the MongoDB
  
}

module.exports.save = save;