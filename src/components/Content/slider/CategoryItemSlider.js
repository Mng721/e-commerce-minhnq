import React, { forwardRef } from "react";
import CategoryItem from "../category/CategoryItem";
import Slider from "react-slick";

import "./slider.sass";
const CategoryItemSlider = forwardRef((props, ref) => {
  const { listCategoryItem } = props;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    swipeToSlide: true,
    arrows: false,
  };
  return (
    <div>
      <div className="best-selling-slider-container">
        <Slider {...settings} ref={ref}>
          {listCategoryItem.map((item, index) => {
            return <CategoryItem item={item} key={`slide-${index + 1}`} />;
          })}
        </Slider>
      </div>
    </div>
  );
});

export default CategoryItemSlider;
