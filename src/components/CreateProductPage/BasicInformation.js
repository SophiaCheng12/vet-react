import React, { Component } from "react";
import styles from "./CreateProductPage.module.css";

class BasicInformation extends Component {
  // componentDidMount = () => {
  //   this.basicInformationCheckType();
  // };

  // basicInformationCheckType = () => {
  //   if (!this.props.searchBasicInformationData.basicName) {
  //     return alert("請輸入名稱");
  //   }
  // };

  render() {
    return (
      <div className={styles.basicInformation}>
        <div className={styles.basicInformationTitle}>基本資訊(必填)</div>

        <div className={styles.basicInformationInput}>
          <div>
            <div className="form-group">
              <span
                className={`${styles.basicName} ${styles.basicInformationInputName}`}
              >
                名稱 :&nbsp;
              </span>
              <label htmlFor="basicInformationProductName">
                <input
                  type="text"
                  className={`form-control ${styles.input}`}
                  id={styles.basicInformationProductName}
                  placeholder="2021/08/19"
                  name="basicName"
                  value={this.props.searchBasicInformationData.basicName || ""}
                  onChange={this.props.searchBasicInformationFunction}
                />
              </label>
            </div>

            <div className="form-group">
              <span
                className={` ${styles.basicInformationCode}
                  ${styles.basicInformationInputName}`}
              >
                代碼 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword2">
                <input
                  type="number"
                  className={`form-control ${styles.input}`}
                  id="exampleInputPassword2"
                  name="basicInformationCode"
                  value={
                    this.props.searchBasicInformationData
                      .basicInformationCode || ""
                  }
                  onChange={this.props.searchBasicInformationFunction}
                />
              </label>
            </div>
          </div>

          <div>
            <div className="form-group">
              <span
                className={`${styles.basicInformationCategory} ${styles.basicInformationInputName}`}
              >
                類別 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="basicInformationCategory"
                  value={
                    this.props.searchBasicInformationData
                      .basicInformationCategory || ""
                  }
                  onChange={this.props.searchBasicInformationFunction}
                >
                  <option value="">--Please choose an option--</option>
                  <option>wert</option>
                  <option>edff</option>
                  <option>dsaa</option>
                  <option>hfjkd</option>
                  <option>fkl</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <div>
                <span
                  className={`${styles.basicPrice}  ${styles.basicInformationInputName}`}
                >
                  售價 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword1">
                  <input
                    type="number"
                    className={`form-control ${styles.input}`}
                    id="exampleInputPassword1"
                    name="basicPrice"
                    value={
                      this.props.searchBasicInformationData.basicPrice || ""
                    }
                    onChange={this.props.searchBasicInformationFunction}
                  />
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="form-group">
              <span
                className={`${styles.basicInformationUnit} 
               ${styles.basicInformationInputName}  `}
              >
                單位 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="basicInformationUnit"
                  value={
                    this.props.searchBasicInformationData
                      .basicInformationUnit || ""
                  }
                  onChange={this.props.searchBasicInformationFunction}
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

            <div className="form-group">
              <span
                className={` ${styles.basicInformationCertificate} 
              ${styles.basicInformationInputName}`}
              >
                憑證類型 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="basicInformationCertificate"
                  value={
                    this.props.searchBasicInformationData
                      .basicInformationCertificate || ""
                  }
                  onChange={this.props.searchBasicInformationFunction}
                >
                  <option value="">--Please choose an option--</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                  <option>E</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BasicInformation;
