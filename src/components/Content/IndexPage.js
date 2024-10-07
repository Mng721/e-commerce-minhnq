import Sidebar from "./Sidebar";
import Slider from "./slider/Slider";
import ContentTitle from "./body/content-title/ContentTitle";
import "./content.sass";
import SaleTimer from "./body/sale-timer/SaleTimer";
import ViewAllProduct from "./button/ViewAllProduct";
import BestSellingSlider from "./slider/BestSellingSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBanner from "./product/ProductBanner";
import { Link } from "react-router-dom";
import GuaranteeBanner from "./body/guarantee/GuaranteeBanner";
import CustomerServiceBanner from "./body/guarantee/CustomerServiceBanner";
import MoneyBack from "./body/guarantee/MoneyBack";
import ArrowUp from "./arrows/ArrowUp";
import FooterContent from "../footer/FooterContent";
import CategoryItemSliderContainer from "./slider/categoryitem/CategoryItemSliderContainer";
import OurProductContainer from "./slider/categoryitem/OurProductContainer";
import SalesSliderContainer from "./slider/categoryitem/SalesSliderContainer";
import ps5Img from "../../assets/product/ps5.png";
import perfumeImg from "../../assets/product/perfume.png";
import speakerImg from "../../assets/product/speaker.png";
import gucciPerfumeImg from "../../assets/product/gucci-perfume.png";
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
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="first-column">
                <img src={ps5Img} alt="ps5-img" />

                <div>
                  <h1>PlayStation 5</h1>
                  <p>Black and White version of the PS5 coming out on sale</p>.
                  <Link to={""}>Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 second-column d-flex flex-column gap-4">
              <div className="row row-1-column-2 h-50">
                <div className="top-right-banner">
                  <img src={perfumeImg} alt="perfume-img" />

                  <div>
                    <h1>Woman's collection</h1>
                    <p>Black and White version of the PS5 coming out on sale</p>
                    .<Link to={""}>Shop Now</Link>
                  </div>
                </div>
              </div>
              <div className="row row-2-column-2 h-50  d-flex flex-row gap-4 flex-nowrap">
                <div className="col-md-6 h-100">
                  <div className="first-column-bottom-right">
                    <img src={speakerImg} alt="speaker-img" />

                    <div>
                      <h1>Speakers</h1>
                      <p>Amazon wireless speaker</p>.
                      <Link to={""}>Shop Now</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 h-100">
                  <div className="second-column-bottom-right">
                    <img src={gucciPerfumeImg} alt="gucci-perfume-img" />

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
