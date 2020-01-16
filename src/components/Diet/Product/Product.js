import React from 'react';

import classes from './Product.module.css';

const Product = (props) => {

    const sumCalculator = function () {
        let sum = (props.carb + props.proteins + props.fat)*4;
        return sum;
    };

    return(
        <div>
            <h1>Product: {props.name}</h1>
            <p>Carbs:{props.carb}</p>
            <p>Fat:{props.fat}</p>
            <p>Proteins:{props.proteins}</p>
            <p>Sum: {sumCalculator()} kcal</p>
        </div>
    )
};

export default Product;