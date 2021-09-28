import React from "react";
import styles from "./CreateProductPage.module.css";

class OtherInformation extends React.Component {
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
                className={`${styles.basicInformationInputName} ${styles.otherInformationColor} `}
              >
                顏色 :&nbsp;
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
                />
              </label>

              <span className={styles.otherInformationButton}>
                <button type="button" className={`btn ${styles.inquireBtn} `}>
                  <span className={styles.buttonWord}>查詢</span>
                </button>
                <button type="button" className={`btn ${styles.removeBtn} `}>
                  <span className={styles.removeButtonWord}>清除</span>
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
                  type="text"
                  className={`form-control  ${styles.otherInformationSaleDateInput}  ${styles.input}`}
                  id="exampleInputPassword3"
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
                  type="text"
                  className={`form-control ${styles.otherInformationSaleDateInput}  ${styles.input}`}
                  id="exampleInputPassword3"
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
                  className={`  form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect} `}
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
                    className={`form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect} ${styles.otherInformationTitleInput}  `}
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

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.discountMerchandise} `}
                >
                  是否為折扣商品 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput}  ${styles.discountMerchandiseInput}  `}
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

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationBatchNumber} `}
                >
                  批號控制 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select} ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput} ${styles.otherInformationBatchNumberInput} `}
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

              <div>
                <span
                  className={`${styles.basicInformationInputName}  ${styles.otherInformationInventory} `}
                >
                  是否為存貨 :
                </span>
                <label htmlFor="exampleFormControlSelect1">
                  <select
                    className={`form-control ${styles.select} ${styles.otherInformationIfInvalidSelect}
                        ${styles.otherInformationTitleInput} ${styles.otherInformationInventoryInput} `}
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
                      ${styles.otherInformationTitleInput}  ${styles.otherInformationSafetyStockInput} ${styles.input}`}
                    id="exampleInputPassword3"
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
                  className={` form-control ${styles.select}  ${styles.otherInformationIfInvalidSelect}  ${styles.otherInformationDrugOffTitleInput}  `}
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
                  type="text"
                  className={`form-control ${styles.otherInformationLeastInput}  ${styles.input}`}
                  id="exampleInputPassword3"
                />
              </label>

              <span className={styles.otherInformationTestValueDash}>-</span>

              <span className={styles.otherInformationMaximum}> 最大</span>
              <label htmlFor="exampleInputPassword3">
                <input
                  type="text"
                  className={`form-control ${styles.otherInformationMaximumInput}`}
                  id="exampleInputPassword3"
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
                />
              </label>

              <span
                className={`${styles.otherInformationButton}    ${styles.otherInformationSubjectsButton} `}
              >
                <button type="button" className={` btn ${styles.inquireBtn}  `}>
                  <span className={styles.buttonWord}>查詢</span>
                </button>
                <button type="button" className={`   btn ${styles.removeBtn} `}>
                  <span className={styles.removeButtonWord}>清除</span>
                </button>
              </span>
            </div>

            <div
              className={`form-group  ${styles.otherInformationButtonRelative}`}
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
                />
              </label>

              <span
                className={`${styles.otherInformationButton}  ${styles.otherInformationSubjectsButton}  `}
              >
                <button type="button" className={`btn  ${styles.inquireBtn}`}>
                  <span className="buttonWord">查詢</span>
                </button>
                <button type="button" className={`btn  ${styles.removeBtn}`}>
                  <span className={styles.removeButtonWord}>清除</span>
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
                  className={`form-control ${styles.select}  ${styles.otherInformationSaleCurrencyInput} `}
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

            <div>
              <span
                className={` ${styles.basicInformationInputName}   ${styles.otherInformationCostCalculation} `}
              >
                成本計算原則 :&nbsp;
              </span>

              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationCostCalculationInput} `}
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

            <div>
              <span
                className={` ${styles.basicInformationInputName}  ${styles.otherInformationTaxCategory} `}
              >
                稅項類別 :
              </span>

              <label htmlFor="exampleFormControlSelect1">
                <select
                  className={`form-control ${styles.select}  ${styles.otherInformationTaxCategoryInput} `}
                  id="exampleFormControlSelect1"
                >
                  {/* <!-- otherInformationIfInvalidSelect otherInformationDrugOffTitleInput --> */}
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
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.input}`}
                    id="exampleInputPassword3"
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
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.otherInformationUnitWeightInput}  ${styles.input}`}
                    id="exampleInputPassword3"
                    placeholder=""
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
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.input} `}
                    id="exampleInputPassword3"
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
                       ${styles.otherInformationUnitWeightInput}  ${styles.input}`}
                    id="exampleInputPassword3"
                    placeholder=""
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
                    className={`form-control ${styles.otherInformationBoxNumberInput} ${styles.input}`}
                    id="exampleInputPassword3"
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
                        ${styles.otherInformationVolumeInput}  ${styles.input}`}
                    id="exampleInputPassword3"
                    placeholder=""
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
                    className={`form-control ${styles.otherInformationBoxNumberInput}  ${styles.input}`}
                    id="exampleInputPassword3"
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
