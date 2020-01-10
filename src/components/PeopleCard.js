import React, { Component } from "react";

class PeopleCard extends Component {
  handleClick = () => {
    this.props.showMore(this.props.url, this.props.name);
  };

  render() {
    const { name, birth_year, height} = this.props;
    return (
      <div className="bg-light-green-gradient dib br3 pa3 ma2 grow bw2 shadow-5">
        <h2>{name}</h2>
        <p>Born: {birth_year}</p>
        <p>Height:{height}</p>
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
