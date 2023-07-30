import React from "react";




function Search({handleSearch}) {
  return (
    <div className="searcher">
      <input
        type="text"
        placeholder="Search your...."
        onChange={handleSearch}
        className="search"
      />
     

    </div>
  );
}

export default Search;