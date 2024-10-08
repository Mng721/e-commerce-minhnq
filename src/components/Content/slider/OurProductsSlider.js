import React, { forwardRef } from "react";
import Cart from "../cart/Cart";
import Slider from "react-slick";
import "./slider.sass";

const OurProductsSlider = forwardRef((props, ref) => {
  const listColor = ["#000", "#ccc"];
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   slidesToShow: 2.5,
  //   arrow: false,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 2,
  //   slidesToScroll: 0.5,
  //   swipeToSlide: true,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: 2 } },
  //     { breakpoint: 600, settings: { slidesToShow: 1.5 } },
  //   ],
  // };
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,

    initialSlide: 0,
    rows: 2,
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
  };
  return (
    <div className="slider-container">
      <Slider {...settings} ref={ref}>
        <div>
          <Cart />
        </div>
        <div>
          <Cart reviewCount={1000} rating={3.5} />
        </div>
        <div>
          <Cart reviewCount={200} rating={4.2} sale={30} />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart sale={"20"} />
        </div>
        <div>
          <Cart newItem={true} />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart sale={"50"} rating={3.5} />
        </div>
        <div>
          <Cart listColor={["#cf639e", "#6b63cf", "#3c3a5a"]} />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart newItem={true} />
        </div>
        <div>
          <Cart newItem={true} />
        </div>
        <div>
          <Cart listColor={listColor} />
        </div>
        <div>
          <Cart
            listColor={["#7dcf63", "#cfb063", "#b363cf"]}
            newItem={true}
            rating={5}
          />
        </div>
        <div>
          <Cart newItem={true} />
        </div>
        <div>
          <Cart />
        </div>
        <div>
          <Cart
            listColor={["#3a5a3a", "#a9bba9", "#aec251"]}
            newItem={true}
            rating={5}
            reviewCount={1}
          />
        </div>
        <div>
          <Cart
            sale={"40"}
            listColor={["#54c251", "#51bbc2", "#62638d", "#a74d88"]}
          />
        </div>
        <div>
          <Cart reviewCount={100} rating={4} />
        </div>
        <div>
          <Cart newItem={true} reviewCount={10} rating={4} />
        </div>
      </Slider>
    </div>
  );
});

export default OurProductsSlider;
