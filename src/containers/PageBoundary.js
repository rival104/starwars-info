import React, { Component } from 'react';

class PageBoundary extends Component {
  render() {
    if(this.props.peopleList.length === 0){
      return (
        <div>
          <h1>Search the entire list?</h1>
          <button type="button" className="btn btn-info" onClick={this.props.query}>
            Submit
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default PageBoundary;