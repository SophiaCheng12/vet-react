import React from "react";

const INITIAL_PRODUCT_MAIN = {
  productCode: "",
  internationalBarCode: "",
  productName: "",
  selectValue: "",
  commodityAttributes: "",
  productSupplier: "",
  // productCategory: "",
  productBrand: "",
};

class ProductMain extends React.Component {
  state = {
    searchProduct: INITIAL_PRODUCT_MAIN,
    // searchProductSelector:{
    //   selectValue: '',
    // }
  };

  handleChange = (e) => {
    this.setState((preState) => {
      // console.log('preState', ...preState.searchProduct)
      return {
        searchProduct: {
          ...preState.searchProduct,

          [e.target.name]: e.target.value,
          // selectValue: e.target.value,
        },
      };
    });
  };

  clearForm = () => {
    // console.log("ok");
    this.setState({
      searchProduct: INITIAL_PRODUCT_MAIN,
    });
  };

  render() {
    return (
      <div className="main">
        <div className="search">
          <p>商品查詢</p>
        </div>

        <div className="searchForm">
          <div className="container searchContainer">
            <div className="row">
              <div className="form">
                <div className="form-group">
                  <span className="product">商品代碼&nbsp;:&nbsp;</span>
                  <label htmlFor="productCodes">
                    <input
                      type="text"
                      className="form-control productCodeInput"
                      id="productCodes"
                      name="productCode"
                      value={this.state.searchProduct.productCode}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                {/* onChange={this.handleChange} */}

                <div className="form-group">
                  <span className="product">國際條碼&nbsp;:&nbsp;</span>
                  <label htmlFor="exampleInputPassword1">
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="internationalBarCode"
                      value={this.state.searchProduct.internationalBarCode}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                {/* onChange={this.handleChange} */}

                <div className="form-group">
                  <span className="product">商品名稱&nbsp;:&nbsp;</span>
                  <label htmlFor="exampleInputPassword1">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="productName"
                      value={this.state.searchProduct.productName}
                      onChange={this.handleChange}
                    />
                  </label>
                </div>
                <div className="form-group">
                  <span className="product">商品類別&nbsp;:&nbsp;</span>
                  <label htmlFor="exampleFormControlSelect1">
                    <select
                      className="form-control select"
                      id="exampleFormControlSelect1"
                      value={this.state.searchProduct.selectValue}
                      onChange={this.handleChange}
                      name="selectValue"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </label>
                </div>

                <div className="form-group d-flex flex-row">
                  <div>
                    <span className="product commodityAttributes">
                      商品屬性&nbsp;:&nbsp;
                    </span>
                    <label htmlFor="exampleInputPassword1">
                      <input
                        type="text"
                        className="form-control commodityAttributesInput"
                        id="exampleInputPassword1"
                        value={this.state.searchProduct.commodityAttributes}
                        onChange={this.handleChange}
                        name="commodityAttributes"
                      />
                    </label>
                  </div>

                  <div>
                    <button type="button" className="btn inquireBtn">
                      <span className="buttonWord">查詢</span>
                    </button>
                    <button type="button" className="btn removeBtn">
                      <span className="removeButtonWord">清除</span>
                    </button>
                  </div>
                </div>

                <div className="form-group d-flex flex-row">
                  <div>
                    <span className="product" id="productSupplierId">
                      供應商&nbsp;:&nbsp;
                    </span>
                    <label htmlFor="exampleInputPassword1">
                      <input
                        type="text"
                        className="form-control productSupplier"
                        id="exampleInputPassword1"
                        value={this.state.searchProduct.productSupplier}
                        onChange={this.handleChange}
                        name="productSupplier"
                      />
                    </label>
                  </div>

                  <div>
                    <button type="button" className="btn inquireBtn">
                      <span className="buttonWord">查詢</span>
                    </button>
                    <button type="button" className="btn removeBtn">
                      <span className="removeButtonWord">清除</span>
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <span className="product" id="productBrandId">
                    品牌&nbsp;:&nbsp;
                  </span>
                  <label htmlFor="exampleFormControlSelect2">
                    <select
                      className="form-control select productBrand"
                      id="exampleFormControlSelect2"
                      value={this.state.searchProduct.productBrand}
                      onChange={this.handleChange}
                      name="productBrand"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </label>
                </div>

                <div className="totalBtn">
                  <button
                    type="button"
                    className="btn searchFormBtn searchBtn buttonActive mt-3 mr-2"
                  >
                    搜尋
                  </button>
                  <button
                    type="button"
                    className="btn searchFormBtn clearBtn  mt-3 mr-2"
                    onClick={this.clearForm}
                  >
                    清除
                  </button>
                  <button
                    type="button"
                    className="btn searchFormBtn submitBtn mt-3 mr-2"
                  >
                    匯出表格
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductMain;
