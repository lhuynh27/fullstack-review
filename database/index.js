const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  repo_id:
    { type: Number,
      unique: true,
      require: true,
    },
  username: String,
  repo_name: String,
  repo_url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

// This function should save a repo or repos to the MongoDB
let save = (data) => {
	data.forEach(repo => {
		var newRepo = new Repo(repo);
		newRepo.save((err, repo) => {
      if(err){
        console.log('Error Saving to DB:', err);
      }
    });
  console.log('SAVE WORKED!')
	});
};  

let top25 = (callback) => {
  Repo.find({}).limit(25).sort({forks: -1 })
  .exec((err, callback) => {
    if(err) return err;
    callback(Repo);      
  });
}

module.exports.save = save;
module.exports.top25 = top25;

