import React, { useState } from "react";
import "./Detail.css";

const Detail = ({ detailProd, closeDet }) => {
  return (
    <div className="details">
      <h2 id="info">Information</h2>
      <button id="but" onClick={() => closeDet()}>
        X
      </button>
      <img id="image" src={detailProd.image} />
      <div id="bk">
      <p className="det">Name: {detailProd.name}</p>
      <p className="det">Price: {detailProd.price}</p>
      <p className="det">Date: {detailProd.date}</p>
      <p className="det">Detail: {detailProd.detail}</p>
      </div>
    </div>
  );
};

export default Detail;
