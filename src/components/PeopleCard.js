import React, { Component } from "react";

class PeopleCard extends Component {
  handleClick = () => {
    const { showMore, person } = this.props;
    showMore(person);
  };

  render() {
    const { person } = this.props;
    return (
      <div className="bg-light-green-gradient dib br3 pa3 ma2 grow bw2 shadow-5">
        <h2>{person.name}</h2>
        <p>Born: {person.birth_year}</p>
        <p>Height:{person.height}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.handleClick}
        >
          More
        </button>
      </div>
    );
  }
};

export default PeopleCard;
