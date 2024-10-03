import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./arrows.sass";

const ArrowUp = () => {
  return (
    <>
      <div className="arrow-icon arrow-icon-up">
        <FaArrowUp size={"2em"} />
      </div>
    </>
  );
};

export default ArrowUp;
