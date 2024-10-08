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
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
