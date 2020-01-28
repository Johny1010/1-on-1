import * as actionTypes from './actions';

const initialState = {
    product: [],
    globalTest: 10
};

// [to do] add init products action -> products from firebase

// [to do] add error action, and init error = false

// [to do] add remove product action

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                product: [
                    ...state.product,
                    {
                        name: action.product.name,
                        carbs: action.product.carbs,
                        fat: action.product.fat,
                        prot: action.product.prot
                    }
                ],
            };
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                product: action.products
            };
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                product: {
                    ...state.product,
                    [action.productName]: state.product[action.productName].carbs - 1,
                    [action.productName]: state.product[action.productName].fat - 2,
                    [action.productName]: state.product[action.productName].prot - 3,
                }
            };
        default:
            return state;
    }
};

export default reducer;