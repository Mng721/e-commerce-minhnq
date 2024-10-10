import Sidebar from "../Content/Sidebar";
import Slider from "../Content/slider/Slider";
import ContentTitle from "../Content/body/content-title/ContentTitle";
import "../Content/content.sass";
import SaleTimer from "../Content/body/sale-timer/SaleTimer";
import ViewAllProduct from "../Content/button/ViewAllProduct";
import BestSellingSlider from "../Content/slider/BestSellingSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductBanner from "../Content/product/ProductBanner";
import { Link } from "react-router-dom";
import GuaranteeBanner from "../Content/body/guarantee/GuaranteeBanner";
import CustomerServiceBanner from "../Content/body/guarantee/CustomerServiceBanner";
import MoneyBack from "../Content/body/guarantee/MoneyBack";
import ArrowUp from "../Content/arrows/ArrowUp";
import FooterContent from "../footer/FooterContent";
import CategoryItemSliderContainer from "../Content/slider/slidercontainer/CategoryItemSliderContainer";
import OurProductContainer from "../Content/slider/slidercontainer/OurProductContainer";
import SalesSliderContainer from "../Content/slider/slidercontainer/SalesSliderContainer";
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
          <div className="first-column">
            <img src={ps5Img} alt="ps5-img" />
            <div>
              <h1>PlayStation 5</h1>
              <p>Black and White version of the PS5 coming out on sale</p>.
              <Link to={""}>Shop Now</Link>
            </div>
          </div>
          <div className="second-column">
            <div className="top-right-banner">
              <img src={perfumeImg} alt="perfume-img" />

              <div>
                <h1>Woman's collection</h1>
                <p>Black and White version of the PS5 coming out on sale</p>.
                <Link to={""}>Shop Now</Link>
              </div>
            </div>
            <div className="bottom-right-banner">
              <div className="first-column-bottom">
                <img src={speakerImg} alt="speaker-img" />

                <div>
                  <h1>Speakers</h1>
                  <p>Amazon wireless speaker</p>.<Link to={""}>Shop Now</Link>
                </div>
              </div>
              <div className="second-column-bottom">
                <img src={gucciPerfumeImg} alt="gucci-perfume-img" />

                <div>
                  <h1>Perfume</h1>
                  <p>Gucci intense</p>.<Link to={""}>Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="guarantee-banner ">
          <div className="container d-flex flex-row justify-content-around w-100 flex-wrap">
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
