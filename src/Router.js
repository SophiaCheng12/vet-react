import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateProduct from "./components/CreateProduct/CreateProduct.js";
import CreateProductPage from "./components/CreateProductPage/CreateProductPage.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CreateProduct} />
        <Route path="/createProductPage" exact component={CreateProductPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
