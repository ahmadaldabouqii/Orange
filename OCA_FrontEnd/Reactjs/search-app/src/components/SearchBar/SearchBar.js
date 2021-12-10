import React from 'react';
import '../SearchBar/SearchBar.css';

const SearchBar = ({
  filterText,
  setFilterText,
  inStockOnly,
  setInStockOnly,
}) => {
  return (
    <form action="">
      <input
        placeholder="Search ..."
        type="search"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
      <button type="submit" onClick={e => e.preventDefault()}>
        <i className="fa fa-search"></i>
      </button>
      <br />
      <label htmlFor="stock">
        <input
          type="checkbox"
          name="stock"
          id="stock"
          value={inStockOnly}
          onChange={e => setInStockOnly(e.target.checked)}
        />
        Only show products on stock
      </label>
    </form>
  );
};

export default SearchBar;
