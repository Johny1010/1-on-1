import * as actionTypes from './actions';

const initialState = {
    tests: [
        {
            test1: 0,
            test2: 2,
            test3: -1
        },
        {
            test1: 1,
            test2: 1,
            test3: -1
        },
        {
            test1: 2,
            test2: 2,
            test3: -3
        },
        {
            test1: 4,
            test2: 5,
            test3: -7
        },
    ],
    globalTest: 10
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT:
            return {
                ...state,
                tests: {
                    ...state.tests,
                    [action.productName]: state.tests[action.index][action.productName] + 1
                }
            };
        case actionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                tests: {
                    ...state.tests,
                    [action.productName]: state.tests[action.index][action.productName] - 1
                }
            };
        default:
            return state;
    }
};

export default reducer;