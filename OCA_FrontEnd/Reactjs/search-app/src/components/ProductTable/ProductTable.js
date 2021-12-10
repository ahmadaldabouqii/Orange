import React from 'react';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

const ProductTable = ({ Products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;

  Products.forEach(product => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;

    if (inStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} />);
    }
    rows.push(
      <ProductRow
        name={product.name}
        price={product.price}
        stocked={product.stocked}
      />
    );
    lastCategory = product.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
export default ProductTable;
