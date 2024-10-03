import React from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const SalesSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    arrows: false,
    swipeToSlide: true,
  };
  return (
    <div className="sales-slider-container">
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

export default SalesSlider;
