import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
export const Login = () => {
  return (
    <div>
      <div className="login_panel">
        <div className="side_img">
          <img src={imageurl.Banner} alt="" />
        </div>
        <div className="login_form">
          <Form>
            <div className="logo_box">
              <img
                className="log_img"
                src={imageurl.Logo}
            
                alt=""
              />
            </div>
            <div className="title_box">
              <h5>Welcome</h5>
              <p className="para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.
              </p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <div className="nazi">
                <Form.Control type="email" placeholder="Username Here" />
                <Icon icon="bxs:user" color="black" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="nazi">
                <Form.Control type="password" placeholder="Password Here" />
                <Icon icon="bxs:lock-alt" color="black" />
              </div>
            </Form.Group>
            <div className="dplay mb-4">
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Link to="/forgotpassword" className="forgot_pass">
                Forgot Password?
              </Link>
            </div>
            {/* <button className="sign_btn d-block">Sign in</button> */}
            <Link to="/dashboard" className="sign_btn d-block">
              Login
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};
