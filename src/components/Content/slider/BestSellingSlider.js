import React from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";
const BestSellingSlider = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    // variableWidth: true,
  };
  return (
    <div className="best-selling-slider-container">
      <Slider {...settings}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </Slider>
    </div>
  );
};

export default BestSellingSlider;
