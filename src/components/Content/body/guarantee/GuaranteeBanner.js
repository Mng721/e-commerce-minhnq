import React from "react";
import pngDelivery from "../../../../assets/guarantee/delivery.png";
import "./guarantee.sass";

const GuaranteeBanner = () => {
  return (
    <div className="guarantee-card d-flex flex-column justify-content-center align-item-center">
      <img
        src={pngDelivery}
        className="rounded mx-auto d-block m-4"
        alt="delevery"
      ></img>
      <div>
        <h2 className=" fs-4">FREE AND FAST DELIVERY</h2>
        <div className="mx-auto fs-6">
          Free delivery for all order over $140
        </div>
      </div>
    </div>
  );
};

export default GuaranteeBanner;
