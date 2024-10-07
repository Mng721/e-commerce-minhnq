import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./arrows.sass";

const ArrowUp = () => {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {backToTop && (
        <div className="arrow-icon arrow-icon-up" onClick={scrollToTop}>
          <FaArrowUp size={"2em"} />
        </div>
      )}
    </>
  );
};

export default ArrowUp;
