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

// This function should save a repo or repos to the MongoDB
let save = (data) => {
	data.forEach(repo => {
		var newRepo = new Repo(repo);
		newRepo.save((err, results){
			if(err){
				console.log(err, 'Error Saving Repo');
			}	
			
		});
	}	  
}

module.exports.save = save;