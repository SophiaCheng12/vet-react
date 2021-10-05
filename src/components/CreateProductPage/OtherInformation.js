import React from "react";
import styles from "./CreateProductPage.module.css";

class OtherInformation extends React.Component {
  openModal = () => {
    console.log("close");
    this.props.setModalShow(true);
    this.props.clearUserSearchSupplier();
  };

  render() {
    return (
      <div className={styles.otherInformation}>
        <div className={styles.otherInformationTitle}>其他資訊(選填)</div>

        <div className={styles.otherInformationInput}>
          <div className={styles.barCodeAddOldCode}>
            <div className="form-group">
              <span
                className={`${styles.basicInformationInputName}
              ${styles.otherInternationalBarcode}`}
              >
                國際條碼 :&nbsp;
              </span>
              <label htmlFor="basicInformationProductName">
                <input
                  type="number"
                  className={`form-control ${styles.input}`}
                  id="basicInformationProductName"
                  name="otherInternationalBarcode"
                  value={
                    this.props.searchOtherInformationDataPartOne
                      .otherInternationalBarcode || ""
                  }
                  onChange={this.props.searchOtherInformationFunction}
                />
              </label>
            </div>

            <div className="form-group">
              <span
                className={`${styles.basicInformationInputName} ${styles.otherOldCode} `}
              >
                舊代碼 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="number"
                  className={`form-control ${styles.input}`}
                  id="exampleInputPassword3"
                  name="otherOldCode"
                  value={
                    this.props.searchOtherInformationDataPartOne.otherOldCode ||
                    ""
                  }
                  onChange={this.props.searchOtherInformationFunction}
                />
              </label>
            </div>
          </div>

          <div className={styles.attributeAddColor}>
            <div className="form-group">
              <span
                className={`${styles.basicInformationInputName} ${styles.otherInformationAttribute}  `}
              >
                屬性 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationAttribute"
                  value={
                    this.props.searchOtherInformationDataPartOne
                      .otherInformationAttribute || ""
                  }
                  onChange={this.props.searchOtherInformationFunction}
                >
                  <option value="">--Please choose an option--</option>
                  <option>e</option>
                  <option>f</option>
                  <option>g</option>
                  <option>h</option>
                  <option>i</option>
                </select>
              </label>
            </div>

            <div className="form-group">
              <span
                className={`${styles.basicInformationInputName} ${styles.otherInformationColor} `}
              >
                顏色 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationColor"
                  value={
                    this.props.searchOtherInformationDataPartOne
                      .otherInformationColor || ""
                  }
                  onChange={this.props.searchOtherInformationFunction}
                >
                  <option value="">--Please choose an option--</option>
                  <option>j</option>
                  <option>k</option>
                  <option>l</option>
                  <option>m</option>
                  <option>n</option>
                </select>
              </label>
            </div>
          </div>

          <div className={styles.supplierAddBrand}>
            <div
              className={`form-group ${styles.otherInformationButtonRelative}`}
            >
              <span
                className={`${styles.basicInformationInputName} ${styles.otherInformationSupplier} `}
              >
                供應商 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword4">
                <input
                  type="text"
                  className={`form-control ${styles.otherInformationSupplierInput}`}
                  id="exampleInputPassword4"
                  name="otherInformationSupplier"
                  // value={
                  //   this.props.searchOtherInformationDataPartOne
                  //     .otherInformationSupplier || ""
                  // }
                  // onChange={this.props.searchOtherInformationFunction}
                  value={this.props.userClickSupplierData}
                  disabled
                />
              </label>

              <span className={styles.otherInformationButton}>
                <button
                  type="button"
                  className={`btn ${styles.inquireBtn}`}
                  onClick={this.openModal}
                >
                  <span className={styles.buttonWord}>查詢</span>
                </button>
                <button type="button" className={`btn ${styles.removeBtn} `}>
                  <span
                    className={styles.removeButtonWord}
                    onClick={this.props.clearUserClickContent}
                  >
                    清除
                  </span>
                </button>
              </span>
            </div>

            <div className="form-group">
              <span
                className={`${styles.basicInformationInputName} ${styles.otherInformationBrand} `}
              >
                品牌 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationBrand"
                  value={
                    this.props.searchOtherInformationDataPartOne
                      .otherInformationBrand || ""
                  }
                  onChange={this.props.searchOtherInformationFunction}
                >
                  <option value="">--Please choose an option--</option>
                  <option>o</option>
                  <option>p</option>
                  <option>q</option>
                  <option>r</option>
                  <option>s</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div
          className={`form-group ${styles.otherInformationDescriptionRelative}`}
        >
          <span
            className={`${styles.basicInformationInputName} ${styles.otherInformationDescriptionTitle} `}
          >
            描述 :
          </span>

          <label htmlFor="exampleInputPassword5">
            <input
              type="text"
              className={`form-control ${styles.otherInformationDescriptionInput}`}
              id="exampleInputPassword5"
              name="otherInformationDescription"
              value={
                this.props.searchOtherInformationDataPartOne
                  .otherInformationDescription || ""
              }
              onChange={this.props.searchOtherInformationFunction}
            />
          </label>
        </div>

        <div className={styles.otherInformationInputPart2}>
          <div className={styles.otherInformationSaleDate}>
            <div className={styles.otherInformationCalendarImgRelative}>
              <span
                className={`${styles.basicInformationInputName}  ${styles.otherInformationSaleDateTitle}`}
              >
                可銷售日期 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="date"
                  className={`form-control  ${styles.otherInformationSaleDateInput}  ${styles.input}`}
                  id="exampleInputPassword3"
                  name="otherInformationSaleDate"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationSaleDate || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                />
              </label>
              <img
                src="./Img/calendar.png"
                className={styles.otherInformationCalendarImg}
                alt=""
              />

              <span
                className={`${styles.basicInformationInputName} ${styles.otherInformationDash} `}
              >
                -
              </span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="date"
                  className={`form-control ${styles.otherInformationSaleDateInput}  ${styles.input}`}
                  id="exampleInputPassword3"
                  name="otherInformationSaleDateTwo"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationSaleDateTwo || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                />
              </label>
              <img
                src="./Img/calendar.png"
                className={styles.otherInformationCalendarImg2}
                alt=""
              />
            </div>

            <div>
              <span
                className={`${styles.basicInformationInputName}  ${styles.otherInformationIfInvalid} `}
              >
                是否失效 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect}  ${styles.otherInformationSelect}  ${styles.otherInformationIfInvalidSelectTwo}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationIfInvalid"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationIfInvalid || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                >
                  <option value="">--Please choose an option--</option>
                  <option>t</option>
                  <option>u</option>
                  <option>v</option>
                  <option>w</option>
                  <option>x</option>
                </select>
              </label>
            </div>
          </div>

          <div className={styles.otherInformationSetPrice}>
            <div className={styles.otherInformationAllTitle}>
              <div>
                <span
                  className={`  ${styles.basicInformationInputName}   ${styles.otherInformationSetPriceTitle}`}
                >
                  自由設定價格 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect} ${styles.otherInformationTitleInput} ${styles.otherInformationSelect} `}
                    id="exampleFormControlSelect1"
                    name="otherInformationSetPrice"
                    value={
                      this.props.searchOtherInformationDataPartTwo
                        .otherInformationSetPrice || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionTwo}
                  >
                    <option value="">--Please choose an option--</option>
                    <option>y</option>
                    <option>z</option>
                    <option>a2</option>
                    <option>b2</option>
                    <option>y2</option>
                  </select>
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.discountMerchandise} `}
                >
                  是否為折扣商品 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput}  ${styles.discountMerchandiseInput} ${styles.otherInformationSelect} `}
                    id="exampleFormControlSelect1"
                    name="discountMerchandise"
                    value={
                      this.props.searchOtherInformationDataPartTwo
                        .discountMerchandise || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionTwo}
                  >
                    <option value="">--Please choose an option--</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                  </select>
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBatchNumber} `}
                >
                  批號控制 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select} ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput} ${styles.otherInformationBatchNumberInput}  ${styles.otherInformationSelect}  `}
                    id="exampleFormControlSelect1"
                    name="otherInformationBatchNumber"
                    value={
                      this.props.searchOtherInformationDataPartTwo
                        .otherInformationBatchNumber || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionTwo}
                  >
                    <option value="">--Please choose an option--</option>
                    <option>aa</option>
                    <option>bb</option>
                    <option>cc</option>
                    <option>dd</option>
                    <option>ee</option>
                  </select>
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationInventory} `}
                >
                  是否為存貨 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select} ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput} ${styles.otherInformationInventoryInput} ${styles.otherInformationSelect}`}
                    id="exampleFormControlSelect1"
                    name="otherInformationInventory"
                    value={
                      this.props.searchOtherInformationDataPartTwo
                        .otherInformationInventory || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionTwo}
                  >
                    <option value="">--Please choose an option--</option>
                    <option>ff</option>
                    <option>gg</option>
                    <option>hh</option>
                    <option>ii</option>
                    <option>jj</option>
                  </select>
                </label>
              </div>

              <div>
                <span
                  className={` ${styles.basicInformationInputName}  ${styles.otherInformationSafetyStock}  `}
                >
                  安全庫存量 :
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={` form-control ${styles.otherInformationIfInvalidSelect}
                      ${styles.otherInformationTitleInput}  ${styles.otherInformationSafetyStockInput} ${styles.input}  ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    name="otherInformationSafetyStock"
                    value={
                      this.props.searchOtherInformationDataPartTwo
                        .otherInformationSafetyStock || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionTwo}
                  />
                </label>
              </div>
            </div>
          </div>

          <div className={styles.otherInformationDrugOff}>
            <div>
              <span
                className={` ${styles.basicInformationInputName}
                    ${styles.otherInformationDrugOffTitle}  `}
              >
                是否可斷藥 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={` form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect}  ${styles.otherInformationDrugOffTitleInput} ${styles.otherInformationSelect} `}
                  id="exampleFormControlSelect1"
                  name="otherInformationDrugOff"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationDrugOff || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                >
                  <option value="">--Please choose an option--</option>
                  <option>是</option>
                  <option>否</option>
                </select>
              </label>
            </div>

            <div>
              <span
                className={`${styles.basicInformationInputName}   ${styles.otherInformationTestValue}  `}
              >
                檢驗數值範圍 :
              </span>
              <span className={` ${styles.otherInformationLeast}   `}>
                最小
              </span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="number"
                  className={`form-control ${styles.otherInformationLeastInput}  ${styles.input}`}
                  id="exampleInputPassword3"
                  name="otherInformationLeast"
                  // min="0"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationLeast || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                />
                {/* {{value < 0 ? value === 0 : value === value }} */}
              </label>

              <span className={styles.otherInformationTestValueDash}>-</span>

              <span className={styles.otherInformationMaximum}> 最大</span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="number"
                  className={`form-control ${styles.otherInformationMaximumInput}`}
                  id="exampleInputPassword3"
                  name="otherInformationMaximum"
                  value={
                    this.props.searchOtherInformationDataPartTwo
                      .otherInformationMaximum || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionTwo}
                />
              </label>
            </div>
          </div>
        </div>

        <div className={styles.otherInformationInputPart3}>
          <div className={styles.otherInformationSubjects}>
            <div
              className={`form-group ${styles.otherInformationButtonRelative}  ${styles.otherInformationPurchase} `}
            >
              <span
                className={`${styles.basicInformationInputName}   ${styles.otherInformationPurchaseTitle} `}
              >
                進貨科目 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword4">
                <input
                  type="text"
                  className={`form-control ${styles.otherInformationPurchaseInput} ${styles.input} `}
                  id="exampleInputPassword4"
                  name="otherInformationPurchase"
                  value={
                    this.props.searchOtherInformationDataPartThree
                      .otherInformationPurchase || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionThree}
                />
              </label>

              <span
                className={`${styles.otherInformationButton} ${styles.otherInformationSubjectsButton} `}
              >
                <button type="button" className={`btn ${styles.inquireBtn}`}>
                  <span className={styles.buttonWord}>查詢</span>
                </button>
                <button type="button" className={`btn ${styles.removeBtn}`}>
                  <span className={styles.removeButtonWord}>清除</span>
                </button>
              </span>
            </div>

            <div
              className={` form-group ${styles.otherInformationButtonRelative}  `}
            >
              <span
                className={`${styles.basicInformationInputName}  ${styles.otherInformationSalesTitle}`}
              >
                銷貨科目 :&nbsp;
              </span>
              <label htmlFor="exampleInputPassword4">
                <input
                  type="text"
                  className={`form-control  ${styles.otherInformationSalesInput}  ${styles.input}`}
                  id="exampleInputPassword4"
                  name="otherInformationSales"
                  value={
                    this.props.searchOtherInformationDataPartThree
                      .otherInformationSales || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionThree}
                />
              </label>

              <span
                className={`${styles.otherInformationButton}  ${styles.otherInformationSubjectsButton}`}
              >
                <button type="button" className={`btn ${styles.inquireBtn}`}>
                  <span className={styles.buttonWord}>查詢</span>
                </button>
                <button type="button" className={`btn  ${styles.removeBtn}`}>
                  <span className="removeButtonWord"> 清除</span>
                </button>
              </span>
            </div>
          </div>

          <div className={styles.otherInformationSaleCurrencyFlex}>
            <div>
              <span
                className={`${styles.basicInformationInputName}  ${styles.otherInformationSaleCurrencyTitle} `}
              >
                銷售幣別 :&nbsp;
              </span>
              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationSaleCurrencyInput} ${styles.otherInformationSelect}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationSaleCurrency"
                  value={
                    this.props.searchOtherInformationDataPartThree
                      .otherInformationSaleCurrency || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionThree}
                >
                  <option value="">--Please choose an option--</option>
                  <option>ok</option>
                  <option>ok1</option>
                  <option>ok2</option>
                  <option>ok3</option>
                  <option>ok4</option>
                </select>
              </label>
            </div>

            <div>
              <span
                className={` ${styles.basicInformationInputName}   ${styles.otherInformationCostCalculation} `}
              >
                成本計算原則 :&nbsp;
              </span>

              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationCostCalculationInput} ${styles.otherInformationSelect}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationCostCalculation"
                  value={
                    this.props.searchOtherInformationDataPartThree
                      .otherInformationCostCalculation || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionThree}
                >
                  <option value="">--Please choose an option--</option>
                  <option>111</option>
                  <option>222</option>
                  <option>333</option>
                  <option>444</option>
                  <option>555</option>
                </select>
              </label>
            </div>

            <div>
              <span
                className={` ${styles.basicInformationInputName}  ${styles.otherInformationTaxCategory} `}
              >
                稅項類別 :
              </span>

              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationTaxCategoryInput} ${styles.otherInformationSelect}`}
                  id="exampleFormControlSelect1"
                  name="otherInformationTaxCategory"
                  value={
                    this.props.searchOtherInformationDataPartThree
                      .otherInformationTaxCategory || ""
                  }
                  onChange={this.props.searchOtherInformationFunctionThree}
                >
                  {/* <!-- otherInformationIfInvalidSelect otherInformationDrugOffTitleInput --> */}
                  <option value="">--Please choose an option--</option>
                  <option>66666</option>
                  <option>77777</option>
                  <option>88888</option>
                  <option>99999</option>
                  <option>11111</option>
                </select>
              </label>
            </div>
          </div>
        </div>

        <div className={styles.otherInformationInputPart4}>
          <div className={styles.otherInformationPart4AllInput}>
            <div>
              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBoxNumber} `}
                >
                  每板箱數 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.otherInformationBoxNumberInputTwo}  ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    name="otherInformationBoxNumber"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationBoxNumber || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBoxNumber}  ${styles.otherInformationUnitGrossWeight} `}
                >
                  單位毛重 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.otherInformationUnitWeightInput}  ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    placeholder=""
                    name="otherInformationUnitWeight"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationUnitWeight || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBoxNumber}   ${styles.otherInformationQuantity} `}
                >
                  每箱數量 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    name="otherInformationQuantity"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationQuantity || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName} ${styles.otherInformationBoxNumber}  ${styles.otherInformationUnitNetWeight}`}
                >
                  單位淨重 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}
                       ${styles.otherInformationUnitWeightInput}  ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    placeholder=""
                    name="otherInformationUnitNetWeight"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationUnitNetWeight || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBoxNumber}  ${styles.otherInformationNumber}`}
                >
                  每盒數量 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput} ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    name="otherInformationNumber"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationNumber || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationVolume} `}
                >
                  材積 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}
                        ${styles.otherInformationVolumeInput}  ${styles.input} ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    placeholder=""
                    name="otherInformationVolume"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationVolume || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span
                  className={` ${styles.basicInformationInputName}   ${styles.otherInformationBoxNumber} ${styles.otherInformationSpecification} `}
                >
                  規格 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.input}  ${styles.otherInformationTwo}`}
                    id="exampleInputPassword3"
                    name="otherInformationSpecification"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationSpecification || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>
              </div>

              <div>
                <span
                  className={` ${styles.basicInformationInputName}   ${styles.otherInformationCalculationTitle} `}
                >
                  長寬高 :&nbsp;
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}
                       ${styles.otherInformationCalculationInput}  ${styles.input}`}
                    id="exampleInputPassword3"
                    name="otherInformationCalculationLength"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationCalculationLength || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>

                <span>
                  <img src="./Img/x.png" alt="" />
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}
                       ${styles.otherInformationCalculationInput}  ${styles.input}`}
                    id="exampleInputPassword3"
                    name="otherInformationCalculationWidth"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationCalculationWidth || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>

                <span>
                  <img src="./Img/x.png" alt="" />
                </span>
                <label htmlFor="exampleInputPassword3">
                  <input
                    type="text"
                    className={`form-control ${styles.otherInformationBoxNumberInput}
                        ${styles.otherInformationCalculationInput} ${styles.input} `}
                    id="exampleInputPassword3"
                    name="otherInformationCalculationHeight"
                    value={
                      this.props.searchOtherInformationDataPartThree
                        .otherInformationCalculationHeight || ""
                    }
                    onChange={this.props.searchOtherInformationFunctionThree}
                  />
                </label>

                <span>cm</span>
              </div>
            </div>
          </div>

          <div className={styles.otherInformationUploadPhoto}>
            <span
              className={`  ${styles.basicInformationInputName}  ${styles.otherInformationProductPicture}  `}
            >
              商品圖片
            </span>
            <img src="./Img/arrow.png" alt="" />
            <span className={styles.otherInformationUploadPhotoTitle}>
              上傳照片
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherInformation;
