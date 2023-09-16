import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import "./App.css";
import ProductLIst from "./components/ProductList/ProductLIst";
import Modal from "./components/Modal/Modal";
import Detail from "./components/Detail/Detail";

const App = () => {
  const [product, setProduct] = useState([]);
  const [editProd, setEditProd] = useState(null);
  const [detailProd, setDetailProd] = useState(null);

  // ---------------ADD------------
  function addFunc(newObj) {
    const newState = [...product];
    newState.push(newObj);
    setProduct(newState);
  }
  // ---------------DELETE--------------
  function deleteFunc(id) {
    const deleteProduct = product.filter((name) => name.id !== id);
    setProduct(deleteProduct);
  }
  // -------------------------EDIT--------------------------
  function editFunc(id) {
    const editProduct = product.find((item) => item.id === id);
    setEditProd(editProduct);
  }

  function saveChanges(newObj) {
    let newProd = [...product];
    newProd = newProd.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      } else {
        return item;
      }
    });
    setProduct(newProd);
    setEditProd(null);
  }
  // ------------------------DETAIL-------------------------
  function detailFunc(id) {
    const detailProduct = product.find((item) => item.id === id);
    setDetailProd(detailProduct);
  }
  // ------------------CLOSE DETAIL --------------------
  function closeDet() {
    setDetailProd(null);
  }

  return (
    <div>
      <Navbar />
      <Content addFunc={addFunc} />
      <ProductLIst
        product={product}
        deleteFunc={deleteFunc}
        editFunc={editFunc}
        detailFunc={detailFunc}
      />
      {editProd ? (
        <Modal editProd={editProd} saveChanges={saveChanges} />
      ) : null}
      {detailProd ? (
        <Detail detailProd={detailProd} closeDet={closeDet} />
      ) : null}
    </div>
  );
};

export default App;
