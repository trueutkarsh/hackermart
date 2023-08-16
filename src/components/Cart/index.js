import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { CartItemsContext } from "../HackerMart";

function Cart() {

    const [cartItems, setCartItems] = useContext(CartItemsContext);
    const [totalPrice, setTotalPrice] = useState(cartItems.map((item) => (item.price)).reduce((prev, curr) => prev + curr, 0.0))

    function clickRemove(product) {
        let indx = cartItems.indexOf(product)
        if (indx !== -1) {
            cartItems.splice(indx, 1);
            setCartItems([...cartItems])
        }
    }

    useEffect(() => {
        setTotalPrice(cartItems.map((item) => (item.price)).reduce((prev, curr) => prev + curr, 0.0))
    }, [cartItems])
    


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
                            {
                                cartItems.map((product) => (
                                    <tr key={product.id}>
                                        <td data-testid={`product-name-1`}>{product.name}</td>
                                        <td data-testid={`product-description-1`}>{product.description}</td>
                                        <td data-testid={`product-cost-1`}>{`${product.price}`}</td>
                                        <td>
                                            <button data-testid={`remove-from-cart-button-1`} onClick={() => clickRemove(product)}>
                                                Remove from cart
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {/* <tr key={`row-1`}>
                                <td data-testid={`product-name-1`}>Product 1</td>
                                <td data-testid={`product-description-1`}>This is the first product</td>
                                <td data-testid={`product-cost-1`}>$9.99</td>
                                <td>
                                    <button data-testid={`remove-from-cart-button-1`}>
                                        Remove from cart
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                <section className="layout-row align-items-center justify-content-center mt-30">
                    <label className="cart-total" data-testid="cart-total">{`Total: ${Math.round(totalPrice * 100) / 100}`}</label>
                </section>
            </div>
        </div>
    );
}

export default Cart;
