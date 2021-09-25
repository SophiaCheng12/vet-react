import React from "react";
import ProductNavbar from "./ProductNavbar.js";
import ProductNavList from "./ProductNavList.js";
import ProductMain from "./ProductMain.js";
import ProductList from "./ProductList.js";
import ModalCreateProduct from "./ModalCreateProduct.js";
import "./CreateProduct.css";
import qs from "qs";
import _ from "lodash";
// import styles from "./Button.module.css";
// import { Link } from "react-router-dom";

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

const productPages = [1, 2, 3, 4, 5, 6, 7, 8];

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
    searchProduct: {
      // page: 3,
    },
    modalMode: "create",
    userId: 0,
    currentPage: 1,
    previousPage: 0,
    nextPage: 0,
    totalPage: 8,
    productPages: [],
    paginationActive: 0,
    active: 0,
    savedSearchData: {},
    // prePage: 0,
  };

  componentDidMount() {
    this.fetchProducts();

    const queryStringData = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    console.log("queryStringData", queryStringData);

    this.setState({
      searchProduct: {
        ...queryStringData,
      },
      savedSearchData: {
        ...queryStringData,
      },
    });
    console.log("savedSearchData", this.state.savedSearchData);

    let queryStringPage = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    // console.log("queryStringPage", queryStringPage);
    queryStringPage = Number(queryStringPage.page);
    // console.log(queryStringPage);

    this.setState({
      currentPage: queryStringPage,

      // prePage: queryStringPage,
    });
  }

  fetchProducts = () => {
    console.log(this.state.searchProduct);
    this.setState({
      productList: productList,
      productPages: productPages,
    });
  };

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
    this.props.history.push("");
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
    // this.setState({
    //   savedSearchData: {
    //     ..._.omit(this.state.searchProduct, ["page"]),
    //   },
    // });
    const currentPageObj =
      this.state.currentPage && this.state.currentPage !== 1
        ? { page: this.state.currentPage }
        : {};

    const searchParams = new URLSearchParams({
      //  page: 1,
      // ...this.state.searchProduct,
      // ..._.omit(this.state.searchProduct, ["page"]),
      ..._.omit(this.state.searchProduct, ["page"]),
      ...currentPageObj,
    });

    console.log("searchParams", searchParams.toString());
    this.props.history.push(`?${searchParams.toString()}`);
    this.setState({
      currentPage: 1,
      // searchProduct: _.omit(this.state.searchProduct, ["page"]),
      savedSearchData: { ...this.state.searchProduct },
    });
    console.log(searchParams);
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

  onPreviousPage = () => {
    // console.log("ok");

    console.log("ok");
    if (this.state.currentPage < 1) return;
    else {
      this.setState({
        // previousPage: this.state.currentPage - 1,
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  onNextPage = () => {
    console.log("ok2");

    this.setState({
      // nextPage: this.state.currentPage + 1,
      currentPage: this.state.currentPage + 1,
    });
  };

  onCurrentPageMethod = (page, e) => {
    const newCurrentPage = Number(e.currentTarget.dataset.page);
    let savedSearchData = { ...this.state.savedSearchData };

    console.log("savedSearchData2", savedSearchData);
    console.log(
      "savedSearchDataWithoutPage",
      _.omit(savedSearchData, ["page"])
    );
    const pageParams = new URLSearchParams({
      page: newCurrentPage,
      // page: this.state.currentPage,
      ..._.omit(savedSearchData, ["page"]),
    });
    console.log("pageParams", pageParams);
    console.log("pageParams", pageParams.toString());
    this.props.history.push(`?${pageParams.toString()}`);
    this.setState({
      currentPage: newCurrentPage,
      searchProduct: savedSearchData,
    });
  };

  render() {
    console.log(this.props); //可看到history、location、match等的資訊
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
          onPreviousPage={this.onPreviousPage}
          onNextPage={this.onNextPage}
          currentPage={this.state.currentPage}
          totalPage={this.state.totalPage}
          productPages={this.state.productPages}
          onCurrentPageMethod={this.onCurrentPageMethod}
          paginationActive={this.state.paginationActive}
        />
        {/* obj={this.state.} */}
      </div>
    );
  }
}

export default CreateProduct;
