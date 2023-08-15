import React from "react";
import "./index.css";

function Cart() {
    return (
        <div className="layout-column align-items-center justify-content-start" data-testid="shopping-cart">
            <h3 data-testid="cart-heading">Cart</h3>
            <div className="cart" data-testid="cart">
                <div className="card w-200 pt-30 pb-8 mt-10">
                    <table>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Cost</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody data-testid="products">
                            <tr key={`row-1`}>
                                <td data-testid={`product-name-1`}>Product 1</td>
                                <td data-testid={`product-description-1`}>This is the first product</td>
                                <td data-testid={`product-cost-1`}>$9.99</td>
                                <td>
                                    <button data-testid={`remove-from-cart-button-1`}>
                                        Remove from cart
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <section className="layout-row align-items-center justify-content-center mt-30">
                    <label className="cart-total" data-testid="cart-total">Total: 9.99</label>
                </section>
            </div>
        </div>
    );
}

export default Cart;
