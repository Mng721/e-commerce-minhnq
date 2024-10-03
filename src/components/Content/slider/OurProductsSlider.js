import React from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const OurProductsSlider = () => {
  //   const settings = {
  //     className: "center",
  //     centerMode: true,
  //     infinite: true,
  //     centerPadding: "60px",
  //     slidesToShow: 3,
  //     speed: 500,
  //     rows: 2,
  //     slidesPerRow: 2,
  //   };
  //   return (
  //     <div>
  //       <div className="best-selling-slider-container">
  //         <Slider {...settings}>
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //           <Cart />
  //         </Slider>
  //       </div>
  //     </div>
  //   );
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 2.5,
    variableWidth: true,
    arrow: false,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
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
};

export default OurProductsSlider;
