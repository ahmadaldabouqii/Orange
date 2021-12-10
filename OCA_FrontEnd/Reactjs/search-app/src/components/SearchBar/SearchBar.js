import React from 'react';

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
      <br />
      <label htmlFor="stock">
        <input
          type="checkbox"
          name="stock"
          value={inStockOnly}
          onChange={e => setInStockOnly(e.target.checked)}
        />
        Only show products on stock
      </label>
    </form>
  );
};

export default SearchBar;
