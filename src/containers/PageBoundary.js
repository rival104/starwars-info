import React, { Component } from 'react';

class PageBoundary extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    if(this.props.peopleList.length === 0){
      return (
        <div>
          <h1>Search the entire list?</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default PageBoundary;