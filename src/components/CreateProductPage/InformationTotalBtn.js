import React from "react";
import styles from "./CreateProductPage.module.css";

class InformationTotalBtn extends React.Component {
  render() {
    return (
      <div className={styles.informationTotalBtn}>
        <button
          type="button"
          className={`btn ${styles.informationCreateBtn}  ${styles.informationButtonActive} `}
          onClick={this.props.information}
        >
          新增
        </button>
        <button type="button" className={`btn ${styles.informationCancelBtn}`}>
          取消
        </button>
      </div>
    );
  }
}

export default InformationTotalBtn;
