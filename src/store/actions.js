export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const saveResult = (name, carbs, fat, proteins) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addProduct(name, carbs, fat, proteins))
        }, 5000);
    };
};

export const addProduct = (name, carbs, fat, proteins) => {

    return {
        type: ADD_PRODUCT,
        productName: name,
        productCarbs: carbs,
        productFat: fat,
        productProteins: proteins
    }
};