import React from "react";
import "./button.sass";
import { Button } from "react-bootstrap";

const ViewAllProduct = (props) => {
  const { text } = props;
  return (
    <>
      <Button>{text}</Button>
    </>
  );
};

export default ViewAllProduct;
