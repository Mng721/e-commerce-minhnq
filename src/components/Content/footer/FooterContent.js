import React from "react";
import qrCode from "../../../assets/footer/qr.png";
import appStoreImg from "../../../assets/footer/app-store.png";
import chPlayImg from "../../../assets/footer/google-play.png";
import "./footer.sass";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
const FooterContent = () => {
  return (
    <>
      <div className="footer-information d-flex flex-row justify-content-between">
        <div className="first-column">
          <h2 className="text-light">Exclusive</h2>
          <h4 className="text-light">Subcribe</h4>
          <p className="text-light">Get 10% of your first order</p>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="second-column">
          <h4 className="text-light pb-2">Support</h4>
          <p className="text-light">
            111 Bijoy sarani, Dhaka, HD 1515, Bangladesh.
          </p>
          <p className="text-light">exclusive@gmail.com</p>
          <p className="text-light">+888888-8888888-8888888</p>
        </div>
        <div className="third-column">
          <h4 className="text-light pb-2">Account</h4>
          <p className="text-light">Login / Register</p>
          <p className="text-light">Card</p>
          <p className="text-light">Wishlist</p>
          <p className="text-light">Shop</p>
        </div>
        <div className="forth-column">
          <h4 className="text-light pb-2">Quick link</h4>
          <p className="text-light">Privacy policy</p>
          <p className="text-light">Term Of Use</p>
          <p className="text-light">FAQ</p>
          <p className="text-light">Contact</p>
        </div>
        <div className="fifth-column">
          <h4 className="text-light pb-2">Download App</h4>
          <p>Save 3$ with App New User Only</p>
          <div className="img-info-container d-flex flex-row row">
            <div className="qr-code-img col-6">
              <img src={qrCode} alt="qr-code" />
            </div>
            <div className="appstore-chplay-code-img col-6">
              <div className="appstore-img-container">
                <img src={appStoreImg} alt="appstore-img" />
              </div>
              <div className="chplay-img-container">
                <img src={chPlayImg} alt="chplay-img" />
              </div>
            </div>
            <div className="information-icon-container d-flex flex-row gap-4 mt-3">
              <div className="information-icon facebook-icon">
                <FaFacebookF color="white" size={"1.5rem"} />
              </div>
              <div className="information-icon twitter-icon ">
                <LuTwitter color="white" size={"1.5rem"} />
              </div>
              <div className="information-icon instagram-icon">
                <FaInstagram color="white" size={"1.5rem"} />
              </div>
              <div className="information-icon linkedin-icon">
                <ImLinkedin2 color="white" size={"1.5rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContent;
