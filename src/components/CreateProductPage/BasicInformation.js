import React from "react";
// import styles from "./CreateProductPage.module.css";

class BasicInformation extends React.Component {
  render() {
    return (
      <div className="basicInformation">
        <div className="basicInformationTitle">基本資訊(必填)</div>

        <div className="basicInformationInput">
          <div>
            <div className="form-group">
              <span className="basicName basicInformationInputName">
                名稱 :&nbsp;
              </span>
              <label htmlFor="basicInformationProductName">
                <input
                  type="text"
                  className="form-control"
                  id="basicInformationProductName"
                  placeholder="2021/08/19"
                />
              </label>
            </div>

            <div className="form-group">
              <span className="basicInformationCode basicInformationInputName">
                代碼 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword2">
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword2"
                />
              </label>
            </div>
          </div>

          <div>
            <div className="form-group">
              <span className="basicInformationCategory basicInformationInputName">
                類別 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className="form-control select"
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
                <span className="basicPrice basicInformationInputName">
                  售價 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword1">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="form-group">
              <span className="basicInformationUnit basicInformationInputName">
                單位 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className="form-control select"
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
              <span className="basicInformationCertificate basicInformationInputName">
                憑證類型 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className="form-control select"
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
