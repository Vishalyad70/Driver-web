import React ,{useState}from "react";
import { Form } from "react-bootstrap";
import {MailverifyLink} from "../modal/MailverifyLink"

import imageurl from "../common/images";
import { Icon } from "@iconify/react";
export const ForgotPassword = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="login_panel">
        <div className="side_img">
          <img src={imageurl.Banner} alt="" />
        </div>
        <div className="login_form">
          <Form>
            <div className="logo_box">
              <img className="log_img" src={imageurl.Logo} alt="" />
            </div>
            <div className="title_box">
              <h5>Forgot Password?</h5>
              <p className="para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.
              </p>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <div className="nazi">
                <Form.Control type="email" placeholder="Username here" disabled/>
                <Icon icon="bxs:user" color="black" />
              </div>
            </Form.Group>

            <button type="button" className="sign_btn d-block w-100" onClick={()=>setShow(true)}>Send</button>
            <MailverifyLink show={show} onHide={() => setShow(false)}/>
          </Form>
        </div>
      </div>
    </div>
  );
};
