import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Navbar/Content/Content";
import "./App.css";
import ProductLIst from "./components/Navbar/ProductList/ProductLIst";
import Modal from "./components/Modal/Modal";

const App = () => {
  const [product, setProduct] = useState([]);
  const [editProd, setEditProd] = useState(null);

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
  // -------------------------EDIT----------------
  function editFunc(id) {
    const editProduct = product.find((item) => item.id === id);
    setProduct(editProduct);
    console.log(product);
  }

  function saveChanges(newObj) {
    const newProd = [...product];
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

  return (
    <div>
      <Navbar />
      <Content addFunc={addFunc} />
      <ProductLIst
        product={product}
        deleteFunc={deleteFunc}
        editFunc={editFunc}
      />
      {editProd ? <Modal editProd={editProd} /> : null}
    </div>
  );
};

export default App;
