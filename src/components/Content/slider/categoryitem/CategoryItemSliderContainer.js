import React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import CategoryItemSlider from "../CategoryItemSlider";
import { useRef } from "react";
import ContentTitle from "../../content-title/ContentTitle";
import SaleTimer from "../../sale-timer/SaleTimer";
import "../../content.sass";
import { Button } from "react-bootstrap";

const CategoryItemSliderContainer = () => {
  let categorySliderRef = useRef();
  const handlePreviousSlide = () => {
    categorySliderRef?.current?.slickPrev();
  };
  const handleNextSlide = () => {
    categorySliderRef?.current?.slickNext();
  };
  let listCategoryItem = [
    {
      icon: <IoIosPhonePortrait size={"2em"} />,
      text: "Phones",
    },
    {
      icon: <HiOutlineComputerDesktop size={"2em"} />,
      text: "Computers",
    },
    {
      icon: <BsSmartwatch size={"2em"} />,
      text: "Smartwatchs",
    },
    {
      icon: <IoCameraOutline size={"2em"} />,
      text: "Cameras",
    },
    {
      icon: <FiHeadphones size={"2em"} />,
      text: "Headphone",
    },
    {
      icon: <SiYoutubegaming size={"2em"} />,
      text: "Gaming",
    },
    {
      icon: <SiYoutubegaming size={"2em"} />,
      text: "Gaming",
    },
    {
      icon: <SiYoutubegaming size={"2em"} />,
      text: "Gaming",
    },
    {
      icon: <SiYoutubegaming size={"2em"} />,
      text: "Gaming",
    },
  ];
  return (
    <>
      <ContentTitle text={"Categoty"} className="category-title" />
      <SaleTimer
        title={"Browse By Category"}
        rightContent={true}
        btnPre={handlePreviousSlide}
        btnNext={handleNextSlide}
      />
      <div className="list-category-item">
        <CategoryItemSlider
          listCategoryItem={listCategoryItem}
          ref={categorySliderRef}
        />
      </div>
    </>
  );
};

export default CategoryItemSliderContainer;
