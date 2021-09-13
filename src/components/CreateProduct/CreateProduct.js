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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
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
    modify: <img src="./Img/modify.png" alt="" />,
    delete: <img src="./Img/bin.png" alt="" />,
  },
];

class CreateProduct extends React.Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    this.setState({
      productList: productList,
    });
  }

  handleModal(text) {
    console.log("text2", text);

    this.setState({
      productList: [...this.state.productList, text],
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
        <ProductList productList={this.state.productList} />
      </div>
    );
  }
}

export default CreateProduct;
