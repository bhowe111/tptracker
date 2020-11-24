import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import StoreList from "../pages/StoreList";

import Cart from "../pages/Cart";
import ProductShow from "../pages/ProductShow";
import StoreShow from "../pages/StoreShow";

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
    <Route exact path="/stores" component={StoreList} />
    <Route exact path="/products" component={ProductList} />
    <Route path="/cart" component={Cart} />
    <Route path="/products/:productId" component={ProductShow} />
    <Route path="/stores/:storeId" component={StoreShow} />
  </Switch>
);

// export default routes;
