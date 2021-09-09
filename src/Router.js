import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreateProduct from './components/CreateProduct/CreateProduct.js'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CreateProduct} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router