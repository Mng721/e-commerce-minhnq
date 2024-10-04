import imgPng from "../../../assets/png-cart/bag-png-33922.png";
import "./cart.sass";
import { Rating } from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
const Cart = () => {
  const newItem = false;
  const sale = "35";
  const color = "";
  const price = "160$";
  const salePrice = "120$";
  return (
    <div className="cart-item-container mx-auto">
      <div className="img-container">
        <img src={imgPng} alt="product-image"></img>
        {newItem && <div className="new-item item-tag">New</div>}
        {sale && <div className="sale-item item-tag">{sale}%</div>}
        <div className="add-to-card-text">Add to card</div>
        <div className="product-icon-container d-flex flex-column gap-2">
          <div className="product-icon favorite-icon">
            <MdFavoriteBorder />
          </div>
          <div className="product-icon eye-icon">
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <div className="item-name">HAVIT HV-G92 Gamepad</div>
      {sale && (
        <div className="price-container">
          <div className="sale-price">{salePrice}</div>
          <div className="price">{price}</div>
        </div>
      )}
      {sale && (
        <div className="review">
          <div className="review-star d-flex flex-row align-item-center">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </div>
          <div className="review-number">(88)</div>
        </div>
      )}
      {!sale && (
        <div className="not-on-sale">
          <div className="price-and-stars d-flex flex-row">
            <div className="price">{price}</div>
            <div className="review-star">
              <Rating
                name="half-rating-read"
                defaultValue={2.5}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="review-number">(88)</div>
          </div>
          {color && <div></div>}
        </div>
      )}
    </div>
  );
};

export default Cart;
