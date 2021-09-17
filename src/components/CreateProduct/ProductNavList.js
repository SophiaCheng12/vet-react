import React from "react";
import { Link } from "react-router-dom";

class ProductNavList extends React.Component {
  state = {
    functionLists: [
      "其他功能",
      "其他功能",
      "其他功能",
      "其他功能",
      "其他功能",
      "其他功能",
      "其他功能",
      "其他功能",
    ],
  };

  // active = () => {
  //   console.log('ok')
  //    navbarTitle.classList.toggle('active')
  // }

  render() {
    return (
      <div className="navList">
        <nav className="navbar navbar1 navbar-expand-lg navbar-light">
          {/* active */}
          <Link className="navbar-brand navbarTitle pos active" to="">
            POS前台
          </Link>
          {/* onClick={this.active} */}
          <button
            className="navbar-toggler navbarToggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse navbarRelative"
            id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav navbarNav mr-auto navbarColor"
              id="navbarSupportedContentUl"
            >
              {this.state.functionLists.map((item, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link navItemColor" to="">
                      <span className="navItemColor"> {item} </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default ProductNavList;
