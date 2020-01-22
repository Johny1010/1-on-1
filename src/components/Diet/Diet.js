import React from 'react';
import { useSelector } from 'react-redux';

import Product from './Product/Product';

import classes from './Diet.module.css';
import NewProduct from './Product/NewProduct/NewProduct';

const Diet = (props) => {
    const products = useSelector(state => state.product);

    let productsList = (
      <div>
          {products.map((product) => {
              return (
                  <div>
                      <Product
                          name={product.name}
                          carb={product.carbs}
                          fat={product.fat}
                          proteins={product.prot}
                          key={product.name}/>
                  </div>
              )
          })}
      </div>
    );

    return(
        <div>
            <div>{ productsList }</div>
        </div>

    )
};

export default Diet;