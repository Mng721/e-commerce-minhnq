import { useRef } from "react";
import ContentTitle from "../../content-title/ContentTitle";
import SaleTimer from "../../sale-timer/SaleTimer";
import "../../content.sass";
import SalesSlider from "../SalesSlider";
import React from "react";

const SalesSliderContainer = () => {
  const salesSliderRef = useRef();
  return (
    <>
      <ContentTitle text={"Today's"} />
      <SaleTimer
        deadline={"December, 31, 2024"}
        title={"Flash Sales"}
        rightContent={true}
      />
      <div className="list-item-sale">
        <SalesSlider ref={salesSliderRef} />
      </div>
    </>
  );
};

export default SalesSliderContainer;
