import React from "react";
// import "./CreateProductPage.css";
import CreateProductTitle from "./CreateProductTitle.js";
import BasicInformation from "./BasicInformation.js";
import OtherInformation from "./OtherInformation.js";
import styles from "./CreateProductPage.module.css";
import InformationTotalBtn from "./InformationTotalBtn.js";
import SearchSupplierModal from "./SearchSupplierModal.js";

const supplierList = [
  "供應商列表1",
  "供應商列表2",
  "供應商列表3",
  "供應商列表4",
  "供應商列表5",
  "供應商列表6",
  "供應商列表7",
  "供應商列表8",
  "供應商列表9",
  "供應商列表10",
  "供應商列表11",
  "供應商列表12",
  "供應商列表12",
];

// let userSupplierListFilter = [];

class CreateProductPage extends React.Component {
  state = {
    searchBasicInformationData: {},
    searchOtherInformationDataPartOne: {},
    searchOtherInformationDataPartTwo: {},
    searchOtherInformationDataPartThree: {},
    supplierList: [],
    userSearchSupplier: "",
    userSupplierListFilterState: [],
    userClickSupplierData: "",
    modalShow: false,
  };

  componentDidMount = () => {
    // this.setState({
    //   searchOtherInformationDataPartTwo:
    //     this.state.searchOtherInformationDataPartTwo,
    // });
    // console.log(
    //   this.state.searchOtherInformationDataPartTwo.otherInformationSaleDate
    // );

    this.setState({
      searchOtherInformationDataPartTwo: {
        ...this.state.searchOtherInformationDataPartTwo,
      },
    });

    this.setState({
      supplierList: supplierList,
    });
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

  basicInformationCheckType = () => {
    if (!this.state.searchBasicInformationData.basicName) {
      return alert("請輸入名稱");
    } else if (!this.state.searchBasicInformationData.basicInformationCode) {
      return alert("請輸入代碼");
    } else if (
      !this.state.searchBasicInformationData.basicInformationCategory
    ) {
      return alert("請輸入類別");
    } else if (!this.state.searchBasicInformationData.basicPrice) {
      return alert("請輸入售價");
    } else if (!this.state.searchBasicInformationData.basicInformationUnit) {
      return alert("請輸入單位");
    } else if (
      !this.state.searchBasicInformationData.basicInformationCertificate
    ) {
      return alert("請輸入憑證類型");
    }
    return true;
  };

  checkDate = () => {
    const timeStamp = Date.parse(
      this.state.searchOtherInformationDataPartTwo.otherInformationSaleDate
    );

    const secondTimeStamp = Date.parse(
      this.state.searchOtherInformationDataPartTwo.otherInformationSaleDateTwo
    );

    const timeInterval = secondTimeStamp - timeStamp;

    if (timeInterval < 0) {
      alert("可銷售日期有誤，請進行確認，謝謝!");
    }
  };

  checkTestValue = () => {
    const minValue =
      this.state.searchOtherInformationDataPartTwo.otherInformationLeast;

    const maxValue =
      this.state.searchOtherInformationDataPartTwo.otherInformationMaximum;

    console.log(" minValue", minValue);
    console.log("maxValue", maxValue);
    const digitInterval = maxValue - minValue;
    console.log(" digitInterval", digitInterval);
    if (digitInterval < 0) {
      alert("檢驗數值範圍有誤，請進行確認，謝謝!");
    }
  };

  information = () => {
    if (!this.basicInformationCheckType()) return;
    // console.log("ok");
    // this.setState({
    //   searchOtherInformationDataPartTwo: {
    //     ...this.state.searchOtherInformationDataPartTwo,
    //   },
    // });
    this.checkDate();
    this.checkTestValue();
  };

  searchSuppliersList = () => {
    console.log("ok");

    const supplierListFilter = this.state.supplierList.filter((item) => {
      return this.state.userSearchSupplier === item;
    });

    this.setState({
      userSupplierListFilterState: supplierListFilter,
    });

    // console.log(
    //   " userSupplierListFilterState",
    //   this.state.userSupplierListFilterState
    // );

    return supplierListFilter;
  };

  userSearchSupplierFunction = (e) => {
    this.setState({
      userSearchSupplier: e.target.value,
    });
  };

  userClickContent = (e) => {
    // console.log("test");
    const userClickData = e.currentTarget.dataset.supplier;
    console.log(userClickData);
    this.setState({
      userClickSupplierData: userClickData,
    });
    this.setModalShow(false);
  };

  clearUserClickContent = () => {
    this.setState({
      userClickSupplierData: "",
    });
  };

  setModalShow = (isClose) => {
    console.log("isClose", isClose);
    this.setState({
      modalShow: isClose,
    });
  };

  clearUserSearchSupplier = () => {
    this.setState({
      userSearchSupplier: "",
      userSupplierListFilterState: [],
    });
  };

  render() {
    console.log("modalShow", this.state.modalShow);
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
                  <SearchSupplierModal
                    searchSuppliersList={this.searchSuppliersList}
                    userSearchSupplier={this.state.userSearchSupplier}
                    userSearchSupplierFunction={this.userSearchSupplierFunction}
                    userSupplierListFilterState={
                      this.state.userSupplierListFilterState
                    }
                    closeModalFunction={this.closeModalFunction}
                    userClickContent={this.userClickContent}
                    modalShow={this.state.modalShow}
                    setModalShow={this.setModalShow}
                    clearUserSearchSupplier={this.clearUserSearchSupplier}
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
                    userClickSupplierData={this.state.userClickSupplierData}
                    setModalShow={this.setModalShow}
                    clearUserSearchSupplier={this.clearUserSearchSupplier}
                    clearUserClickContent={this.clearUserClickContent}
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
