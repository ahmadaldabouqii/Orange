import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

const ProductTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow category="Fruits" />
        <ProductRow />
      </tbody>
    </table>
  );
};
export default ProductTable;
