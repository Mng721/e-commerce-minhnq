import React from "react";
import CategoryItem from "../category/CategoryItem";
import Slider from "react-slick";

import "./slider.sass";
const CategoryItemSlider = (props) => {
  const { listCategoryItem } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div>
      <div className="best-selling-slider-container">
        <Slider {...settings}>
          {listCategoryItem.map((item) => {
            return <CategoryItem item={item} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryItemSlider;
