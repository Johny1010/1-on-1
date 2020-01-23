import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct } from '../../../../store/actions';

import classes from './NewProduct.module.css';

const NewProduct = (props) => {
    const dispatch = useDispatch();

    let [product, setProduct] = useState({
        name: '',
        carbs: 1.5,
        fat: 1,
        prot: 1
    });

    return(
        <div>
            <label>Product name: </label>
            <input type="text"
                   value={product.name}
                   onChange={event => setProduct({...product, name: event.target.value})}/>
            <br/>
            <label>Carbs: </label>
            <input type="number"
                   value={product.carbs}
                   onChange={event => setProduct({...product, carbs: parseFloat(event.target.value)})}/>
            <span> kcal, </span>
            <label>Fat: </label>
            <input type="number"
                   value={product.fat}
                   onChange={event => setProduct({...product, fat: parseFloat(event.target.value)})}/>
            <span> kcal, </span>
            <label>Proteins: </label>
            <input type="number"
                   value={product.prot}
                   onChange={event => setProduct({...product, prot: parseFloat(event.target.value)})}/>
            <span> kcal </span>
            <br/>
            <button onClick={() => dispatch(addProduct(product.name, product.carbs, product.fat, product.prot))}>+</button>
        </div>
    )
};

export default NewProduct;