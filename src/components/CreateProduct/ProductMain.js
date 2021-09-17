import React from "react";

class ProductMain extends React.Component {
  checkType = () => {
    if (!this.props.searchProduct.productCode) {
      return alert("請輸入代碼");
    } else if (!this.props.searchProduct.internationalBarCode) {
      return alert("請輸入國際條碼");
    } else if (!this.props.searchProduct.productName) {
      return alert("請輸入商品名稱");
    }
    return true;
  };

  submitForm = () => {
    if (!this.checkType()) return;
    console.log("ok");
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
                      value={this.props.searchProduct.productCode || ""}
                      onChange={this.props.handleChange}
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
                      value={
                        this.props.searchProduct.internationalBarCode || ""
                      }
                      onChange={this.props.handleChange}
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
                      value={this.props.searchProduct.productName || ""}
                      onChange={this.props.handleChange}
                    />
                  </label>
                </div>

                <div className="form-group">
                  <span className="product">商品類別&nbsp;:&nbsp;</span>
                  <label htmlFor="exampleFormControlSelect1">
                    <select
                      className="form-control select"
                      id="exampleFormControlSelect1"
                      value={this.props.searchProduct.selectValue || ""}
                      onChange={this.props.handleChange}
                      name="selectValue"
                    >
                      <option value="">--Please choose an option--</option>
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
                        value={
                          this.props.searchProduct.commodityAttributes || ""
                        }
                        onChange={this.props.handleChange}
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
                        value={this.props.searchProduct.productSupplier || ""}
                        onChange={this.props.handleChange}
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
                      value={this.props.searchProduct.productBrand || ""}
                      onChange={this.props.handleChange}
                      name="productBrand"
                    >
                      <option value="">--Please choose an option--</option>
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
                    onClick={this.props.searchProductFunction}
                  >
                    搜尋
                  </button>
                  <button
                    type="button"
                    className="btn searchFormBtn clearBtn  mt-3 mr-2"
                    onClick={this.props.clearForm}
                  >
                    清除
                  </button>
                  <button
                    type="button"
                    className="btn searchFormBtn submitBtn mt-3 mr-2"
                    onClick={this.submitForm}
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
