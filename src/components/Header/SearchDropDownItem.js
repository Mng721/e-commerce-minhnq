import React from "react";

const SearchDropDownItem = (props) => {
  const { item } = props;
  return (
    <div className="search-dropdown-item d-flex align-items-center justify-content-start flex-row ">
      <div>{item.name}</div>
    </div>
  );
};

export default SearchDropDownItem;
