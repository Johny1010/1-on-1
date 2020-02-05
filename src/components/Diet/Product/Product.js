import React from 'react';

import classes from './Product.module.css';

const Product = (props) => {

    const sumCalculator = function () {
        let sum = (props.carb + props.proteins + props.fat)*4;
        return sum;
    };

    return(
        <div className={classes.ProductCard}>
            <h3>{props.name}</h3>
            <div className={classes.Macros}>
                <p>Carbs: {props.carb} kcal</p>
                <p>Fat: {props.fat} kcal</p>
                <p>Proteins: {props.proteins} kcal</p>
            </div>
            <p>Sum: {sumCalculator()} kcal</p>
        </div>
    )
};

export default Product;