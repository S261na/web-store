import React from "react";
import "./ProductList.css";

const ProductLIst = ({ product, deleteFunc, editFunc, detailFunc }) => {
  return (
    <div className="card">
      <h2>YOUR PRODUCT</h2>
      <div>
        {product.map((item) => (
          <div className="back">
            <div key={item.id} id="div">
              <p id="name">{item.name}</p>
              <p>{item.date}</p>
              <img id="img" src={item.image} alt="image of product" />
              <p id="p">
                <strong>{item.price} СОМ</strong>
              </p>
              <p>{item.detail}</p>
              <button className="btn" onClick={() => deleteFunc(item.id)}>
                DELETE
              </button>
              <button className="btn" onClick={() => editFunc(item.id)}>
                EDIT
              </button>
              <button className="btn" onClick={() => detailFunc(item.id)}>
                DETAIL
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLIst;
