import React from "react";
import ProductNavbar from "./ProductNavbar.js";
import ProductNavList from "./ProductNavList.js";
import ProductMain from "./ProductMain.js";
import ProductList from "./ProductList.js";
import ModalCreateProduct from "./ModalCreateProduct.js";
import "./CreateProduct.css";
import qs from "qs";

const productList = [
  {
    id: "eu1",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 1",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu2",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 2",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu3",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 3",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu4",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 4",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu5",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 5",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu6",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 6",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
  {
    id: "eu7",
    commodityCode: 61802,
    productName: "Dog Bed Gent antibac 80x60 cm 7",
    commodityCategory: "[------- 品牌商品 -------]-Hunter ",
    commodityAttributes: "商品",
    internationalBarcode: "4016739618023",
    price: "2360",
    salesPriceSetting: "銷售價格維護",
    purchasePriceSetting: "採購價格維護",
    cannedSmsSettings: "罐頭簡訊設定",
  },
];

// const INITIAL_PRODUCT_MAIN = {
//   productCode: "",
//   internationalBarCode: "",
//   productName: "",
//   selectValue: "",
//   commodityAttributes: "",
//   productSupplier: "",
//   // productCategory: "",
//   productBrand: "",
// };

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
    // INITIAL_PRODUCT_MAIN,
    searchProduct: {},
    modalMode: "create",
    userId: 0,
  };

  componentDidMount() {
    this.setState({
      productList: productList,
    });

    const queryStringData = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });

    this.setState({
      searchProduct: {
        ...queryStringData,
      },
    });
  }

  handleChange = (e) => {
    this.setState({
      // console.log('preState', ...preState.searchProduct)

      searchProduct: {
        ...this.state.searchProduct,

        [e.target.name]: e.target.value,
        // selectValue: e.target.value,
      },
    });
  };

  clearForm = () => {
    // console.log("ok");
    this.setState({
      searchProduct: {
        productCode: "",
        internationalBarCode: "",
        productName: "",
        selectValue: "",
        commodityAttributes: "",
        productSupplier: "",
        // productCategory: "",
        productBrand: "",
      },
    });
  };

  setUserId = (userId) => {
    this.setState({
      userId: userId,
    });
  };

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

  editProductModalSave = (editedNewProduct) => {
    this.setState({
      productList: [...editedNewProduct],
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

  //把物件變成query string
  searchProductFunction = () => {
    console.log(this.state.searchProduct);
    const searchParams = new URLSearchParams({
      page: 1,
      ...this.state.searchProduct,
    });
    console.log(searchParams.toString());
    this.props.history.push(`?${searchParams.toString()}`);
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

  deleteProduct = (product) => {
    this.setState({
      productList: [...product],
    });
  };

  changeModalCondition = (condition) => {
    this.setState({
      modalMode: condition,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div id="createProduct" className="content">
        <div className="nav">
          <ProductNavbar />
          <ProductNavList />
        </div>
        <ProductMain
          searchProduct={this.state.searchProduct}
          handleChange={this.handleChange}
          clearForm={this.clearForm}
          searchProductFunction={this.searchProductFunction}
        />
        <ModalCreateProduct
          createProductModal={this.createProductModal}
          showModal={this.state.showModal}
          setShowModal={this.setShowModal}
          editingProduct={this.state.editingProduct}
          handleChangeInput={this.handleChangeInput}
          changeModalTitle={this.state.modalMode}
          editProductModalSave={this.editProductModalSave}
          productList={this.state.productList}
          getUserId={this.state.userId}
          searchProduct={this.state.searchProduct}
        />
        <ProductList
          productList={this.state.productList}
          showModal={this.state.showModal}
          setShowModal={(isOpen) => this.setShowModal(isOpen)}
          // editingProduct={this.state.editingProduct}
          replaceEditingProduct={this.replaceEditingProduct}
          newEditingProduct={this.newEditingProduct}
          deleteProduct={this.deleteProduct}
          changeModalCondition={this.changeModalCondition}
          setUserId={this.setUserId}
        />
        {/* obj={this.state.} */}
      </div>
    );
  }
}

export default CreateProduct;
