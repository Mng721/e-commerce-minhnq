import React, { useRef } from "react";
import ContentTitle from "../../body/content-title/ContentTitle";
import SaleTimer from "../../body/sale-timer/SaleTimer";
import "../../content.sass";
import OurProductsSlider from "../OurProductsSlider";
const OurProductContainer = () => {
  let ourProductRef = useRef();

  const handlePreviousSlide = () => {
    ourProductRef?.current?.slickPrev();
  };
  const handleNextSlide = () => {
    ourProductRef?.current?.slickNext();
  };
  return (
    <>
      <ContentTitle text={"Our Products"} />
      <SaleTimer
        title={"Explore our products"}
        rightContent={true}
        btnPre={handlePreviousSlide}
        btnNext={handleNextSlide}
      />

      <div className="list-our-product">
        <OurProductsSlider ref={ourProductRef} />
      </div>
    </>
  );
};

export default OurProductContainer;
