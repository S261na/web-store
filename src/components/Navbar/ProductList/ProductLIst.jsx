import React from "react";

const ProductLIst = ({ product, deleteFunc, editFunc }) => {
  console.log(product);
  return (
    <div>
      <h2>YOUR PRODUCT</h2>
      <div>
        {product.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.date}</p>
            <img src={item.image} alt="image of product" />
            <p>{item.detail}</p>
            <button onClick={() => deleteFunc(item.id)}>DELETE</button>
            <button onClick={() => editFunc(item.id)}>EDIT</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLIst;
