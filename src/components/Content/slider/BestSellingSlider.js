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
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
