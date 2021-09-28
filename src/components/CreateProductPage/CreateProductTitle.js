import React from "react";
import styles from "./CreateProductPage.module.css";

class CreateProductTitle extends React.Component {
  render() {
    return (
      <div className={`container-fluid ${styles.createProductTitle}`}>
        <nav className="navbar-expand-lg navbar-light">
          <div className={`${styles.navbarBrand} ${styles.title}`}>
            {/* ${styles.textCenter} */}
            <p>新增商品</p>
          </div>
        </nav>
      </div>
    );
  }
}

export default CreateProductTitle;
