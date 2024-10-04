import Sidebar from "./Sidebar";
import Slider from "./Slider";
import ContentTitle from "./content-title/ContentTitle";
import "./content.sass";
import SaleTimer from "./sale-timer/SaleTimer";
import ViewAllProduct from "./button/ViewAllProduct";
import BestSellingSlider from "./slider/BestSellingSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBanner from "./product/ProductBanner";
import { Link } from "react-router-dom";
import GuaranteeBanner from "./guarantee/GuaranteeBanner";
import CustomerServiceBanner from "./guarantee/CustomerServiceBanner";
import MoneyBack from "./guarantee/MoneyBack";
import ArrowUp from "./arrows/ArrowUp";
import FooterContent from "./footer/FooterContent";
import CategoryItemSliderContainer from "./slider/categoryitem/CategoryItemSliderContainer";
import OurProductContainer from "./slider/categoryitem/OurProductContainer";
import SalesSliderContainer from "./slider/categoryitem/SalesSliderContainer";
const IndexPage = () => {
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
        <SalesSliderContainer />
        <div className="btn-view">
          <ViewAllProduct text={"View all product"} />
        </div>
        <hr />
        <CategoryItemSliderContainer />
        <hr></hr>
        <ContentTitle text={"This Month"} />
        <SaleTimer
          title={"Best selling products"}
          buttonText={"View all"}
          rightContent={true}
        />
        <div className="list-best-selling-item">
          <BestSellingSlider />
        </div>
        <ProductBanner />
        <OurProductContainer />

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
        <FooterContent />
      </div>
      <span className="arrow-return-head">
        <ArrowUp />
      </span>
    </>
  );
};

export default IndexPage;
