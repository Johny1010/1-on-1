import React from 'react';

import classes from './ProductDescription.module.css';

const ProductDescription = (props) => {
  const product = props.location.product;

  // [to do] add more fields to product: description, photo...

  return (
      <div>
        <h1>Product: {product.name}</h1>
          <h2>Tu będzie fota: {product.description}</h2>
        <p>Carbs:{product.carbs}</p>
        <p>Fat:{product.fat}</p>
        <p>Proteins:{product.prot}</p>
      </div>
  )
};

export default ProductDescription;