import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Searchbar } from "../../../../Shared/Searchbar";
import { Filter } from "../../../../Shared/Filter";
import { DriverComplaint } from "./DriverComplaint";
import { DriverStatus } from "./DriverStatus";
import { Row, Col, Form } from "react-bootstrap";
import imageurl from "../../../common/images";
import { connect } from "react-redux";
import SiteLoader from "../../../SiteLoader/SiteLoader";
import { getCompanyDetail } from "../../../../store/actions/companyAction";
import {
  RESET_COMPANY_DETAIL,
  RESET_DRIVER_LIST,
} from "../../../../store/common/types";
import { getDrivers } from "../../../../store/actions/driverAction";

const CompanyDetails = ({
  getCompanyDetail,
  resetDetail,
  loading,
  company_details,
  drivers,
  driver_loading,
  getDrivers,
}) => {
  const [isCheck, setIsCheck] = useState([]);
  const { companyId } = useParams();
  useEffect(() => {
    getCompanyDetail(companyId);
    getDrivers(companyId);
    return () => resetDetail();
  }, [getCompanyDetail, getDrivers, companyId, resetDetail]);
  return (
    <div>
      {loading || driver_loading ? <SiteLoader /> : null}
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
              <span>Company Details</span>
            </h5>
          </Link>
        </div>
      </div>
      <div className="white_box">
        <div className="open_nas add_company">
          <Row>
            <Col lg={6}>
              <img
                className="com_pixc"
                src={
                  company_details.company_image
                    ? company_details.company_image
                    : imageurl.Banner
                }
                alt=""
              />
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={6}>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="up_input"
                      placeholder="XYZ"
                      disabled
                      value={company_details.name}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Company Username</Form.Label>
                    <Form.Control
                      type="text"
                      className="up_input"
                      placeholder="Xyz@gmail.com"
                      disabled
                      value={company_details.username}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Plate Numbers</Form.Label>
                    <Form.Control
                      type="text"
                      className="up_input"
                      placeholder="45"
                      disabled
                      value={company_details.total_numbar_plate}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Complaints</Form.Label>
                    <Form.Control
                      type="number"
                      className="up_input"
                      placeholder="29"
                      disabled
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Complaints</Form.Label>
                    <Form.Control
                      type="number"
                      className="up_input"
                      placeholder="29"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="grey_open">
            <div className="view_box mb-2">
              <div className="web_status">
                <div
                  className="second d-flex w-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <Searchbar />
                  <Filter />
                </div>
              </div>
            </div>
            <DriverComplaint />
          </div>
          <div className="grey_open">
            <div className="view_box mb-2">
              <div className="web_status">
                <div
                  className="second d-flex w-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <Searchbar />
                  <Filter />
                </div>
              </div>
            </div>
            <DriverStatus
              drivers={drivers}
              setIsCheck={setIsCheck}
              isCheck={isCheck}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  company: { loading, company_details },
  driver: { loading: driver_loading, drivers },
}) => {
  return {
    loading,
    company_details,
    drivers,
    driver_loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyDetail: (companyId) => dispatch(getCompanyDetail(companyId)),
    getDrivers: (companyId) => dispatch(getDrivers(companyId)),
    resetDetail: () => {
      dispatch({ type: RESET_DRIVER_LIST });
      dispatch({ type: RESET_COMPANY_DETAIL });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyDetails));
