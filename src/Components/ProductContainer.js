import React from "react";
import ProductDetail from "./ProductDetail";

const ProductContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.product.name}</h1>
      <hr />
      <div className="d-flex flex-row mb-3 justify-content-evenly">
      {props.product.productList.map((detail) => {
        return <ProductDetail detail={detail}/>;
      })}
      </div>
    </div>
  );
};

export default ProductContainer;
