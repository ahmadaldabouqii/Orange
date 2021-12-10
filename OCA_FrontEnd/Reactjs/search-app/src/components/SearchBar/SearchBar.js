import React from 'react';

const SearchBar = () => {
  return (
    <form action="">
      <input type="search" />
      <br />
      <label htmlFor="stock">
        <input type="checkbox" name="stock" />
        Only show products on stock
      </label>
    </form>
  );
};

export default SearchBar;
