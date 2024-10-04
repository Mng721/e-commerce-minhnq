import React, { forwardRef } from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const SalesSlider = forwardRef((props, ref) => {
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
      <Slider {...settings} ref={ref}>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart />
        </div>
      </Slider>
    </div>
  );
});
export default SalesSlider;
