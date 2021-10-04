import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./CreateProductPage.module.css";

const SearchSupplierModal = (props) => {
  // const { searchSuppliersList, userSearchSupplier } = props;

  //useEffect後面放的2個參數，第一個是要執行的函式，第二個是什麼東西改變的情況下要去執行這個函示
  //使用者輸入的搜尋值不一樣時會執行前面的function
  // useEffect(() => {
  //   searchSuppliersList();
  // }, [userSearchSupplier]);

  const openModal = () => {
    props.setModalShow(true);
    props.clearUserSearchSupplier();
  };

  const closeModal = () => {
    props.setModalShow(false);
    // props.clearUserSearchSupplier();
  };

  const renderSupplier = (suppliers = []) => {
    return suppliers.map((supplier, index) => (
      <div
        key={index}
        onClick={(e) => props.userClickContent(e)}
        className={styles.userClick}
        data-supplier={supplier}
      >
        {supplier}
      </div>
    ));
  };

  return (
    <>
      {/* <Button variant="primary" onClick={openModal}>
        查詢商品
      </Button> */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.modalShow}
        onHide={closeModal}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                style={{ width: "25rem" }}
                name="searchSuppliers"
                value={props.userSearchSupplier || ""}
                onChange={props.userSearchSupplierFunction}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={props.searchSuppliersList}
              >
                查詢
              </button>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>供應商查詢結果:</h5>

          {renderSupplier(props.userSupplierListFilterState)}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default SearchSupplierModal;
