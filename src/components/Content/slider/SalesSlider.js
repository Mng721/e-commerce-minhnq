import React, { forwardRef } from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const SalesSlider = forwardRef((props, ref) => {
  const { listProduct } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
      {listProduct && (
        <Slider {...settings} ref={ref}>
          {listProduct.map((item, index) => {
            return (
              <div key={`sale-product-${index}`}>
                <Cart
                  name={item.name}
                  imgSrc={item.avatar}
                  price={item.price}
                />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
});
export default SalesSlider;
