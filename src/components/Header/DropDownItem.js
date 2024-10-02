import React from "react";
import "../../App.sass";

const DropDownItem = (props) => {
  const { item } = props;
  return (
    <div className="dropdown-item">
      <span>{item.icon}</span>
      <div className="dropdown-item-text">{item.text}</div>
    </div>
  );
};

export default DropDownItem;
