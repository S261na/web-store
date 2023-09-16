import React, { useState } from "react";
import "./Content.css";

const Content = (props) => {
  const [name, setName] = useState("");
  const [prise, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");

  //   ----------------------------------------

  const getInpName = (e) => {
    setName(e.target.value);
  };
  const getInpPrise = (e) => {
    setPrice(e.target.value);
  };
  const getInpDate = (e) => {
    setDate(e.target.value);
  };
  const getInpImage = (e) => {
    setImage(e.target.value);
  };
  const getInpDetail = (e) => {
    setDetail(e.target.value);
  };

  const addProduct = () => {
    if (
      !name.trim() ||
      !prise.trim() ||
      !date.trim() ||
      !image.trim() ||
      !detail.trim()
    ) {
      alert("Inputs are empty");
      return;
    }
    const newProduct = {
      name: name,
      price: prise,
      date: date,
      image: image,
      detail: detail,
      id: Date.now(),
    };
    setName("");
    setPrice("");
    setDate("");
    setImage("");
    setDetail("");
    props.addFunc(newProduct);
  };
  // --------------------------------------------------------
  return (
    <div>
      <h2>ADD PRODUCT</h2>
      <input
        type="text"
        onChange={getInpName}
        value={name}
        placeholder="Name of product"
      />
      <input
        type="text"
        onChange={getInpPrise}
        value={prise}
        placeholder="Prise of product"
      />
      <input
        type="date"
        onChange={getInpDate}
        value={date}
        placeholder="Date of Product"
      />
      <input
        type="text"
        onChange={getInpImage}
        value={image}
        placeholder="Image of product"
      />
      <input
        type="text"
        onChange={getInpDetail}
        value={detail}
        placeholder="Details of product"
      />
      <button onClick={addProduct}>Save Product</button>
    </div>
  );
};

export default Content;
