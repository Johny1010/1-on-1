import React from 'react';

import classes from './Product.module.css';

const Product = (props) => {

    const sumCalculator = function () {
        let sum = (props.product.carbs + props.product.prot + props.product.fat)*4;
        return sum;
    };

    return(
        <div className={classes.ProductCard}>
            <h3>{props.product.name}</h3>
            <div className={classes.Macros}>
                <p>Carbs: {props.product.carbs} kcal</p>
                <p>Fat: {props.product.fat} kcal</p>
                <p>Proteins: {props.product.prot} kcal</p>
            </div>
            <p>Sum: {sumCalculator()} kcal</p>
        </div>
    )
};

export default Product;