import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import "./arrows.sass";

const ArrowLeft = () => {
  return (
    <>
      <div className="arrow-icon arrow-icon-back">
        <FaArrowLeft size={"2em"} />
      </div>
    </>
  );
};

export default ArrowLeft;
