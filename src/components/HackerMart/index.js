import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Cart from "../Cart";
import Navbar from "../Navbar";
import "./index.css";


export const CartItemsContext = createContext();


function HackerMart() {

	const [cartItems, setCartItems] = useState([]);


	return (
		<CartItemsContext.Provider value={[cartItems, setCartItems]}>

		<div className="hacker-mart">
			<div className="layout-column align-items-center justify-content-start">
				<Navbar data-testid="header" />
				<Routes>
					<Route element={<Home/>} path="/"/>
					<Route element={<Cart/>} path="/cart"/>
				</Routes>
			</div>
		</div>
		</CartItemsContext.Provider>
	);
}

export default HackerMart;
