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
        carbs: 1.5,
        fat: 1,
        prot: 1
    });

    // [to do] add sum up modal and sent product there -> props, and dispatch add product there, redirect -> Diet component


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
                toggle={show => <button onClick={show}>Open</button>}
                content={hide => (
                    <Modal>
                        <button onClick={() => dispatch(actionCreators.addProductInit(product))}>+</button>
                        <button onClick={hide}>Close</button>
                    </Modal>
                )}
            />
        </div>
    )
};

export default NewProduct;