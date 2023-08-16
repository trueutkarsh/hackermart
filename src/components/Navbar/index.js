import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
    return (
        <div className="layout-column justify-content-center align-items-center navbar">
            <div className="layout-row justify-content-around align-items-center mt-20 links" data-testid="navigation-tabs">
                <Link className="nav-link" id="home-link" data-testid="home-link" to="/">Home</Link>
                <Link className="nav-link" id="cart-link" data-testid="cart-link" to="/cart">Cart</Link>
            </div>
        </div>
    );
}

export default Navbar;
