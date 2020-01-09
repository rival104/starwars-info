import React from "react";


const SearchBox = ({searchChange, query}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search peoples"
        onChange={searchChange}
      />
      <button type="button" className="pa3" onClick={query}>
        Search Entire List
      </button>
    </div>
  );
};

export default SearchBox;
