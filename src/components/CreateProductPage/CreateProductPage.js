import React from "react";
// import "./CreateProductPage.css";
import CreateProductTitle from "./CreateProductTitle.js";
import BasicInformation from "./BasicInformation.js";
import OtherInformation from "./OtherInformation.js";
import styles from "./CreateProductPage.module.css";
import InformationTotalBtn from "./InformationTotalBtn.js";

class CreateProductPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <>
          <CreateProductTitle />

          <div className={styles.main}>
            <form className={styles.form}>
              <div className="container-fluid" id={styles.informationForm}>
                <div className={styles.row}>
                  <BasicInformation />
                  <OtherInformation />
                </div>
              </div>

              <InformationTotalBtn />
            </form>
          </div>
        </>
      </div>
    );
  }
}

export default CreateProductPage;
