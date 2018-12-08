import React, { Component } from 'react';

class Products extends Component {

   

    render() {
        
        const { children } = this.props; 

        return (
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {/* <!-- Product --> */}
                    { children }
                </div>
            </section>
        );
    }
}

export default Products;