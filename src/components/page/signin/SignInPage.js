import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import "./signinpage.sass";
import { Link, useNavigate } from "react-router-dom";
const SignInPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [userAccount, setUserAccount] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleShowHidePassword = () => {
    setShowPass(!showPass);
  };
  const handleSignIn = () => {
    console.log(`user:  ${userAccount}, password: ${userPassword}`);
    navigate("/");
  };
  return (
    <>
      <div>asdsadsadsad</div>
      <div className="signin-container d-flex flex-column">
        <h1>Sign in</h1>
        <p>Stay up date on your professional world</p>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email or Phone</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Email or Phone"
              value={userAccount}
              onChange={(event) => {
                setUserAccount(event.target.value);
              }}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="formGroupExampleInput2">Password</label>

            <InputGroup.Text className="p-0">
              <input
                type={showPass ? "text" : "password"}
                className="form-control"
                id="formGroupExampleInput2"
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
        </form>
        <Link to="/" className="forgot-password-link mt-2">
          Forgot password?
        </Link>
        <Button className="btn-login" onClick={handleSignIn}>
          Sign In
        </Button>
        <div className="separator">or</div>
        <Button className="btn-login-with">Sign In</Button>
      </div>
      <div className="mx-auto register-text ">
        New to shop?{" "}
        <Link to="/signup" className="link-to-register">
          Join now
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
