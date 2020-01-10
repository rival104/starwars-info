import React, { Component } from 'react';
import PeopleCardDetail from '../components/PeopleCardDetail';

class PageBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      notFound: false
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1> Ooops! Something went wrong </h1>;
    }
    //show propmt to do query on api list
    if (this.props.peopleList.length === 0) {
      return (
        <div>
          <h1>Search the entire list?</h1>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.props.query}
          >
            Submit
          </button>
        </div>
      );
    }
    //show details when more clicked
     if (this.props.url.length > 0) {
       return (
         <PeopleCardDetail url={this.props.url} name={this.props.name} hideMore={this.props.hideMore}/>
       );
     }
    //default list
    return this.props.children;
  }
}

export default PageBoundary;