import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from './../actions/index';

class ProductsContainer extends Component {

    showProducts(products){
        var result = null;

        const { addToCart, changeMessage } = this.props;

        if(products.length > 0){
            result = products.map((product, index) => {
                return <Product changeMessage={changeMessage} addToCart={addToCart} key={ index } product={ product } />
            });
        }

        return result;
    }

    render() {
        
        const { products } = this.props;

        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

const mapStateToProps = state  => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        addToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        changeMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);