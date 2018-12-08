import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Message from '../components/Message';
import propTypes from 'prop-types';

class MessageContainer extends Component {
    render() {

        const { message } = this.props;

        return (
            <Message message={message} />
        );
    }
}

MessageContainer.propTypes = {
    message: propTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps)(MessageContainer);