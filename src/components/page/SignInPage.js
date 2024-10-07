import React, { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import "./signinpage.sass";
import { Link } from "react-router-dom";
const SignInPage = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowHidePassword = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <div>asdsadsadsad</div>
      <div className="signin-container d-flex flex-column">
        <h1>Sign in</h1>
        <p>Stay up date on your professional world</p>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Email or phone</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div class="form-group mt-2">
            <label for="formGroupExampleInput2">Password</label>

            <InputGroup.Text className="p-0">
              <input
                type={showPass ? "text" : "password"}
                class="form-control"
                id="formGroupExampleInput2"
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
        <Button className="btn-login">Sign In</Button>
        <div class="separator">or</div>
        <Button className="btn-login-with">Sign In</Button>
      </div>
      <div className="mx-auto register-text ">
        New to shop?
        <Link to="/" className="link-to-register fw-7">
          Join now
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
