import React from "react";
import "./category.sass";
const CategoryItem = (props) => {
  const { item } = props;
  return (
    <div className="category-item">
      <span className="category-icon">{item.icon}</span>
      <div className="dropdown-item-text">{item.text}</div>
    </div>
  );
};

export default CategoryItem;
