import React from "react";
import { Link } from "react-router-dom";

class ProductNavbar extends React.Component {
  render() {
    return (
      <div className="brand">
        <nav className="navbar navbar2   navbar-expand-lg navbar-light">
          <div className="navbar-brand navbarBrand">
            <Link to="">
              <img className="brandImg" src="./Img/Dr 2.png" alt="" />
            </Link>
          </div>

          <div className="totalBrandBtn">
            <div>
              <button
                className="btn descriptionBtn my-auto my-sm-0"
                type="button"
              >
                <img className="descriptionImg" src="./Img/Vector.png" alt="" />
                說明
              </button>
            </div>

            <div>
              <button className="btn  signOutBtn my-auto my-sm-0" type="button">
                <img className="signOutImg" src="./Img/Vector1.png" alt="" />
                登出
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default ProductNavbar;
