import * as actionTypes from './actions';

const initialState = {
    product: [
        {
            name: 'product1',
            carbs: 0,
            fat: 2,
            prot: 1
        },
        {
            name: 'product2',
            carbs: 1,
            fat: 1,
            prot: 1
        },
        {
            name: 'product3',
            carbs: 2,
            fat: 2,
            prot: 3
        },
        {
            name: 'product4',
            carbs: 4,
            fat: 5,
            prot: 7
        },
    ],
    globalTest: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                product: [
                    ...state.product,
                    {
                        name: action.productName,
                        carbs: action.productCarbs,
                        fat: action.productFat,
                        prot: action.productProteins
                    }
                ],
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