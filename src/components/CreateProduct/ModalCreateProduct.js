import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCreateProduct = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [item, setItem] = useState(0);
  const [commodityCode, setCommodityCode] = useState("");
  const [productName, setProductName] = useState("");
  const [commodityCategory, setCommodityCategory] = useState("");
  const [commodityAttributes, setCommodityAttributes] = useState("");
  const [internationalBarcode, setInternationalBarcode] = useState("");
  const [price, setPrice] = useState("");
  const [salesPriceSetting, setSalesPriceSetting] = useState("");
  const [purchasePriceSetting, setPurchasePriceSetting] = useState("");
  const [cannedSmsSettings, setCannedSmsSettings] = useState("");

  const handleClick = () => {
    console.log("ok");
    let text = {
      item: item,
      commodityCode: commodityCode,
      productName: productName,
      commodityCategory: commodityCategory,
      commodityAttributes: commodityAttributes,
      internationalBarcode: internationalBarcode,
      price: price,
      salesPriceSetting: salesPriceSetting,
      purchasePriceSetting: purchasePriceSetting,
      cannedSmsSettings: cannedSmsSettings,
      modify: <img src="./Img/modify.png" alt="" />,
      delete: <img src="./Img/bin.png" alt="" />,
    };

    console.log("text", text);

    props.handleModal(text);
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        新增商品
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>新增商品</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <span className="product">商品代碼&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setCommodityCode(e.target.value);
                }}
              />
            </label>
            {/* 目前CommodityCode:{commodityCode} */}
          </div>

          <div className="form-group">
            <span className="product">商品名稱&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setProductName(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">商品類別&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setCommodityCategory(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">商品屬性&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setCommodityAttributes(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">國際條碼&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setInternationalBarcode(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group" style={{ border: "red" }}>
            <span className="product test">售價&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">銷售價格設定&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => setSalesPriceSetting(e.target.value)}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">採購價格設定&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setPurchasePriceSetting(e.target.value);
                }}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">罐頭簡訊設定&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="productCode"
                onChange={(e) => {
                  setCannedSmsSettings(e.target.value);
                }}
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
          {/* onClick={handleClose} */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

// render(<Example />);

export default ModalCreateProduct;
