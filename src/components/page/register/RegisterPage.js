import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import "./registerpage.sass";
import { Link, useNavigate } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
const RegisterPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPassConfirm, setShowPassConfirm] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConFirmPassword] = useState("");
  const handleShowHidePassword = () => {
    setShowPass(!showPass);
  };

  const handleShowHidePasswordConfirm = () => {
    setShowPassConfirm(!showPassConfirm);
  };
  const handleRegister = () => {
    console.log(
      `user:  ${userEmail}, password: ${userPassword}, phone: ${phoneNumber}, name: ${userName}`
    );
    navigate("/");
  };
  return (
    <>
      <div className="signup-container d-flex flex-column">
        <h1>Sign Up</h1>
        <p>
          or{" "}
          <Link to="/signin" className="link-to-register">
            sign in to your account
          </Link>
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={userEmail}
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Phone</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone"
              value={phoneNumber}
              onChange={(event) => {
                setPhoneNumber(event.target.value);
              }}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="formGroupExampleInput2">Password</label>

            <InputGroup.Text className="p-0">
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                placeholder="Password"
                value={userPassword}
                onChange={(event) => {
                  setUserPassword(event.target.value);
                }}
              />
              <div
                onClick={handleShowHidePassword}
                className="px-2 text-primary show-hide-password"
              >
                {!showPass ? "show" : "hide"}
              </div>
            </InputGroup.Text>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Confirm password</label>

            <InputGroup.Text className="p-0">
              <input
                type={showPassConfirm ? "text" : "password"}
                className="form-control"
                placeholder="Confirm password"
                value={userConfirmPassword}
                onChange={(event) => {
                  setUserConFirmPassword(event.target.value);
                }}
              />
              <div
                onClick={handleShowHidePasswordConfirm}
                className="px-2 text-primary show-hide-password"
              >
                {!showPassConfirm ? "show" : "hide"}
              </div>
            </InputGroup.Text>
          </div>
        </form>
        <Button className="btn-login" onClick={handleRegister}>
          Sign In
        </Button>

        <div className="mx-auto login-text ">
          Already have an account?{" "}
          <Link to="/" className="link-to-register">
            Sign In
          </Link>
        </div>
        <div className="separator">or</div>
        <div className="login-with-facebook">
          <div className="icon-container">
            <BiLogoFacebook color="#4267b2" size={"1.5rem"} />
          </div>
          Login with Facebook
        </div>
        <div className="login-with-google">
          <div className="icon-container">
            <FcGoogle color="#4267b2" size={"1.5rem"} />
          </div>
          Login with Google
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
