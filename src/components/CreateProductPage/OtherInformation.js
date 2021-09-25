import React from "react";

class OtherInformation extends React.Component {
  render() {
    return (
      <div class="otherInformation">
        <div class="otherInformationTitle">其他資訊(選填)</div>

        <div class="otherInformationInput">
          <div class="">
            <div class="form-group">
              <span class="basicInformationInputName otherInternationalBarcode">
                國際條碼 :&nbsp;
              </span>
              <label for="basicInformationProductName">
                <input
                  type="number"
                  class="form-control"
                  id="basicInformationProductName"
                />
              </label>
            </div>

            <div class="form-group">
              <span class="basicInformationInputName otherOldCode">
                舊代碼 :&nbsp;
              </span>
              <label for="exampleInputPassword3">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputPassword3"
                />
              </label>
            </div>
          </div>

          <div>
            <div class="form-group">
              <span class="basicInformationInputName otherInformationAttribute">
                屬性 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select"
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

            <div class="form-group">
              <span class="basicInformationInputName otherInformationColor">
                顏色 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select"
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

          <div>
            <div class="form-group otherInformationButtonRelative">
              <span class="basicInformationInputName otherInformationSupplier">
                供應商 :&nbsp;
              </span>
              <label for="exampleInputPassword4">
                <input
                  type="text"
                  class="form-control otherInformationSupplierInput"
                  id="exampleInputPassword4"
                />
              </label>

              <span class=" otherInformationButton">
                <button type="button" class="btn inquireBtn">
                  <span class="buttonWord">查詢</span>
                </button>
                <button type="button" class="btn removeBtn">
                  <span class="removeButtonWord">清除</span>
                </button>
              </span>
            </div>

            <div class="form-group">
              <span class="basicInformationInputName otherInformationBrand">
                品牌 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select"
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

        <div class="form-group otherInformationDescriptionRelative">
          <span class="basicInformationInputName otherInformationDescriptionTitle">
            描述 :
          </span>

          <label for="exampleInputPassword5">
            <input
              type="text"
              class="form-control otherInformationDescriptionInput"
              id="exampleInputPassword5"
            />
          </label>
        </div>

        <div class="otherInformationInputPart2">
          <div class="otherInformationSaleDate">
            <div class="otherInformationCalendarImgRelative">
              <span class="basicInformationInputName otherInformationSaleDateTitle">
                可銷售日期 :&nbsp;
              </span>
              <label for="exampleInputPassword3">
                <input
                  type="text"
                  class="form-control otherInformationSaleDateInput"
                  id="exampleInputPassword3"
                />
              </label>
              <img
                src="./Img/calendar.png"
                class="otherInformationCalendarImg"
                alt=""
              />

              <span class="basicInformationInputName otherInformationDash">
                -
              </span>
              <label for="exampleInputPassword3">
                <input
                  type="text"
                  class="form-control otherInformationSaleDateInput"
                  id="exampleInputPassword3"
                />
              </label>
              <img
                src="./Img/calendar.png"
                class="otherInformationCalendarImg2"
                alt=""
              />
            </div>

            <div>
              <span class="basicInformationInputName otherInformationIfInvalid">
                是否失效 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select  otherInformationIfInvalidSelect"
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

          <div class="otherInformationSetPrice">
            <div class="otherInformationAllTitle">
              <div>
                <span class="basicInformationInputName otherInformationSetPriceTitle">
                  自由設定價格 :
                </span>
                <label for="exampleFormControlSelect1">
                  <select
                    class="form-control select  otherInformationIfInvalidSelect otherInformationTitleInput"
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
                <span class="basicInformationInputName discountMerchandise">
                  是否為折扣商品 :
                </span>
                <label for="exampleFormControlSelect1">
                  <select
                    class="form-control select  otherInformationIfInvalidSelect
                        otherInformationTitleInput discountMerchandiseInput"
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
                  class="basicInformationInputName otherInformationBatchNumber
                      "
                >
                  批號控制 :
                </span>
                <label for="exampleFormControlSelect1">
                  <select
                    class="form-control select  otherInformationIfInvalidSelect
                        otherInformationTitleInput otherInformationBatchNumberInput"
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
                <span class="basicInformationInputName otherInformationInventory">
                  是否為存貨 :
                </span>
                <label for="exampleFormControlSelect1">
                  <select
                    class="form-control select  otherInformationIfInvalidSelect
                        otherInformationTitleInput otherInformationInventoryInput"
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
                <span class="basicInformationInputName otherInformationSafetyStock">
                  安全庫存量 :
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationIfInvalidSelect
                        otherInformationTitleInput otherInformationSafetyStockInput"
                    id="exampleInputPassword3"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="otherInformationDrugOff">
            <div>
              <span
                class="basicInformationInputName
                    otherInformationDrugOffTitle"
              >
                是否可斷藥 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select otherInformationIfInvalidSelect  otherInformationDrugOffTitleInput"
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
              <span class="basicInformationInputName otherInformationTestValue">
                檢驗數值範圍 :
              </span>
              <span class="otherInformationLeast">最小</span>
              <label for="exampleInputPassword3">
                <input
                  type="text"
                  class="form-control otherInformationLeastInput"
                  id="exampleInputPassword3"
                />
              </label>

              <span class="otherInformationTestValueDash">-</span>

              <span class="otherInformationMaximum"> 最大</span>
              <label for="exampleInputPassword3">
                <input
                  type="text"
                  class="form-control otherInformationMaximumInput"
                  id="exampleInputPassword3"
                />
              </label>
            </div>
          </div>
        </div>

        <div class="otherInformationInputPart3">
          <div class="otherInformationSubjects">
            <div class="form-group otherInformationButtonRelative otherInformationPurchase">
              <span class="basicInformationInputName otherInformationPurchaseTitle">
                進貨科目 :&nbsp;
              </span>
              <label for="exampleInputPassword4">
                <input
                  type="text"
                  class="form-control otherInformationPurchaseInput"
                  id="exampleInputPassword4"
                />
              </label>

              <span class="otherInformationButton otherInformationSubjectsButton">
                <button type="button" class="btn inquireBtn">
                  <span class="buttonWord">查詢</span>
                </button>
                <button type="button" class="btn removeBtn">
                  <span class="removeButtonWord">清除</span>
                </button>
              </span>
            </div>

            <div class="form-group otherInformationButtonRelative">
              <span class="basicInformationInputName otherInformationSalesTitle">
                銷貨科目 :&nbsp;
              </span>
              <label for="exampleInputPassword4">
                <input
                  type="text"
                  class="form-control  otherInformationSalesInput"
                  id="exampleInputPassword4"
                />
              </label>

              <span class=" otherInformationButton otherInformationSubjectsButton">
                <button type="button" class="btn inquireBtn">
                  <span class="buttonWord">查詢</span>
                </button>
                <button type="button" class="btn removeBtn">
                  <span class="removeButtonWord">清除</span>
                </button>
              </span>
            </div>
          </div>

          <div class="otherInformationSaleCurrencyFlex">
            <div>
              <span class="basicInformationInputName otherInformationSaleCurrencyTitle">
                銷售幣別 :&nbsp;
              </span>
              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select otherInformationSaleCurrencyInput"
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
              <span class="basicInformationInputName otherInformationCostCalculation">
                成本計算原則 :&nbsp;
              </span>

              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select otherInformationCostCalculationInput"
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
              <span class="basicInformationInputName otherInformationTaxCategory">
                稅項類別 :
              </span>

              <label for="exampleFormControlSelect1">
                <select
                  class="form-control select otherInformationTaxCategoryInput"
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

        <div class="otherInformationInputPart4">
          <div class="otherInformationPart4AllInput">
            <div>
              <div>
                <span class="basicInformationInputName otherInformationBoxNumber">
                  每板箱數 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput"
                    id="exampleInputPassword3"
                  />
                </label>
              </div>

              <div>
                <span class="basicInformationInputName otherInformationBoxNumber otherInformationUnitGrossWeight">
                  單位毛重 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput otherInformationUnitWeightInput"
                    id="exampleInputPassword3"
                    placeholder=""
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span class="basicInformationInputName otherInformationBoxNumber otherInformationQuantity">
                  每箱數量 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput"
                    id="exampleInputPassword3"
                  />
                </label>
              </div>

              <div>
                <span class="basicInformationInputName otherInformationBoxNumber otherInformationUnitNetWeight">
                  單位淨重 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput
                        otherInformationUnitWeightInput"
                    id="exampleInputPassword3"
                    placeholder=""
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span class="basicInformationInputName otherInformationBoxNumber otherInformationNumber">
                  每盒數量 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput"
                    id="exampleInputPassword3"
                  />
                </label>
              </div>

              <div>
                <span class="basicInformationInputName otherInformationVolume">
                  材積 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput
                        otherInformationVolumeInput"
                    id="exampleInputPassword3"
                    placeholder=""
                  />
                </label>
              </div>
            </div>

            <div>
              <div>
                <span class="basicInformationInputName otherInformationBoxNumber otherInformationSpecification">
                  規格 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput"
                    id="exampleInputPassword3"
                  />
                </label>
              </div>

              <div>
                <span class="basicInformationInputName otherInformationCalculationTitle">
                  長寬高 :&nbsp;
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput
                        otherInformationCalculationInput"
                    id="exampleInputPassword3"
                  />
                </label>

                <span>
                  <img src="./Img/x.png" alt="" />
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput
                       otherInformationCalculationInput"
                    id="exampleInputPassword3"
                  />
                </label>

                <span>
                  <img src="./Img/x.png" alt="" />
                </span>
                <label for="exampleInputPassword3">
                  <input
                    type="text"
                    class="form-control otherInformationBoxNumberInput
                        otherInformationCalculationInput"
                    id="exampleInputPassword3"
                  />
                </label>

                <span>cm</span>
              </div>
            </div>
          </div>

          <div class="otherInformationUploadPhoto">
            <span class="basicInformationInputName otherInformationProductPicture">
              商品圖片
            </span>
            <img src="./Img/arrow.png" alt="" />
            <span class="otherInformationUploadPhotoTitle">上傳照片</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherInformation;
