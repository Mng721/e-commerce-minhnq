import React from "react";
import "./header.sass";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const text =
    "Summer sale for all swin suits and free express delivery - off 50%! ";
  return (
    <div className="top-header">
      <div className="text-promotion" style={{ textTransform: "capitalize" }}>
        {text}
        <Link className="shop-link">ShopNow</Link>
      </div>
      <DropdownButton id="dropdown-basic-button" title="English">
        <Dropdown.Item>Vietnamese</Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default TopHeader;
