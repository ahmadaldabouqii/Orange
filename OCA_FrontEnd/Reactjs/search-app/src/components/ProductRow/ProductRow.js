import React from 'react';

const ProductRow = ({ name, price, stocked }) => {
  const newName = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;
  return (
    <tr>
      <td>{newName}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
