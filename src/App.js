import React, { useEffect, useState } from "react";
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
            <Products />
          </Route>
          <Route exact path="/cart">
            <Cart />
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
