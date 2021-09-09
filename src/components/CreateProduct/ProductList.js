import React from 'react'

class ProductList extends React.Component{
  render(){
    return(
      
      <div>
       {/* createProduct */}
    <div className="createProduct">

      <div className="firstPart">

        <div className="createProductTitle d-flex flex-row">
          <div><img src="./Img/Vector3.png" alt="" /></div>
          <div className="createProductWord d-flex flex-row">新增商品</div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div className="pagination">

          <div className="firstPaginationImg d-flex flex-row">

            <div><img src="./Img/doubleLeftArrow.png" alt="" /></div>
            <div style={{color:"white"}}>|</div>
            <div><img src="./Img/leftArrow.png" alt="" /></div>
          </div>


          <div className="paginationWord d-flex flex-row">
            <p>總共2000筆 第1頁 - 共100頁</p>
          </div>

          <div className="secondPaginationImg d-flex flex-row">
            <div><img src="./Img/rightArrow.png" alt="" /></div>
            <div style={{color:'white'}}>|</div>
            <div><img src="./Img/doubleRightArrow.png" alt="" /></div>
          </div>

        </div>



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
                <tr>
                  <th scope="row">1</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>

                <tr>
                  <th scope="row">7</th>
                  <td>61802</td>
                  <td className="ellipsis">Dog Bed Gent antibac 80x60 cm</td>
                  <td>[------- 品牌商品 -------]-Hunter </td>
                  <td>商品</td>
                  <td>4016739618023</td>
                  <td>2360 </td>
                  <td>銷售價格維護 </td>
                  <td>採購價格維護 </td>
                  <td>罐頭簡訊維護 </td>
                  <td><img src="./Img/modify.png" alt="" /></td>
                  <td><img src="./Img/bin.png" alt="" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <!-- secondPart --> */}

      {/* <!-- bottomPagination --> */}
      <div className="firstPart bottomPagination">

        <div className="createProductTitle  bottomPaginationTitle d-flex flex-row ">
          <div><img src="./Img/Vector3.png" alt="" /></div>
          <div className="createProductWord d-flex flex-row">新增商品</div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        <div className="pagination">

          <div className="firstPaginationImg d-flex flex-row">

            <div><img src="./Img/doubleLeftArrow.png" alt="" /></div>
            <div style={{color:'white'}}>|</div>
            <div><img src="./Img/leftArrow.png" alt="" /></div>
          </div>


          <div className="paginationWord d-flex flex-row">
            <p>總共2000筆 第1頁 - 共100頁</p>
          </div>

          <div className="secondPaginationImg d-flex flex-row">
            <div><img src="./Img/rightArrow.png" alt="" /></div>
            <div style={{color:'white'}}>|</div>
            <div><img src="./Img/doubleRightArrow.png" alt="" /></div>
          </div>

        </div>

      </div>

    </div>
    {/* <!--  bottomPagination結束在這裡--> */}












</div>

  
      
    
    )
  }
}

export default ProductList