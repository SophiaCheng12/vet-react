import React from 'react'

class ProductMain extends React.Component{
  render(){
    return(
       <div className="main">
         <div className="search">
        <p>商品查詢</p>
      </div>

    <div className="searchForm">
        <div className="container searchContainer">
          <div className="row">
            <form className="form">
              <div className="form-group">
                <span className="product">商品代碼{'\xa0'}:{'\xa0'}</span>
                <label  htmlFor="productCodes">
                  <input type="text" className="form-control productCodeInput" id="productCodes" />
                </label>
      </div>

      <div className="form-group">
                <span className="product">國際條碼{'\xa0'}:{'\xa0'}</span>
                <label  htmlFor="exampleInputPassword1">
                  <input type="number" className="form-control" id="exampleInputPassword1" />
                </label>
              </div>
      
      
      <div className="form-group">
                <span className="product">商品名稱{'\xa0'}:{'\xa0'}</span>
                <label  htmlFor="exampleInputPassword1">
                  <input type="text" className="form-control" id="exampleInputPassword1" /> 
                </label>
              </div><div className="form-group">
                <span className="product">商品類別{'\xa0'}:{'\xa0'}</span>
                <label  htmlFor="exampleFormControlSelect1">
                  <select className="form-control select" id="exampleFormControlSelect1">
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
                  <span className="product commodityAttributes">商品屬性{'\xa0'}:{'\xa0'}</span>
                  <label htmlFor="exampleInputPassword1">
                    <input type="text" className ="form-control commodityAttributesInput" id="exampleInputPassword1" />
                  </label>
                </div>

<div>
                  <button type="button" className ="btn inquireBtn">
                    <span className="buttonWord">
                      查詢
                    </span>
                  </button>
                  <button type="button" className="btn removeBtn">
                    <span className="removeButtonWord">
                      清除
                  </span>
                  </button>
                </div>
              </div>


         <div className="form-group d-flex flex-row">
                <div>
                  <span className="product" id="productSupplierId">供應商{'\xa0'}:{'\xa0'}</span>
                  <label  htmlFor="exampleInputPassword1">
                    <input type="text" className="form-control productSupplier" id="exampleInputPassword1" />
                  </label>
                </div>

      
      <div>
                  <button type="button" className="btn inquireBtn">
                    <span className="buttonWord">
                      查詢
                    </span>
                  </button>
                  <button type="button" className="btn removeBtn">
                    <span className="removeButtonWord">
                      清除
                    </span>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <span className="product" id="productBrandId">品牌{'\xa0'}:{'\xa0'}</span>
                <label  htmlFor="exampleFormControlSelect1">
                  <select className="form-control select productBrand" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </label>
              </div>

               <div className="totalBtn">
                <button type="button" className="btn searchFormBtn searchBtn buttonActive mt-3 mr-2">搜尋</button>
                <button type="button" className="btn searchFormBtn clearBtn  mt-3 mr-2">清除</button>
                <button type="button" className="btn searchFormBtn submitBtn mt-3 mr-2">匯出表格</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      
      
      
      </div>
    )
  }
}

export default ProductMain

  {/* ProductMain  */}