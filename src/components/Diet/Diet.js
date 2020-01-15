import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actionTypes from '../../store/actions';

import classes from './Diet.module.css';

const Diet = (props) => {
    const product = useSelector(state => state.tests.test1);
    const dispatch = useDispatch();

    return(
        <div>
            <p>{ product }</p>
            <button onClick={() => dispatch({type: actionTypes.ADD_PRODUCT, productName: 'test1'})}>+</button>
            <button onClick={() => dispatch({type: actionTypes.REMOVE_PRODUCT, productName: 'test1'})}>-</button>
        </div>

    )
};

export default Diet;