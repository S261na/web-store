import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ editProd, saveChanges }) => {
  const [editedProduct, setEditedProduct] = useState(editProd);
  function editName(e) {
    setEditedProduct({
      ...editedProduct,
      name: e.target.value,
    });
  }
  function editPrise(e) {
    setEditedProduct({
      ...editedProduct,
      price: e.target.value,
    });
  }
  function editDate(e) {
    setEditedProduct({
      ...editedProduct,
      date: e.target.value,
    });
  }
  function editImage(e) {
    setEditedProduct({
      ...editedProduct,
      image: e.target.value,
    });
  }
  function editDetail(e) {
    setEditedProduct({
      ...editedProduct,
      detail: e.target.value,
    });
  }

  function getSaveChanges() {
    saveChanges(editedProduct);
  }

  return (
    <div className="edit">
      <h2 id="pr">EDIT PRODUCT</h2>
      <input
      className="inp"
        type="text"
        placeholder="name"
        onChange={editName}
        value={editedProduct.name}
      />

      <input
      className="inp"
        type="text"
        placeholder="price"
        onChange={editPrise}
        value={editedProduct.price}
      />

      <input
      className="inp"
        type="date"
        placeholder="date"
        onChange={editDate}
        value={editedProduct.date}
      />

      <input
      className="inp"
        type="text"
        placeholder="image"
        onChange={editImage}
        value={editedProduct.image}
      />

      <input
      className="inp"
        type="text"
        placeholder="detail"
        onChange={editDetail}
        value={editedProduct.detail}
      />
      <button onClick={getSaveChanges} id="save">SAVE CHANGES</button>
    </div>
  );
};

export default Modal;
