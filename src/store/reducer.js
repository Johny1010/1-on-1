import * as actionTypes from './actions';

const initialState = {
    tests: {
        test1: 0,
        test2: 2,
        test3: -1
    },
    globalTest: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                tests: {
                    ...state.tests,
                    [action.productName]: state.tests[action.productName] + 1
                }
            };
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                tests: {
                    ...state.tests,
                    [action.productName]: state.tests[action.productName] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;