import React from "react";
import pngMoneyBack from "../../../../assets/guarantee/safe.png";
import "./guarantee.sass";

const MoneyBack = () => {
  return (
    <div className="guarantee-card d-flex flex-column justify-content-center align-item-center">
      <img
        src={pngMoneyBack}
        className="rounded mx-auto d-block  m-4"
        alt="24/7 customer service"
      ></img>
      <div>
        <h2 className=" fs-4">Money back guarantee</h2>
        <div className="mx-auto fs-6">We return money within 30 days</div>
      </div>
    </div>
  );
};

export default MoneyBack;
