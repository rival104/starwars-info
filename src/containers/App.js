import React, { Component, Fragment } from 'react';
import SearchBox from '../components/SearchBox';
import PeopleCardList from '../components/PeopleCardList';
import Pagination from 'react-pagination-js';
import PageBoundary from './PageBoundary';
import "react-pagination-js/dist/styles.css"; // import css
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      searchfield: "",
      count: 0,
      activePage: 1,
      pageNumber: 1
    };
  }

  changeCurrentPage = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    //fetch a data
    //or update a query to get data
  };

  componentDidMount() {
    let url = `https://swapi.co/api/people/?page=${this.state.pageNumber}`;

    fetch(url)
      .then(response => response.json())
      .then(peoples => {
        this.setState({ peoples: peoples.results });
        this.setState({ count: peoples.count });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activePage !== prevState.activePage) {
      let url = `https://swapi.co/api/people/?page=${this.state.activePage}`;
      fetch(url)
        .then(response => response.json())
        .then(peoples => {
          this.setState({ peoples: peoples.results });
        });
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { peoples, searchfield } = this.state;

    const filterPoeple = peoples.filter(people => {
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">Star Wars</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Pagination
            currentPage={this.state.activePage}
            totalSize={this.state.count}
            sizePerPage={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="dark"
          />
          <PageBoundary peopleList={filterPoeple}>
            <PeopleCardList peopleList={filterPoeple} />
          </PageBoundary>
        </div>
      </Fragment>
    );
  }
}

export default App;
