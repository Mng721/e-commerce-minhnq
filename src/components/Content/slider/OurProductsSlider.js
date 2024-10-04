import React, { forwardRef } from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const OurProductsSlider = forwardRef((props, ref) => {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 2.5,
    arrow: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    slidesToScroll: 0.5,
    swipeToSlide: true,
  };
  return (
    <div className="slider-container">
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

export default OurProductsSlider;
