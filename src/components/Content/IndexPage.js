import Sidebar from "./Sidebar";
import Slider from "./Slider";
import "./content.sass";

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
    </>
  );
};

export default IndexPage;
