import React from 'react';
import Item from './Item.jsx';

const RepoList = (props) => {
	return(
  		<div>
		    <h4> Repo List Component </h4>
		    There are {props.repos.length} repos.
		    {props.repos.map((repo) => {
		    	return(<Item repo={repo} key={repo.repo_id} />)
		    	})
    	}	
  		</div>
	)
};

export default RepoList;