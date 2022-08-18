import React,{useState} from "react";
import { Form } from "react-bootstrap";

import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { SuccessMessge } from "../modal/SuccessMessge";
export const Resetpassword = () => {
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
              <img
                className="log_img"
                src={imageurl.Logo}
            
                alt=""
              />
            </div>
            <div className="title_box">
              <h5>Reset Password</h5>
              <p className="para">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown.
              </p>
            </div>
            

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <div className="nazi">
                <Form.Control type="password" placeholder="Password Here" />
                <Icon icon="bxs:lock-alt" color="black" />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm New Password</Form.Label>
              <div className="nazi">
                <Form.Control type="password" placeholder="Password Here" />
                <Icon icon="bxs:lock-alt" color="black" />
              </div>
            </Form.Group>
            
            {/* <button className="sign_btn d-block">Reset Password</button> */}
            <button type="button" className="sign_btn d-block w-100" onClick={()=>setShow(true)}>Change Password</button>
            <SuccessMessge show={show} onHide={() => setShow(false)}/>
          </Form>
        </div>
      </div>
    </div>
  );
};
