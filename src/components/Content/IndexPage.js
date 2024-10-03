import Sidebar from "./Sidebar";
import Slider from "./Slider";
import ContentTitle from "./content-title/ContentTitle";
import "./content.sass";
import SaleTimer from "./sale-timer/SaleTimer";
import ViewAllProduct from "./button/ViewAllProduct";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FiHeadphones } from "react-icons/fi";
import BestSellingSlider from "./slider/BestSellingSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryItemSlider from "./slider/CategoryItemSlider";
import SalesSlider from "./slider/SalesSlider";
import ProductBanner from "./product/ProductBanner";
import OurProductsSlider from "./slider/OurProductsSlider";
import { Link } from "react-router-dom";
import GuaranteeBanner from "./guarantee/GuaranteeBanner";
import CustomerServiceBanner from "./guarantee/CustomerServiceBanner";
import MoneyBack from "./guarantee/MoneyBack";
import ArrowUp from "./arrows/ArrowUp";

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
          <SalesSlider />
        </div>
        <div className="btn-view">
          <ViewAllProduct text={"View all product"} />
        </div>
        <hr />
        <ContentTitle text={"Categoty"} className="category-title" />
        <SaleTimer title={"Browse By Category"} />

        <div className="list-category-item">
          <CategoryItemSlider listCategoryItem={listCategoryItem} />
        </div>
        <hr></hr>
        <ContentTitle text={"This Month"} />
        <SaleTimer title={"Best selling products"} buttonText={"View all"} />
        <div className="list-best-selling-item">
          <BestSellingSlider />
        </div>
        <ProductBanner />
        <ContentTitle text={"Our Products"} />
        <SaleTimer title={"Explore our products"} />

        <div className="list-our-product">
          <OurProductsSlider />
        </div>

        <div className="btn-view">
          <ViewAllProduct text={"View all product"} />
        </div>
        <ContentTitle text={"Featured"} />
        <SaleTimer title={"new arrival"} leftDiable={true} />
        <div className="new-arrival-product">
          <div className="row">
            <div className="col-md-6">
              <div className="first-column">
                <div>
                  <h1>PlayStation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale</p>.
                  <Link to={""}>Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row row-1-column-2">
                <div className="top-right-banner">
                  <div>
                    <h1>Woman's collection</h1>
                    <p>Black and White version of the PS5 coming out on sale</p>
                    .<Link to={""}>Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="row row-2-column-2">
                <div className="col-md-6 pr-3">
                  <div className="first-column-bottom-right">
                    <div>
                      <h1>Speakers</h1>
                      <p>Amazon wireless speaker</p>.
                      <Link to={""}>Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-4">
                  <div className="second-column-bottom-right">
                    <div>
                      <h1>Perfume</h1>
                      <p>Gucci intense</p>.<Link to={""}>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guarantee-banner ">
          <div className="container d-flex flex-row justify-content-around w-100">
            <GuaranteeBanner />
            <CustomerServiceBanner />
            <MoneyBack />
          </div>
        </div>
      </div>
      <div className="foot-container">
        <div className="first-column">
          <h2 className="text-light">Exclusive</h2>
          <h3 className="text-light">Subcribe</h3>
          <p className="text-light">Get 10% of your first order</p>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
      </div>
      <span className="arrow-return-head">
        <ArrowUp />
      </span>
    </>
  );
};

export default IndexPage;
