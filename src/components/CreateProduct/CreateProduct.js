import React from 'react'
import ProductNavbar from './ProductNavbar.js'
import ProductNavList from './ProductNavList.js'
import ProductMain from './ProductMain.js'
import ProductList from './ProductList.js'
import './ProductStyle.css'


class CreateProduct extends React.Component {
  render() {
    return (
       <div id="createProduct">
         <div className="nav">
       <ProductNavbar />
       <ProductNavList />
        </div>
       <ProductMain />
       <ProductList />
       </div>
       
       )
  }
}

export default CreateProduct