import React from "react";
import pngCustomerService from "../../../assets/guarantee/customer-service.png";
import "./guarantee.sass";

const CustomerServiceBanner = () => {
  return (
    <div className="guarantee-card d-flex flex-column justify-content-center align-item-center">
      <img
        src={pngCustomerService}
        className="rounded mx-auto d-block m-4"
        alt="24/7 customer service"
      ></img>
      <div>
        <h2 className=" fs-4">24/7 Customer service</h2>
        <div className="mx-auto fs-6">Friendly 24/7 customer support</div>
      </div>
    </div>
  );
};

export default CustomerServiceBanner;
