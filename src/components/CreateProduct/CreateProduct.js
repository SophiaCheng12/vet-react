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
    editingProduct: {},
  };

  componentDidMount() {
    this.setState({
      productList: productList,
    });
  }

  setShowModal(isOpen) {
    this.setState({
      showModal: isOpen,
    });
  }

  handleModal(obj) {
    console.log("obj2", obj);

    this.setState({
      productList: [...this.state.productList, obj],
      editingProduct: obj,
    });
  }

  render() {
    return (
      <div id="createProduct" className="content">
        <div className="nav">
          <ProductNavbar />
          <ProductNavList />
        </div>
        <ProductMain />
        <ModalCreateProduct
          handleModal={(obj) => this.handleModal(obj)}
          showModal={this.state.showModal}
          setShowModal={(isOpen) => this.setShowModal(isOpen)}
        />
        <ProductList
          productList={this.state.productList}
          showModal={this.state.showModal}
          setShowModal={(isOpen) => this.setShowModal(isOpen)}
        />
        {/* obj={this.state.} */}
      </div>
    );
  }
}

export default CreateProduct;
