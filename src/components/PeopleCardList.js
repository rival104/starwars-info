import React from 'react';
import PeopleCard from "../components/PeopleCard";

const PeopleCardList = ({peopleList}) => {

  const list = peopleList.map((people, i) => {
    return(
      <PeopleCard 
        key={i}
        name={people.name}
        birth_year={people.birth_year}
        height={people.height}
      />
    );
  })
  
  return <div>{list}</div>;
} 

export default PeopleCardList;