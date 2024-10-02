import Sidebar from "./Sidebar";
import Slider from "./Slider";
import Cart from "./cart/Cart";
import ContentTitle from "./content-title/ContentTitle";
import "./content.sass";
import SaleTimer from "./sale-timer/SaleTimer";
import ViewAllProduct from "./button/ViewAllProduct";
import CategoryItem from "./category/CategoryItem";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import { Button } from "react-bootstrap";

const IndexPage = () => {
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
      <div className="head-content">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="slider-container">
          <Slider />
        </div>
      </div>
      <div className="body-content">
        <ContentTitle text={"Today's"} />
        <SaleTimer deadline={"December, 31, 2024"} title={"Flash Sales"} />
        <div className="list-item-sale">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="btn-view">
          <ViewAllProduct text={"View all product"} />
        </div>
        <hr />
        <ContentTitle text={"Categoty"} className="category-title" />
        <SaleTimer title={"Browse By Category"} />
        <div className="list-category-item">
          {listCategoryItem.map((item) => {
            return <CategoryItem item={item} />;
          })}
        </div>
        <hr></hr>
        <ContentTitle text={"This Month"} />
        <SaleTimer title={"Best selling products"} buttonText={"View all"} />
        <div className="list-best-selling-item">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <div className="product-banner">
          <div className="product-banner-title">Categories</div>
          <div className="product-banner-slogan">
            Enhance your music experience
          </div>
          <Button className="product-banner-button">Buy now!</Button>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
