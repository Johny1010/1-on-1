import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actionTypes from '../../store/actions';

import Product from './Product/Product';
import NewProduct from './Product/NewProduct/NewProduct';

import classes from './Diet.module.css';

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
            <NewProduct/>
            <div>{ productsList }</div>
        </div>

    )
};

export default Diet;