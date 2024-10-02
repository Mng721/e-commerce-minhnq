import React from "react";
import "./content-title.sass";

const ContentTitle = (props) => {
  const { text } = props;
  return (
    <div className="content-title">
      <div className="border-box"></div>
      <div className="text">{text}</div>
    </div>
  );
};

export default ContentTitle;
