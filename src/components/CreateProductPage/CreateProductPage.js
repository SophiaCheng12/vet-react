import React from "react";
import "./CreateProductPage.css";
import CreateProductTitle from "./CreateProductTitle.js";
import BasicInformation from "./BasicInformation.js";
import OtherInformation from "./OtherInformation.js";
// import styles from "./CreateProductPage.css";

class CreateProductPage extends React.Component {
  render() {
    return (
      // <div className="content">
      <>
        <CreateProductTitle />
        <div className="main">
          <form className="form">
            <div className="informationForm container-fluid">
              <div className="row">
                <BasicInformation />
                <OtherInformation />
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateProductPage;
