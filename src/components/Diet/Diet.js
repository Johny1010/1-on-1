import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, Route} from 'react-router-dom';

import * as actionCreators from '../../store/actions';

import Product from './Product/Product';
import ProductDescription from './Product/ProductDescription/ProductDescription';

import classes from './Diet.module.css';

const Diet = (props) => {
    const products = useSelector(state => state.product);
    const dispatch = useDispatch();

    const onProductsInit = () => dispatch(actionCreators.fetchProductsInit());

    useEffect(() => {
        onProductsInit();
    }, []);

    let productsList = (
      <div>
          {products.map((product) => {
              let newTo = {
                  pathname: '/diet/' + product.id,
                  product: product
              };
              return (
                  <div
                      key={product.id}>
                      <Link to={newTo}
                            className={classes.Product}
                            params={product}>
                          <Product
                              product={product}/>
                      </Link>
                  </div>
              )
          })}
      </div>
    );

    // [to do (maybe)] add jafar form control

    // [to do] add error view if fetching product fail (probably error modal for whole app)

    // [to do] add product details view (with photo and description) -> dispatch remove product here

    return(
        <div className={"row"}>
            <div className={"col-md-6" + ' ' + classes.Product}>{ productsList }</div>
            <div className={"col-md-6"}>
                <Route path="/diet/:id" component={ProductDescription}/>
            </div>
        </div>

    )
};

export default Diet;