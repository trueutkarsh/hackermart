## React: HackerMart

![](https://hrcdn.net/s3_pub/istreet-assets/DllfzExWxbbOBUWXM3wmSg/hackermart.gif)

The task is to design a React web application named HackerMart which has four components: `Navbar`, `Home`, `Cart` and `HackerMart`.

`Navbar Component`
- The `Navbar` component should have two links: `Home` and `Cart`, which should redirect to their respective pages.

`Home Component`
- The `Home` component should display a list of products in a table with the **name**, **cost**, **description** of each product, and an `Add to cart` button respectively.
- The `Add to cart` button should call `addToCart` function which when clicked should add the product to the cart.
- No Duplicate product should be added to cart, when `addToCart` function is called. If `Add to cart` button is clicked twice for the same product, the product should be added to the cart only once.

`Cart Component`
- The `Cart` component should display a list of products in a table with the **name**, **cost**, **description** of each product, and a `Remove from cart` button respectively.
- The `Remove from cart` button when clicked should remove the product from cart and should also update the total cost of the cart.
- Displays the **total price** of each products present in the cart.

`HackerMart Component`
- The `HackerMart` component should contain functions to add and remove products from the cart.
- It should define routes for the application using Route from react-router-dom.
- The `/` path should render the `Home` component
- The `/cart` path should render the `Cart` component

Routes:

| **Route Path**    | **Component**      | **Function**      |
|-------------------|--------------------|-------------------|
| "/"	| Home | Renders the Home component |
| "/cart"	| Cart | Renders the Cart component |

The following data-testid attributes are required in the component for the tests to pass:

| **Attribute**                 | **Component**                       |
|-------------------------------|-------------------------------------|
| navigation-tabs	| Test ID for the navigation tabs in the Navbar |
| home-link	| Test ID for the Home link in the Navbar |
| cart-link	| Test ID for the Cart link in the Navbar |
| home	| Test ID for the Home component |
| home-heading	| Test ID for the Home component heading |
| featured-products	| Test ID for the featured products in the Home component |
| products	| Test ID for the products table in the Home component |
| product-name-{product.id}	| Test ID for the product name in the Home component |
| product-description-{product.id}	| Test ID for the product description in the Home component |
| product-cost-{product.id}	| Test ID for the product cost in the Home component |
| add-to-cart-button-{product.id}	| Test ID for the Add to cart button in the Home component |
| shopping-cart	| Test ID for the shopping cart component |
| cart	| Test ID for the cart in the shopping cart component |
| cart-heading	| Test ID for the cart heading in the Cart component |
| remove-from-cart-button-{product.id}	| Test ID for the Remove from cart button in the Cart component |
| cart-total	| Test ID for the cart total in the Cart component |
| header	| Test ID for the Navbar component |


Note:
- All the cost's should be rounded upto **two decimals**.
- The list of products can be found at `src/data/products.js`.
- The application should be designed using React Router and should use only core React functionalities.
- Components have data-testid attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.
- The files that should be modified by the candidate are `src/components/Navbar/index.js`, `src/components/Home/index.js`, `src/components/Cart/index.js` and `src/components/HackerMart/index.js`  which are open by default in the system editor.
- Avoid making changes to other files in the project structure.

## Environment 

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

**Read Only Files**
- `src/App.test.js`
- `src/App.js`
- `src/App.css`
- `src/index.js`
- `src/index.css`
- `src/registerServiceWorker.js`
- `src/data/products.js`

**Commands**
- run: 
```
npm start
```
- install: 
```
npm install
```
- test: 
```
npm test
```

