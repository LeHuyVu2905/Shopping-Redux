import { combineReducers } from 'redux';
import productsReducer from './product';
import cartReducer from './cart';
import messageReducer from './message'

const appReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    message: messageReducer
})

export default appReducers;