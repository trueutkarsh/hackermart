import React from 'react';
import { render, fireEvent, act, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import products from './data/products';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import HackerMart from './components/HackerMart';

let homeLink, cartLink;
const addToCart = jest.fn();
const removeFromCart = jest.fn();

HTMLAnchorElement.prototype.click = jest.fn();

describe('Navbar Component', () => {
    beforeEach(() => {
        render(<Router><Navbar /></Router>);
        homeLink = screen.getByTestId('home-link');
        cartLink = screen.getByTestId('cart-link');
    });
    it('renders text "Home" in Home link', () => {
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveTextContent('Home');
    });

    it('renders text "Cart" in Cart link', () => {
        expect(cartLink).toBeInTheDocument();
        expect(cartLink).toHaveTextContent('Cart');
    });

    it('Home link redirects to Home page', () => {
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveTextContent('Home');
        expect(homeLink.getAttribute('href')).toBe('/');
    });

    it('Cart link redirects to Cart page', () => {
        expect(cartLink).toBeInTheDocument();
        expect(cartLink).toHaveTextContent('Cart');
        expect(cartLink.getAttribute('href')).toBe('/cart');
    });
});

describe('Home Component', () => {
    it('displays the correct product details on rendering home page', () => {
        render(<Router><Home products={products} addToCart={() => { }} /></Router>);
        const productName = screen.getByTestId('product-name-1');
        const productCost = screen.getByTestId('product-cost-1');
        expect(productName).toHaveTextContent('Product 1');
        expect(productCost).toHaveTextContent('$9.99');
        const productNames = screen.getAllByTestId(/product-name/i);
        expect(productNames.length).toEqual(products.length);
    });

    it('displays "Add to cart" button for each product', () => {
        render(<Router><Home products={products} addToCart={() => { }} /></Router>);
        const addToCartButtons = screen.getAllByTestId(/^add-to-cart-button-\d+$/i);
        expect(addToCartButtons.length).toEqual(products.length);
        addToCartButtons.forEach((button) => {
            expect(button).toHaveTextContent('Add to cart');
        });
    });

    it('calls "addToCart" function when "Add to cart" button is clicked', () => {
        render(<Router><Home products={products} addToCart={addToCart} /></Router>);
        const addToCartButton = screen.getByTestId('add-to-cart-button-1');
        fireEvent.click(addToCartButton);
        expect(addToCart).toHaveBeenCalledWith(products[0]);
    });
});

describe('Cart Component', () => {

    it('displays the cart details correctly', () => {
        const cart = [products[0], products[1]];
        render(<Router><Cart cart={cart} removeFromCart={removeFromCart} /></Router>);
        const cartElement = screen.getByTestId('cart');
        expect(cartElement).toHaveTextContent('Product Name');
        expect(cartElement).toHaveTextContent('Description');
        expect(cartElement).toHaveTextContent('Cost');
        expect(cartElement).toHaveTextContent('Action');
        expect(cartElement).toHaveTextContent('Product 1');
        expect(cartElement).toHaveTextContent('This is the first product');
        expect(cartElement).toHaveTextContent('$9.99');
        expect(cartElement).toHaveTextContent('Product 2');
        expect(cartElement).toHaveTextContent('This is the second product');
        expect(cartElement).toHaveTextContent('$19.99');
    });

    it('displays the total cost correctly', () => {
        const cart = [products[0], products[1]];
        render(<Router><Cart cart={cart} removeFromCart={removeFromCart} /></Router>);
        const totalElement = screen.getByTestId('cart-total');
        expect(totalElement).toHaveTextContent('$29.98');
    });

    it('removes an item from the cart', () => {
        const cart = [products[0], products[1]];
        render(<Router><Cart cart={cart} removeFromCart={removeFromCart} /></Router>);
        const removeButton = screen.getByTestId('remove-from-cart-button-1');
        fireEvent.click(removeButton);
        expect(removeFromCart).toHaveBeenCalledWith(1);
    });

    it("Check for duplicates when same product is added to cart multiple times", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <HackerMart />
            </MemoryRouter>
        );
        const productToAdd = products[0];
        const addToCartButton = screen.getByTestId(`add-to-cart-button-${productToAdd.id}`);
        fireEvent.click(addToCartButton);
        fireEvent.click(addToCartButton);
        const cartButton = screen.getByTestId("cart-link");
        fireEvent.click(cartButton);
        expect(screen.getByTestId("cart-heading")).toHaveTextContent("Cart");
        expect(screen.getByTestId(`product-name-${productToAdd.id}`)).toBeInTheDocument();
        const totalElement = screen.getByTestId('cart-total');
        expect(totalElement).toHaveTextContent(productToAdd.price);
    });
});


describe("HackerMart Component", () => {
    it("renders Navbar", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <HackerMart />
            </MemoryRouter>
        );
        homeLink = screen.getByTestId('home-link');
        cartLink = screen.getByTestId('cart-link');
        expect(screen.getByTestId("navigation-tabs")).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(homeLink).toHaveTextContent('Home');
        expect(cartLink).toBeInTheDocument();
        expect(cartLink).toHaveTextContent('Cart');
    });

    it("renders Home page when '/' route is clicked", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <HackerMart />
            </MemoryRouter>
        );
        act(() => {
            const homeLink = document.querySelector('#home-link');
            homeLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        });
        const homeHeading = screen.getByTestId("home-heading");
        expect(screen.queryByTestId("home-heading")).toBeInTheDocument();
        expect(homeHeading).toHaveTextContent("Home");
        const productNames = screen.getAllByTestId(/product-name/i);
        expect(productNames.length).toEqual(products.length);
    });

    it("renders Cart page when '/cart' route is clicked", () => {
        render(
            <MemoryRouter initialEntries={['/cart']}>
                <HackerMart />
            </MemoryRouter>
        );
        // Checking href over redirection as it is not feasible in Jest 
        // Ref: https://stackoverflow.com/a/57907719/5811973
        expect(screen.getByTestId('cart-link').closest('a')).toHaveAttribute('href', '/cart');
        const cartHeading = screen.getByTestId("cart-heading");
        expect(screen.queryByTestId("cart-heading")).toBeInTheDocument();
        expect(cartHeading).toHaveTextContent("Cart");
    });

    it("adds a product to the cart when the add to cart button is clicked on the Home page", () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <HackerMart />
            </MemoryRouter>
        );
        const homeHeading = screen.getByTestId("home-heading");
        expect(screen.queryByTestId("home-heading")).toBeInTheDocument();
        expect(homeHeading).toHaveTextContent("Home");
        const productNames = screen.getAllByTestId(/product-name/i);
        expect(productNames.length).toEqual(products.length);
        expect(screen.queryByTestId("cart-heading")).not.toBeInTheDocument();
        expect(screen.queryByTestId("cart-total")).not.toBeInTheDocument();
    });

    it("removes a product from the cart when the remove from cart button is clicked on the Cart page", () => {
        render(
            <MemoryRouter initialEntries={['/cart']}>
                <HackerMart />
            </MemoryRouter>
        );
        const cartHeading = screen.getByTestId("cart-heading");
        expect(screen.queryByTestId("cart-heading")).toBeInTheDocument();
        expect(cartHeading).toHaveTextContent("Cart");
        expect(screen.queryByTestId("home")).not.toBeInTheDocument();
        expect(screen.queryByTestId("shopping-cart")).toBeInTheDocument();
        expect(screen.queryByTestId("cart-heading")).toBeInTheDocument();
        expect(screen.queryByTestId("cart-total")).toBeInTheDocument();
    });
});

