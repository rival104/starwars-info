import React, { Component, Fragment } from 'react';
import SearchBox from '../components/SearchBox';
import PeopleCardList from '../components/PeopleCardList';
import Pagination from 'react-pagination-js';
import PageBoundary from './PageBoundary';
import Peoples from '../components/default.json'
import "react-pagination-js/dist/styles.css"; // import css
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "https://swapi.co/api/people/?page=",
      peoples: [],
      pDetail: "",
      name: "",
      searchfield: "",
      count: 0,
      activePage: 1
    };
  }

  changeCurrentPage = pageNumber => {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
    //fetch a data
    //or update a query to get data
  };

  componentDidMount() {
    this.setState({ peoples: Peoples.results });
    const url = this.state.url + this.state.activePage;
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(peoples => {
        this.setState({ peoples: peoples.results });
        this.setState({ count: peoples.count });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activePage !== prevState.activePage) {
      const url = this.state.url + this.state.activePage;
      fetch(url)
        .then(response => response.json())
        .then(peoples => {
          this.setState({ peoples: peoples.results });
        });
    }

    if (this.state.url !== prevState.url) {
      const url = this.state.url;
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

  queryPeople = () => {
    // console.log(`query: ${this.state.searchfield}`);
    const url = `https://swapi.co/api/people/?search=${this.state.searchfield}`;
    //TODO: update query urls for pages..
    fetch(url)
      .then(response => response.json())
      .then(peoples => {
        this.setState({ peoples: peoples.results });
        this.setState({ count: peoples.count });
        this.setState({ activePage: 1 });
      });
  };

  showMore = (url, name) => {
    this.setState({ pDetail: url, name: name});
  };

  hideMore = () => {
    this.setState({ pDetail: "" });
  };

  render() {
    const { peoples, searchfield, pDetail, name } = this.state;

    const filterPoeple = peoples.filter(people => {
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">Star Wars</h1>
          <SearchBox
            searchChange={this.onSearchChange}
            query={this.queryPeople}
          />
          <Pagination
            currentPage={this.state.activePage}
            totalSize={this.state.count}
            sizePerPage={10}
            changeCurrentPage={this.changeCurrentPage}
            theme="dark"
          />
          <PageBoundary
            peopleList={filterPoeple}
            query={this.queryPeople}
            url={pDetail}
            name={name}
            hideMore={this.hideMore}
          >
            <PeopleCardList
              peopleList={filterPoeple}
              showMore={this.showMore}
            />
          </PageBoundary>
        </div>
      </Fragment>
    );
  }
}

export default App;
