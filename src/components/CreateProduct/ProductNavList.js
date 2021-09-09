import React from 'react'

class ProductNavList extends React.Component{

state = {
  functionLists :[
  '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能', '其他功能'
  ]
}

// active = () => {
//   console.log('ok')
//    navbarTitle.classList.toggle('active')
// }



render(){
    return(

    <div className="navList">

        <nav className="navbar navbar1 navbar-expand-lg navbar-light">
 {/* active */}
          <a className="navbar-brand navbarTitle pos active" href="#">POS前台</a>
{/* onClick={this.active} */}
          <button className="navbar-toggler navbarToggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse navbarRelative" id="navbarSupportedContent">
            <ul className="navbar-nav navbarNav mr-auto navbarColor" id="navbarSupportedContentUl">

        {
        this.state.functionLists.map((item,index) =>{
            return (
              <li className="nav-item"  key={index}>
                <a className="nav-link navItemColor" href="#">
                  <span className="navItemColor"> {item} </span>
                </a>
                </li>
            )
        })

        }
    </ul>

          </div>
        </nav>
      </div>

      
    )
  }
}

export default ProductNavList
