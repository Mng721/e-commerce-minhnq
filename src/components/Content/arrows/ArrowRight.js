import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import "./arrows.sass";

const ArrowRight = () => {
  return (
    <>
      <div className="arrow-icon arrow-icon-back">
        <FaArrowRight size={"2em"} />
      </div>
    </>
  );
};

export default ArrowRight;
