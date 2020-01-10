import React from 'react';
import PeopleCard from "../components/PeopleCard";

const PeopleCardList = ({peopleList, showMore}) => {

  const list = peopleList.map((people, i) => {
    return (
        <PeopleCard
          key={i}
          person={people}
          showMore={showMore}
        />
    );
  })
  
  return <div>{list}</div>;
} 

export default PeopleCardList;