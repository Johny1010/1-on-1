export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (name, carbs, fat, proteins) => {
    return {
        type: ADD_PRODUCT,
        productName: name,
        productCarbs: carbs,
        productFat: fat,
        productProteins: proteins
    }
};