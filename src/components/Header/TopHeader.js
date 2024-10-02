import React from "react";
import "./header.sass";
import { DropdownButton, Dropdown } from "react-bootstrap";

const TopHeader = () => {
  const text =
    "Summer sale for all swin suits and free express delivery - off 50%! ";
  return (
    <div className="top-header">
      <div className="text-promotion" style={{ textTransform: "capitalize" }}>
        {text}
        <a className="shop-link">ShopNow</a>
      </div>
      <DropdownButton
        id="dropdown-basic-button"
        title="English"
      ></DropdownButton>
    </div>
  );
};

export default TopHeader;
