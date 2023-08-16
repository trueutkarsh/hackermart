import React, { useContext } from "react";
import "./index.css";
import products from "../../data/products";
import { CartItemsContext } from "../HackerMart";

function Home() {

    const [cartItems, setCartItems] = useContext(CartItemsContext);

    console.log("cartItems", cartItems)

    function addToCart(product) {
        if (cartItems.indexOf(product) === -1) {
            setCartItems([...cartItems, product])
        }
    }


    return (
        <div className="layout-column align-items-center justify-content-start" data-testid="home">
            <h3 data-testid="home-heading">Home</h3>
            <div className="products" data-testid="featured-products">
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
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td data-testid={`product-name-1`}>{product.name}</td>
                                        <td data-testid={`product-description-1`}>{product.description}</td>
                                        <td data-testid={`product-cost-1`}>{`${product.price}`}</td>
                                        <td>
                                            <button data-testid={`add-to-cart-button-1`} onClick={() => addToCart(product)}>
                                                Add to cart
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
                                    <button data-testid={`add-to-cart-button-1`}>
                                        Add to cart
                                    </button>
                                </td>
                            </tr>
                            <tr key={`row-3`}>
                                <td data-testid={`product-name-3`}>Product 3</td>
                                <td data-testid={`product-description-3`}>This is the third product</td>
                                <td data-testid={`product-cost-3`}>$29.99</td>
                                <td>
                                    <button data-testid={`add-to-cart-button-3`}>
                                        Add to cart
                                    </button>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;
