import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CardResult from './../components/CardResult';
import * as Message from './../constants/Message';
import { actRemoveProduct, actChangeMessage, actUpdateQuantityProductInCart } from './../actions/index';

class CartContainer extends Component {

    showCartItem(cart){
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
            </tr>;
        const { onRemoveProduct, changeMessage, onUpdateProductQuantity } = this.props;

        if(cart.length > 0){
            result = cart.map((value, index) => 
                <CartItem onUpdateProductQuantity={onUpdateProductQuantity} 
                          changeMessage={changeMessage} 
                          onRemoveProduct={onRemoveProduct} 
                          item={value}
                          key={index} />);
        }

        return result;
    }

    showToTalAmount(cart){
        var result = null;

        if(cart.length > 0){
            result = <CardResult cart={cart} />
        }

        return result;
    }

    render() {

        const { cart } = this.props;
        
        return (
            <Cart>
                { this.showCartItem(cart) }
                { this.showToTalAmount(cart) }
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }),
            quantity: PropTypes.number.isRequired
        })
    )
}

const mapStateToProps = state  => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onRemoveProduct: (product) => {
            dispatch(actRemoveProduct(product))
        },
        changeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductQuantity: (product, quantity) => {
            dispatch(actUpdateQuantityProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);