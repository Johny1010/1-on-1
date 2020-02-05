import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as actionCreators from '../../../../store/actions';

import classes from './NewProduct.module.css';
import ToggleContent from '../../../../hoc/ToogleContent/ToggleContent';
import Modal from '../../../UI/Modal/Modal';

const NewProduct = (props) => {
    const dispatch = useDispatch();

    let [product, setProduct] = useState({
        name: '',
        carbs: null,
        fat: null,
        prot: null
    });

    // [to do] redirect -> Diet component after dispatch

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
            <ToggleContent
                toggle={show => <button onClick={show}>Add product</button>}
                content={hide => (
                    <Modal hide={hide}>
                        <h2>{product.name}</h2>
                        <p>Carbs: {product.carbs}</p>
                        <p>Fat: {product.fat}</p>
                        <p>Proteins: {product.prot}</p>
                        <button onClick={() => dispatch(actionCreators.addProductInit(product))}>Confirm and add product</button>
                    </Modal>
                )}
            />
        </div>
    )
};

export default NewProduct;