import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

const FilterableProductTable = () => {
  return (
    <>
      <SearchBar />
      <ProductTable />
    </>
  );
};
export default FilterableProductTable;
