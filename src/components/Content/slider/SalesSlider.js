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
          <Cart sale="30" />
        </div>
        <div>
          <Cart sale="25" />
        </div>
        <div>
          <Cart sale="25" />
        </div>
        <div>
          <Cart sale="20" />
        </div>
        <div>
          <Cart sale="20" />
        </div>
        <div>
          <Cart sale="50" />
        </div>
        <div>
          <Cart sale="50" />
        </div>
        <div>
          <Cart sale="50" />
        </div>
        <div>
          <Cart sale="50" />
        </div>
        <div>
          <Cart sale="40" />
        </div>
        <div>
          <Cart sale="40" rating={3} />
        </div>
        <div>
          <Cart sale="40" rating={3.5} />
        </div>
      </Slider>
    </div>
  );
});
export default SalesSlider;
