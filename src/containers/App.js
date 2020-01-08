import React, { Component, Fragment } from 'react';
import SearchBox from '../components/SearchBox';
import PeopleCardList from '../components/PeopleCardList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(peoples => this.setState({peoples: peoples.results}));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { peoples, searchfield } = this.state;

    const filterPoeple = peoples.filter( (people) => {
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">Star Wars</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <PeopleCardList peopleList={filterPoeple} />
        </div>
      </Fragment>
    );
  }
}

export default App;
