import React from "react";
import ProductNavbar from "./ProductNavbar.js";
import ProductNavList from "./ProductNavList.js";
import ProductMain from "./ProductMain.js";
import ProductList from "./ProductList.js";
import ModalCreateProduct from "./ModalCreateProduct.js";
import "./CreateProduct.css";

const productList = [
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    item: 1,
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
];

class CreateProduct extends React.Component {
  state = {
    productList: [],
    showModal: false,
    editingProduct: {
      item: "",
      commodityCode: "",
      productName: "",
      commodityCategory: "",
      commodityAttributes: "",
      internationalBarcode: "",
      price: "",
      salesPriceSetting: "",
      purchasePriceSetting: "",
      cannedSmsSettings: "",
    },
    isNew: false,
  };

  componentDidMount() {
    this.setState({
      productList: productList,
    });
  }

  setShowModal = (isOpen) => {
    this.setState({
      showModal: isOpen,
    });
  };

  createProductModal = (newProduct) => {
    console.log("obj2", newProduct);

    this.setState({
      productList: [...this.state.productList, newProduct],
      editingProduct: newProduct,
    });
  };

  handleChangeInput = (e) => {
    console.log(e);
    this.setState({
      editingProduct: {
        ...this.state.editingProduct,
        [e.target.name]: e.target.value,
      },
    });
  };

  replaceEditingProduct = (product) => {
    this.setState({
      editingProduct: {
        //   ...this.state.editingProduct,
        ...product,
      },
    });
  };

  newEditingProduct = () => {
    this.setState({
      editingProduct: {},
    });
  };

  render() {
    return (
      <div id="createProduct" className="content">
        <div className="nav">
          <ProductNavbar />
          <ProductNavList />
        </div>
        <ProductMain />
        <ModalCreateProduct
          createProductModal={this.createProductModal}
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          editingProduct={this.state.editingProduct}
          handleChangeInput={this.handleChangeInput}
        />
        <ProductList
          productList={this.state.productList}
          showModal={this.state.showModal}
          setShowModal={(isOpen) => this.setShowModal(isOpen)}
          // editingProduct={this.state.editingProduct}
          replaceEditingProduct={this.replaceEditingProduct}
          newEditingProduct={this.newEditingProduct}
        />
        {/* obj={this.state.} */}
      </div>
    );
  }
}

export default CreateProduct;
