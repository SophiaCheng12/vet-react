import React from "react";
import ProductNavbar from "./ProductNavbar.js";
import ProductNavList from "./ProductNavList.js";
import ProductMain from "./ProductMain.js";
import ProductList from "./ProductList.js";
import ModalCreateProduct from "./ModalCreateProduct.js";
import "./CreateProduct.css";

class CreateProduct extends React.Component {
  // constructor(props) {
  // super(props);
  state = {
    data: {
      item: 1,
      commodityCode: 61802,
      productName: " ",
      commodityCategory: " ",
      commodityAttributes: " ",
      internationalBarcode: " ",
      price: " ",
      salesPriceSetting: " ",
      purchasePriceSetting: " ",
      cannedSmsSettings: " ",
      modify: <img src="./Img/modify.png" alt="" />,
      delete: <img src="./Img/bin.png" alt="" />,
    },
  };
  // this.handleModal = this.handleModal.bind(this);
  // }

  handleModal(text) {
    console.log("text2", text);

    this.setState({
      data: { ...this.state.data, text },
    });
  }

  render() {
    return (
      <div id="createProduct">
        <div className="nav">
          <ProductNavbar />
          <ProductNavList />
        </div>
        <ProductMain />
        <ModalCreateProduct handleModal={(text) => this.handleModal(text)} />
        <ProductList />
      </div>
    );
  }
}

export default CreateProduct;
