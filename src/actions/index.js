import * as types from './../constants/ActionType';

export const actAddToCart = (product, quantity) => {
    return { 
        type: types.ADD_TO_CART,
        product,
        quantity
    }
};

export const actChangeMessage = (message) => {
    return {
        type: types.CHANGE_MESSAGE,
        message
    }
};

export const actRemoveProduct = (product) => {
    return {
        type: types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateQuantityProductInCart = (product, quantity) => {
    return {
        type: types.UPDATE_PRODUCT_QUANTITY_IN_CART,
        product,
        quantity
    }
}