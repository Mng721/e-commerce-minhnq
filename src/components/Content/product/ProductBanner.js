import Timer from "../body/sale-timer/Timer";
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

      <img src={productImage} alt="product-img"></img>
      <div className="box-shadow-container"></div>
    </div>
  );
};

export default ProductBanner;
