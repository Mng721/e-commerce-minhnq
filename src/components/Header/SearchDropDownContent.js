import React from "react";
import SearchDropDownItem from "./SearchDropDownItem";
import InfiniteScroll from "react-infinite-scroll-component";

const SearchDropDownContent = (props) => {
  const { listSearchProduct, open, fetchMoreItem, hasMore } = props;

  return (
    <div
      className={`search-dropdown-content ${
        open ? "search-dropdown-open" : null
      } d-flex flex-column gap-1`}
      id="scrollableDiv"
    >
      {listSearchProduct.length > 0 ? (
        <InfiniteScroll
          dataLength={listSearchProduct.length} //This is important field to render the next data
          next={fetchMoreItem}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {listSearchProduct.map((item, index) => {
            return (
              <SearchDropDownItem item={item} key={`search-item-${index}`} />
            );
          })}
        </InfiniteScroll>
      ) : (
        <div className=" d-flex align-items-center justify-content-start flex-row search-dropdown-error">
          No result found
        </div>
      )}
    </div>
  );
};

export default SearchDropDownContent;
