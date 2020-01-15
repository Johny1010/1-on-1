import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actionTypes from '../../store/actions';

import classes from './Diet.module.css';

const Diet = (props) => {
    const products = useSelector(state => state.tests);
    const dispatch = useDispatch();

    let productsList = (
      <div>
          {products.map((product, index) => {
              return <p
              key={index}>{ product.test1 }</p>
          })}
      </div>
    );

    return(
        <div>
            <div>{ productsList }</div>
            <button onClick={() => dispatch({type: actionTypes.ADD_PRODUCT, index: 1, productName: 'test1'})}>+</button>
            <button onClick={() => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: 'test1'})}>-</button>
        </div>

    )
};

export default Diet;