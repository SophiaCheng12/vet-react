// import { queryAllByAttribute } from "@testing-library/dom";
import React from "react"; //{ useState, useEffect }
import { Button, Modal } from "react-bootstrap";

const ModalCreateProduct = (props) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const handleClose = () => props.setShowModal(false);
  // const handleShow = () => props.setShowModal(true);

  const checkType = () => {
    if (!props.editingProduct.commodityCode) {
      return alert("請輸入代碼");
    } else if (!props.editingProduct.productName) {
      return alert("請輸入商品名稱");
    } else if (!props.editingProduct.commodityCategory) {
      return alert("請輸入商品類別");
    }
    return true;
  };

  const handleClick = () => {
    if (props.changeModalTitle === "create") {
      console.log("ok");
      if (!checkType()) return;
      const { editingProduct } = props;
      const newProduct = { ...editingProduct };

      console.log("obj", newProduct);

      props.createProductModal(newProduct);
      handleClose();
    }
    if (props.changeModalTitle === "edit") {
      console.log("ok");
      if (!checkType()) return;
      const { editingProduct } = props;
      const editedNewProduct = { ...editingProduct };
      console.log(editedNewProduct);
      // props.editProductModalSave(editedNewProduct);
      const editedNewProductInput = props.productList.map((item) => {
        console.log("item", item);
        if (props.getUserId === item.id) {
          return { ...editingProduct, editedNewProduct };
        } else {
          return item;
          // console.log("item", item);
        }
      });

      props.editProductModalSave(editedNewProductInput);
      handleClose();
    }
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
                value={props.editingProduct.commodityCode || ""}
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
                value={props.editingProduct.productName || ""}
                onChange={props.handleChangeInput}
              />
            </label>
          </div>

          <div className="form-group">
            <span className="product">商品類別&nbsp;:&nbsp;</span>
            <label htmlFor="exampleFormControlSelect1">
              <select
                className="form-control select"
                id="productCodes"
                name="commodityCategory"
                value={props.editingProduct.commodityCategory || ""}
                onChange={props.handleChangeInput}
              >
                <option value=""></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
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
                value={props.editingProduct.commodityAttributes || ""}
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
                value={props.editingProduct.internationalBarcode || ""}
                onChange={props.handleChangeInput}
              />
            </label>
          </div>

          <div className="form-group" style={{ border: "red" }}>
            <span className="product test">售價&nbsp;:&nbsp;&nbsp;</span>
            <label htmlFor="productCodes">
              <input
                type="number"
                className="form-control productCodeInput"
                id="productCodes"
                name="price"
                value={props.editingProduct.price || ""}
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
                value={props.editingProduct.salesPriceSetting || ""}
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
                value={props.editingProduct.purchasePriceSetting || ""}
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
                value={props.editingProduct.cannedSmsSettings || ""}
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
