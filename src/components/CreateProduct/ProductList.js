import React from "react";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  handleClose = () => {
    this.props.setShowModal(false);
  };

  onBuildClick = () => {
    // console.log(isNew);
    // 打開modal
    this.props.setShowModal(true);
    this.props.changeModalCondition("create");
    // 更新editingProduct
    this.props.newEditingProduct();
  };

  onEditClick = (userId) => {
    // 打開modal
    this.props.setShowModal(true);
    this.props.setUserId(userId);
    this.props.changeModalCondition("edit");
    // console.log(isNew);
    // 更新editingProduct

    const selectedProduct = this.props.productList.find((element) => {
      return userId === element.id;
    });

    this.props.replaceEditingProduct(selectedProduct);
  };

  // this.props.replaceEditingProduct(product);

  onDelete = (userId) => {
    console.log("userId", userId);

    const filteredProduct = this.props.productList.filter((product) => {
      return userId !== product.id;
    });
    console.log("filteredProduct", filteredProduct);
    this.props.deleteProduct(filteredProduct);
    console.log("filteredProduct2", filteredProduct);
  };

  renderProductList(list) {
    return list.map((item, index) => {
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{item.commodityCode}</td>
          <td className="ellipsis">{item.productName}</td>
          <td>{item.commodityCategory}</td>
          <td>{item.commodityAttributes}</td>
          <td>{item.internationalBarcode}</td>
          <td>{item.price}</td>
          <td>{item.salesPriceSetting} </td>
          <td>{item.purchasePriceSetting} </td>
          <td>{item.cannedSmsSettings}</td>
          <td onClick={(e) => this.onEditClick(item.id, e)}>
            <img src="./Img/modify.png" alt="" />
          </td>
          <td onClick={(e) => this.onDelete(item.id, e)}>
            <img src="./Img/bin.png" alt="" />
          </td>
        </tr>
      );
    });
  }

  // pages
  renderPagesList() {
    const currentPage = this.props.currentPage || 1;
    const totalPage = 8;
    const baseNumber = 1;

    const left = currentPage - 2;
    const right = currentPage + 2;

    // console.log("currentPage", this.props.currentPage);
    // console.log("productPages", this.props.productPages);

    if (left < baseNumber) {
      if (left === 0) {
        // console.log("left", left);
        const leftNumber = baseNumber - left;
        console.log("leftNumber", leftNumber);
        let pagesArray = [0, 1, 2, 3, 4];
        console.log("pages", pagesArray.splice(0, leftNumber));
        console.log(pagesArray);
        const pages = pagesArray;
        console.log("pages", pages);
        return pages.map((page, index) => {
          const paginationActive =
            this.props.currentPage === page ? "paginationActive" : "";
          return (
            <li
              className="page-item"
              key={index}
              data-page={page}
              onClick={(e) => this.props.onCurrentPageMethod(page, e)}
            >
              <Link className={`page-link ${paginationActive}`} to="#">
                {page}
              </Link>
            </li>
          );
        });
      } else {
        let pagesArray = [-1, 0, 1, 2, 3];
        const leftNumber = baseNumber - left;
        console.log("pages", pagesArray.splice(0, leftNumber));
        // pagesArray.splice(0, leftNumber);
        // console.log(pagesArray);
        const pages = pagesArray;
        // console.log("pages", pages);
        return pages.map((page, index) => {
          const paginationActive =
            this.props.currentPage === page ? "paginationActive" : "";
          return (
            <li
              className="page-item"
              key={index}
              data-page={page}
              onClick={(e) => this.props.onCurrentPageMethod(page, e)}
            >
              <Link className={`page-link ${paginationActive}`} to="#">
                {page}
              </Link>
            </li>
          );
        });
      }
    }

    if (left >= baseNumber && currentPage < 7) {
      let pagesArray = [1, 2, 3, 4, 5, 6];

      return pagesArray.map((N) => {
        if (currentPage === N) {
          // console.log(N);
          // console.log((pagesArray = [N - 2, N - 1, N, N + 1, N + 2]));
          pagesArray = [N - 2, N - 1, N, N + 1, N + 2];
          // return (pagesArray = [N - 2, N - 1, N, N + 1, N + 2]);
          const pages = pagesArray;
          return pages.map((page, index) => {
            const paginationActive =
              this.props.currentPage === page ? "paginationActive" : "";
            return (
              <li
                className="page-item"
                key={index}
                data-page={page}
                onClick={(e) => this.props.onCurrentPageMethod(page, e)}
              >
                <Link className={`page-link ${paginationActive}`} to="#">
                  {page}
                </Link>
              </li>
            );
          });
        }
        return null;
      });
    }

    if (right > totalPage) {
      const rightNumber = right - totalPage;
      console.log(rightNumber);
      let pagesArray = [4, 5, 6, 7, 8];
      pagesArray.splice(0, rightNumber);
      console.log(pagesArray);
      const pages = pagesArray;

      return pages.map((page, index) => {
        const paginationActive =
          this.props.currentPage === page ? "paginationActive" : "";
        return (
          <li
            className="page-item"
            key={index}
            data-page={page}
            onClick={(e) => this.props.onCurrentPageMethod(page, e)}
          >
            <Link className={`page-link ${paginationActive}`} to="#">
              {page}
            </Link>
          </li>
        );
      });
    }
  }

  // componentDidMount() {
  //   this.renderPagesList();
  // }

  render() {
    const { productList } = this.props;
    // const { productPages } = this.props;
    const nextDisabled =
      this.props.totalPage === this.props.currentPage ? "disabled" : "";

    const previousDisabled = this.props.currentPage === 1 ? "disabled" : "";

    return (
      <div>
        {/* createProduct */}
        <div className="createProduct">
          <div className="firstPart">
            <div className="createProductTitle">
              {/* <div className="createProductTitle d-flex flex-row"> */}
              <div>
                <img src="./Img/Vector3.png" alt="" />
              </div>
              <div
                className="createProductWord d-flex flex-row"
                onClick={() => this.onBuildClick(true)}
              >
                新增商品
              </div>
            </div>

            <div className="pagination  topPagination"></div>
          </div>

          {/* <!-- secondPart --> */}
          <div className="secondPart container-fluid">
            <div className="row">
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr className="createProductTr">
                      <th scope="col">項次</th>
                      <th scope="col">商品代碼</th>
                      <th scope="col">商品名稱</th>
                      <th scope="col">商品類別</th>
                      <th scope="col">商品屬性</th>
                      <th scope="col">國際條碼</th>
                      <th scope="col">售價</th>
                      <th scope="col">銷售價格設定</th>
                      <th scope="col">採購價格設定</th>
                      <th scope="col">罐頭簡訊設定</th>
                      <th scope="col">修改</th>
                      <th scope="col">刪除</th>
                    </tr>
                  </thead>

                  <tbody className="createProductTr">
                    {this.renderProductList(productList)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- secondPart --> */}

          {/* <!-- bottomPagination --> */}
          <div className="firstPart bottomPagination">
            {/* <div className="pagination"></div> */}
          </div>
        </div>
        {/* </div> */}
        {/* <!--  bottomPagination結束在這裡--> */}

        {/* testPagination */}
        <nav aria-label="Page navigation example" className="testPagination">
          <ul className="pagination">
            <li className={`page-item ${previousDisabled}`}>
              <Link
                className="page-link"
                to="#"
                onClick={this.props.onPreviousPage}
              >
                Previous
              </Link>
            </li>
            {/* productPages */}
            {this.renderPagesList()}

            <li className={`page-item ${nextDisabled}`}>
              <Link
                className="page-link"
                to="#"
                onClick={this.props.onNextPage}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default ProductList;
