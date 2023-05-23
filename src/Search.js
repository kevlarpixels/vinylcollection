import React from 'react';
import './Search.css';

function Search(props) {
  const { onSearch } = props;

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className='search'>
      <input type="text" placeholder="Search albums" onChange={handleSearch} />
    </div>
  );
}

export default Search;