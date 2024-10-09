import { useEffect, useRef, useState } from "react";
import ContentTitle from "../../body/content-title/ContentTitle";
import SaleTimer from "../../body/sale-timer/SaleTimer";
import "../../content.sass";
import SalesSlider from "../SalesSlider";
import React from "react";
import ViewAllProduct from "../../button/ViewAllProduct";
import {
  getAllProduct,
  getProductPaging,
} from "../../../../service/apiService";
const SalesSliderContainer = () => {
  const ITEM_LIMIT = 6;
  const salesSliderRef = useRef();
  const [listProduct, setListProduct] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleFetchAllUser = async () => {
    let res = await getAllProduct();
    setListProduct(res.data);
    console.log(res.data);
  };
  const handlePreviousSlide = () => {
    let previousPage = currentPage - 1;
    if (previousPage === 0) {
      return;
    }
    setCurrentPage(previousPage);
    salesSliderRef?.current?.slickPrev();
  };
  const handleNextSlide = async () => {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    console.log(currentPage * ITEM_LIMIT, listProduct.length);
    if (
      currentPage * ITEM_LIMIT <= listProduct.length ||
      listProduct.length >= 100
    ) {
      salesSliderRef?.current?.slickNext();
      console.log(listProduct);

      return;
    }

    let res = await getProductPaging(nextPage, ITEM_LIMIT);
    let newList = [...listProduct, ...res.data];
    setListProduct(newList);
    salesSliderRef?.current?.slickNext();
    console.log(newList);
  };
  const handleFetchPagingProduct = async () => {
    let res = await getProductPaging(currentPage, ITEM_LIMIT);
    setListProduct(res.data);
  };
  useEffect(() => {
    handleFetchPagingProduct();
  }, []);
  return (
    <>
      <ContentTitle text={"Today's"} />
      <SaleTimer
        deadline={"December, 31, 2024"}
        title={"Flash Sales"}
        rightContent={true}
        btnPre={handlePreviousSlide}
        btnNext={handleNextSlide}
      />
      <div className="list-item-sale">
        <SalesSlider ref={salesSliderRef} listProduct={listProduct} />
      </div>
      <div className="btn-view" onClick={() => handleFetchAllUser()}>
        <ViewAllProduct text={"View all product"} />
      </div>
    </>
  );
};

export default SalesSliderContainer;
