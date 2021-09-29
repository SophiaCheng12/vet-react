import React from "react";
// import "./CreateProductPage.css";
import CreateProductTitle from "./CreateProductTitle.js";
import BasicInformation from "./BasicInformation.js";
import OtherInformation from "./OtherInformation.js";
import styles from "./CreateProductPage.module.css";
import InformationTotalBtn from "./InformationTotalBtn.js";

class CreateProductPage extends React.Component {
  state = {
    searchBasicInformationData: {},
  };

  searchBasicInformationFunction = (e) => {
    console.log("ok");
    this.setState({
      searchBasicInformationData: {
        ...this.state.searchBasicInformationData,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className={styles.content}>
        <>
          <CreateProductTitle />

          <div className={styles.main}>
            <form className={styles.form}>
              <div className="container-fluid" id={styles.informationForm}>
                <div className={styles.row}>
                  <BasicInformation
                    searchBasicInformationData={
                      this.state.searchBasicInformationData
                    }
                    searchBasicInformationFunction={
                      this.searchBasicInformationFunction
                    }
                  />
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
