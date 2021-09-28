import React, { Component } from "react";
import styles from "./CreateProductPage.module.css";

class BasicInformation extends Component {
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
                  id="basicInformationProductName"
                  placeholder="2021/08/19"
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
                >
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
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
                >
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
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
                >
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
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
