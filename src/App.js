import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { useStateValue } from "./StateProvider";
import { Products, Navbar, Cart, Checkout } from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{}, dispatch] = useStateValue();
  
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    dispatch({type: 'SET_PRODUCTS', data: data});
  };

  const fetchCart = async () => {
    const { cart } = await commerce.cart.retrieve();
    dispatch({type: 'SET_CART', data: cart});
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    dispatch({type: 'SET_CART', data: cart});
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    dispatch({type: 'SET_CART', data: cart});
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    dispatch({type: 'SET_CART', data: cart});
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    dispatch({type: 'SET_CART', data: cart});
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Products onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              handleUpdateCartQuantity = {handleUpdateCartQuantity}
              handleRemoveFromCart = {handleRemoveFromCart}
              handleEmptyCart = {handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
