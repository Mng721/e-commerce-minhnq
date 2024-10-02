import { useState } from "react";
import imgPng from "../../../assets/png-cart/bag-png-33922.png";
import "./cart.sass";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
const Cart = () => {
  const [newItem, setNewItem] = useState(false);
  const [sale, setSale] = useState("35");
  const [color, setColor] = useState("");
  const [hover, setHover] = useState("");
  const [inCart, setInCart] = useState("");
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [reviewCount, setReviewCount] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="cart-item-container">
      <div className="img-container">
        <img src={imgPng} alt="product-image"></img>
        {newItem && <div className="new-item item-tag">New</div>}
        {sale && <div className="sale-item item-tag">{sale}%</div>}
      </div>
      <div className="item-name">HAVIT HV-G92 Gamepad</div>
      {sale && (
        <div className="price-container">
          <div className="sale-price">$120</div>
          <div className="price">$160</div>
        </div>
      )}
      {sale && (
        <div className="review">
          <div className="review-star">
            <IoStar color="#FFAD33" />
            <IoStar color="#FFAD33" />
            <IoStar color="#FFAD33" />
            <IoStar color="#FFAD33" />
            <IoStarHalf color="#FFAD33" />
          </div>
          <div className="review-number">(88)</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
