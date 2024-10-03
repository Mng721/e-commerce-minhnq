import Timer from "../sale-timer/Timer";
import { Button } from "react-bootstrap";
import React from "react";
import "./product.sass";
import productImage from "../../../assets/image.png";

const ProductBanner = () => {
  return (
    <div className="product-banner">
      <div className="product-banner-title">Categories</div>
      <div className="product-banner-slogan">Enhance your music experience</div>
      <Timer />
      <Button className="product-banner-button">Buy now!</Button>

      <img src={productImage}></img>
    </div>
  );
};

export default ProductBanner;
