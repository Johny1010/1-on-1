import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actionCreators from '../../store/actions';

import Product from './Product/Product';

import classes from './Diet.module.css';

const Diet = (props) => {
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    const onProductInit = () => dispatch(actionCreators.fetchProductsInit());

    useEffect(() => {
        onProductInit();
    }, [onProductInit]);

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

    // [to do (maybe)] add jafar

    // [to do] add error view if fetching product fail (probably error modal for whole app)

    // [to do] add product details view (with photo and description) -> dispatch remove product here

    return(
        <div>
            <div>{ productsList }</div>
        </div>

    )
};

export default Diet;