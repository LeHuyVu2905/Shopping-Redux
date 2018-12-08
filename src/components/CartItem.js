import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    showSubTotal(price, quantity){
        return price * quantity;
    }

    onClickRemove = (product) =>{
        this.props.onRemoveProduct(product);
        this.props.changeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    updateQuantity = (product, quantity) => {
        if(quantity > 0){
            this.props.changeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
        }
        this.props.onUpdateProductQuantity(product, quantity);
    }

    render() {

        const { item } = this.props;
        const { quantity } = item.quantity > 0 ? item : this.state;

        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={ () => this.updateQuantity(item.product, item.quantity - 1) } className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label onClick={ () => this.updateQuantity(item.product, item.quantity + 1) } className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showSubTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button onClick={() => this.onClickRemove(item.product)} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top" title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        );
    }
}

export default CartItem;