import React from "react";

const PeopleCard = ({ name, birth_year, height}) => {
  return (
    <div className="bg-light-green-gradient dib br3 pa3 ma2 grow bw2 shadow-5">
      <h2>{name}</h2>
      <p>Born: {birth_year}</p>
      <p>Height: {height}</p>
    </div>
  );
};

export default PeopleCard;
