import React from "react";
import { withRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import imageurl from "../../../common/images";
import { Row, Col, Form } from "react-bootstrap";

const AddCompany = () => {
  return (
    <div>
      <div className="view_box">
        <div className="web_status" style={{ justifyContent: "space-between" }}>
          <Link to="/dashboard/company">
            <h5
              style={{
                fontSize: "18px",
                fontWeight: "400",
                alignItems: "center",
                color: "#000",
              }}
              className="mb-0 db_title d-flex"
            >
              <Icon icon="ep:arrow-left" color="black" />
              <span>Add Company</span>
            </h5>
          </Link>
          <div className="second d-flex">
            <button className="sign_btn add_com d-block">Save</button>
          </div>
        </div>
      </div>
      <div className="open_nas add_company">
        <Row>
          <Col>
            <div className="company_img">
              <img src={imageurl.upload} alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                className="up_input"
                placeholder="Name here"
              />
            </Form.Group>
          </Col>
          <Col lg={5}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Total Number Plate</Form.Label>
              <Form.Control
                type="number"
                className="up_input"
                placeholder="Number plate"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col lg={7}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                className="up_input"
                placeholder="Username here"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
             
              <Row>
                <Col lg={7}>
                <Form.Control
                type="password"
                className="up_input"
                placeholder="hduehdfeh"
              />
                </Col>
                <Col lg={5}>
            <div className="web_status mb-0" style={{height:"100%"}}>
              <div className="second d-flex">
                <button className="sign_btn add_com d-block" style={{padding:"16px 20px"}}>
                  Generate New Password
                </button>
              </div>
            </div>
          </Col>
              </Row>
            </Form.Group>
          </Col>
          
        </Row>
      </div>
    </div>
  );
};
export default withRouter(AddCompany);
