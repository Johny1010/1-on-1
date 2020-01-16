import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actionTypes from '../../store/actions';

import Product from './Product/Product';

import classes from './Diet.module.css';

const Diet = (props) => {
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    let productsList = (
      <div>
          {products.map((product, index) => {
              return <Product
                  name={product.name}
                  carb={product.carbs}
                  fat={product.fat}
                  proteins={product.prot}
                  key={index}/>
          })}
      </div>
    );

    return(
        <div>
            <div>{ productsList }</div>
            <button onClick={() => dispatch({type: actionTypes.ADD_PRODUCT, productName: 'carbs'})}>+</button>
            <button onClick={() => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: 'carbs'})}>-</button>
        </div>

    )
};

export default Diet;