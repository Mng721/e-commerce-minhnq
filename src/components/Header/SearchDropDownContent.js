import React from "react";
import SearchDropDownItem from "./SearchDropDownItem";

const SearchDropDownContent = (props) => {
  const { listSearchProduct, open } = props;
  return (
    <div
      className={`search-dropdown-content ${
        open ? "search-dropdown-open" : null
      } d-flex flex-column gap-1`}
    >
      {console.log(listSearchProduct)}
      {listSearchProduct.map((item, index) => {
        return <SearchDropDownItem item={item} key={`search-item-${index}`} />;
      })}
    </div>
  );
};

export default SearchDropDownContent;
