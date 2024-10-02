import { useState } from "react";
import { Image } from "react-bootstrap";
import { png } from "../../../assets/png-cart";

const cart = () => {
  const [newItem, setNewItem] = useState(false);
  const [sale, setSale] = useState(0);
  const [color, setColor] = useState("");
  const [hover, setHover] = useState("");
  const [inCart, setInCart] = useState("");
  return (
    <div className="cart-container">
      <Image src="png" />
      <div className="new-item">New</div>
      <div className="sale-item">-35%</div>
    </div>
  );
};
