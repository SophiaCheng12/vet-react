import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalCreateProduct = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleClose = () => props.setShowModal(false);
  const handleShow = () => props.setShowModal(true);

  const handleClick = () => {
    // console.log("ok");
    const { editingProduct } = props;
    const newProduct = { ...editingProduct };

    console.log("obj", newProduct);

    props.createProductModal(newProduct);
    handleClose();
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        新增商品
      </Button> */}

      <Modal show={props.showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.changeModalTitle === "edit" ? "編輯商品" : "新增商品"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <span className="product">商品代碼&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="text"
                className="form-control productCodeInput"
                id="productCodes"
                name="commodityCode"
                value={props.editingProduct.commodityCode}
                onChange={props.handleChangeInput}
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
                name="productName"
                value={props.editingProduct.productName}
                onChange={props.handleChangeInput}
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
                name="commodityCategory"
                value={props.editingProduct.commodityCategory}
                onChange={props.handleChangeInput}
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
                name="commodityAttributes"
                value={props.editingProduct.commodityAttributes}
                onChange={props.handleChangeInput}
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
                name="internationalBarcode"
                value={props.editingProduct.internationalBarcode}
                onChange={props.handleChangeInput}
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
                name="price"
                value={props.editingProduct.price}
                onChange={props.handleChangeInput}
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
                name="salesPriceSetting"
                value={props.editingProduct.salesPriceSetting}
                onChange={props.handleChangeInput}
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
                name="purchasePriceSetting"
                value={props.editingProduct.purchasePriceSetting}
                onChange={props.handleChangeInput}
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
                name="cannedSmsSettings"
                value={props.editingProduct.cannedSmsSettings}
                onChange={props.handleChangeInput}
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            {props.changeModalTitle === "edit"
              ? "Save Changes"
              : "Create Product"}
          </Button>
          {/* onClick={handleClose} */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

// render(<Example />);

export default ModalCreateProduct;
