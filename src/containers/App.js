import React, { Component, Fragment } from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchfield: ""
    };
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">Star Wars</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
      </Fragment>
    );
  }
}

export default App;
