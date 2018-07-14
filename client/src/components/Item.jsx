import React from 'react';

const Item = (props) => {
	return (
	<div>
		<a href={props.repo.repo_url}>Repo Name: {props.repo.repo_name}</a>
		<div>Repo ID: {props.repo.repo_id}</div>
		<div>Username: {props.repo.username}</div>
		<div>Forks: {props.repo.forks}</div>
	</div>
	)
};
	
export default Item;