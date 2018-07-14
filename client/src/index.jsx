import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  this.search = this.search.bind(this);
  }

  componentDidMount() {
    let contextScope = this;
    $.get("http://127.0.0.1:1128/repos")
      .done((data) => {
        contextScope.setState({
          repos: data
        })
      });
  }

  search (term) {
    let contextScope = this;
    console.log(`${term} was searched`);
    $.post("http://127.0.0.1:1128/repos", term)
      .done( (data)=> {
        contextScope.setState({
          repos: data
        })
        console.log('AJAX Request Successful!');
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));