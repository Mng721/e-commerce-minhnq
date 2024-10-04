import React, { useRef } from "react";
import ContentTitle from "../../content-title/ContentTitle";
import SaleTimer from "../../sale-timer/SaleTimer";
import "../../content.sass";
import OurProductsSlider from "../OurProductsSlider";
import { Button } from "react-bootstrap";
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
      <SaleTimer title={"Explore our products"} rightContent={true} />

      <div className="list-our-product">
        <OurProductsSlider ref={ourProductRef} />
      </div>
      <Button onClick={() => handlePreviousSlide()}>previous</Button>
      <Button onClick={() => handleNextSlide()}>next</Button>
    </>
  );
};

export default OurProductContainer;
