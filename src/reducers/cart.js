import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));

const initialState = data ? data : [];

const findProductInCart = (cart, product) => {
    var index = -1;

    if(cart.length > 0){
        for(var i = 0; i < cart.length; i++){
            if(product.id === cart[i].product.id){
                index = i;
                break;
            }
        }
    }

    return index;
}

const cartReducer = (state = initialState, action) => {

    const { product, quantity } = action;
    var index = -1;

    switch(action.type){
        case types.ADD_TO_CART:
            
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity++;
            }
            else{
                state.push({
                    product,
                    quantity
                });
            }

            localStorage.setItem('CART', JSON.stringify(state));      
            return [...state];

        case types.DELETE_PRODUCT_IN_CART:

            index = findProductInCart(state, product);
            if(index !== -1){
                state.splice(index, 1);
            }

            localStorage.setItem('CART', JSON.stringify(state));      
            return [...state];

        case types.UPDATE_PRODUCT_QUANTITY_IN_CART:
    
            index = findProductInCart(state, product);
            if(index !== -1){
                state[index].quantity = quantity;
            }

            localStorage.setItem('CART', JSON.stringify(state));      
            return [...state];

        default:
            return [...state];
    }
}

export default cartReducer;