import React from 'react';
import PeopleCard from "../components/PeopleCard";

const PeopleCardList = ({peopleList, showMore}) => {

  const list = peopleList.map((people, i) => {
    return (
        <PeopleCard
          key={i}
          name={people.name}
          birth_year={people.birth_year}
          height={people.height}
          url={people.url}
          showMore={showMore}
        />
    );
  })
  
  return <div>{list}</div>;
} 

export default PeopleCardList;