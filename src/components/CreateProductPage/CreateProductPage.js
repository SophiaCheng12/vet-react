import React from "react";
// import "./CreateProductPage.css";
import CreateProductTitle from "./CreateProductTitle.js";
import BasicInformation from "./BasicInformation.js";
import OtherInformation from "./OtherInformation.js";
import styles from "./CreateProductPage.module.css";
import InformationTotalBtn from "./InformationTotalBtn.js";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

class CreateProductPage extends React.Component {
  state = {
    searchBasicInformationData: {},
    searchOtherInformationDataPartOne: {},
    searchOtherInformationDataPartTwo: {},
    searchOtherInformationDataPartThree: {},
  };

  componentDidMount = () => {
    // this.setState({
    //   searchOtherInformationDataPartTwo:
    //     this.state.searchOtherInformationDataPartTwo,
    // });
    // console.log(
    //   this.state.searchOtherInformationDataPartTwo.otherInformationSaleDate
    // );
  };

  searchBasicInformationFunction = (e) => {
    this.setState({
      searchBasicInformationData: {
        ...this.state.searchBasicInformationData,
        [e.target.name]: e.target.value,
      },
    });
  };

  searchOtherInformationFunction = (e) => {
    console.log("ok");
    this.setState({
      searchOtherInformationDataPartOne: {
        ...this.state.searchOtherInformationDataPartOne,
        [e.target.name]: e.target.value,
      },
    });
  };

  searchOtherInformationFunctionTwo = (e) => {
    this.setState({
      searchOtherInformationDataPartTwo: {
        ...this.state.searchOtherInformationDataPartTwo,
        [e.target.name]: e.target.value,
      },
    });
  };

  searchOtherInformationFunctionThree = (e) => {
    this.setState({
      searchOtherInformationDataPartThree: {
        ...this.state.searchOtherInformationDataPartThree,
        [e.target.name]: e.target.value,
      },
    });
  };

  // basicInformationCheckType = () => {
  //   if (!this.state.searchBasicInformationData.basicName) {
  //     return alert("請輸入名稱");
  //   } else if (!this.state.searchBasicInformationData.basicInformationCode) {
  //     return alert("請輸入代碼");
  //   } else if (
  //     !this.state.searchBasicInformationData.basicInformationCategory
  //   ) {
  //     return alert("請輸入類別");
  //   } else if (!this.state.searchBasicInformationData.basicPrice) {
  //     return alert("請輸入售價");
  //   } else if (!this.state.searchBasicInformationData.basicInformationUnit) {
  //     return alert("請輸入單位");
  //   } else if (
  //     !this.state.searchBasicInformationData.basicInformationCertificate
  //   ) {
  //     return alert("請輸入憑證類型");
  //   }
  //   return true;
  // };

  information = () => {
    // if (!this.basicInformationCheckType()) return;
    console.log("ok");
    this.setState({
      searchOtherInformationDataPartTwo: {
        ...this.state.searchOtherInformationDataPartTwo,
      },
    });

    const timeStamp = Date.parse(
      this.state.searchOtherInformationDataPartTwo.otherInformationSaleDate
    );

    const secondTimeStamp = Date.parse(
      this.state.searchOtherInformationDataPartTwo.otherInformationSaleDateTwo
    );

    console.log("timeStamp", timeStamp);
    console.log("secondTimeStamp", secondTimeStamp);
    const timeInterval = secondTimeStamp - timeStamp;
    console.log("timeInterval", timeInterval);

    if (timeInterval < 0) {
      alert("可銷售日期有誤，請進行確認，謝謝!");
    }
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
                  <OtherInformation
                    searchOtherInformationDataPartOne={
                      this.state.searchOtherInformationDataPartOne
                    }
                    searchOtherInformationFunction={
                      this.searchOtherInformationFunction
                    }
                    searchOtherInformationDataPartTwo={
                      this.state.searchOtherInformationDataPartTwo
                    }
                    searchOtherInformationFunctionTwo={
                      this.searchOtherInformationFunctionTwo
                    }
                    searchOtherInformationDataPartThree={
                      this.state.searchOtherInformationDataPartThree
                    }
                    searchOtherInformationFunctionThree={
                      this.searchOtherInformationFunctionThree
                    }
                  />
                </div>
              </div>

              <InformationTotalBtn information={this.information} />
            </form>
          </div>
        </>
      </div>
    );
  }
}

export default CreateProductPage;
