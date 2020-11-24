import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import StoreList from "../pages/StoreList";
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

// const routes = () => {
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route path="/products" component={ProductList} />
//     <Route path="/stores" component={StoreList} />
//   </Switch>;
// };
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/products" component={ProductList} />
    <Route path="/stores" component={StoreList} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={Checkout} />
  </Switch>
);

// export default routes;
