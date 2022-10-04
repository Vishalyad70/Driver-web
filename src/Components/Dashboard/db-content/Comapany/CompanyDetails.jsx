import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { SearchbarFilter } from "../../../../Shared/SearchbarFilter";
import { Filter } from "../../../../Shared/Filter";
import { DriverComplaint } from "./DriverComplaint";
import { DriverStatus } from "./DriverStatus";
import { Row, Col, Form } from "react-bootstrap";
import imageurl from "../../../common/images";
import { connect } from "react-redux";
import SiteLoader from "../../../SiteLoader/SiteLoader";
import {
  getCarPlateList,
  getCompanyDetail,
  getComplaints,
} from "../../../../store/actions/companyAction";
import {
  RESET_CAR_PLATE_LIST,
  RESET_COMPANY_DETAIL,
  RESET_COMPLAINT_LIST,
  RESET_DRIVER_LIST,
} from "../../../../store/common/types";
import { getDrivers } from "../../../../store/actions/driverAction";
import { CarPlateTable } from "./CarPlateTable";
import Paginate from "../../../../Shared/Paginate/Paginate";
import CalenderFilter from "../../../../Shared/CalenderFilter";

const CompanyDetails = ({
  getCompanyDetail,
  resetDetail,
  loading,
  company_details,
  drivers,
  driver_loading,
  getDrivers,
  complaint_loading,
  complaints,
  car_plate_loading,
  car_plates,
  getComplaints,
  getCarPlateList,
  currentPage,
  per_page,
  total_record,
  currentPage1,
  per_page1,
  total_record1,
  currentPage2,
  per_page2,
  total_record2,
}) => {
  const [isCheck, setIsCheck] = useState([]);
  const [isCheck2, setIsCheck2] = useState([]);
  const [isCheck3, setIsCheck3] = useState([]);
  const { companyId } = useParams();
  const [searchOne, setSearchOne] = useState(null);
  const [searchTwo, setSearchTwo] = useState(null);
  const [searchThree, setSearchThree] = useState(null);
  const [datesOne, setDatesOne] = useState([]);
  const [datesTwo, setDatesTwo] = useState([]);
  const [datesThree, setDatesThree] = useState([]);

  useEffect(() => {
    getCompanyDetail(companyId);
    getComplaints({
      company_id: companyId,
      search: "",
      from_date: "",
      to_date: "",
    });
    getDrivers({
      company_id: companyId,
      search: "",
      from_date: "",
      to_date: "",
    });
    getCarPlateList({
      company_id: companyId,
      search: "",
      from_date: "",
      to_date: "",
    });
    return () => resetDetail();
  }, [getCompanyDetail, getDrivers, companyId, resetDetail]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchOne || searchOne !== null) {
        getComplaints({
          company_id: companyId,
          search: searchOne,
          from_date: "",
          to_date: "",
        });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchOne, getComplaints, companyId]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTwo || searchTwo !== null) {
        getDrivers({
          company_id: companyId,
          search: searchTwo,
          from_date: "",
          to_date: "",
        });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTwo, getDrivers, companyId]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchThree || searchThree !== null) {
        getCarPlateList({
          company_id: companyId,
          search: searchThree,
          from_date: "",
          to_date: "",
        });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchThree, getCarPlateList, companyId]);

  const handleSelect1 = (array) => {
    let range = array.join(",").split(",");
    setDatesOne([...range]);

    if (range.length === 2) {
      getComplaints({
        company_id: companyId,
        search: searchOne ? searchOne : "",
        from_date: range[0],
        to_date: range[1],
      });
    }
  };
  const handleSelect2 = (array) => {
    let range = array.join(",").split(",");
    setDatesTwo([...range]);

    if (range.length === 2) {
      getDrivers({
        company_id: companyId,
        search: searchTwo ? searchTwo : "",
        from_date: range[0],
        to_date: range[1],
      });
    }
  };
  const handleSelect3 = (array) => {
    let range = array.join(",").split(",");
    setDatesThree([...range]);

    if (range.length === 2) {
      getCarPlateList({
        company_id: companyId,
        search: searchThree ? searchThree : "",
        from_date: range[0],
        to_date: range[1],
      });
    }
  };

  const handlePageClick1 = ({ selected: page }) => {
    getComplaints(
      {
        company_id: companyId,
        search: searchOne ? searchOne : "",
        from_date: "",
        to_date: "",
      },
      page + 1
    );
  };
  const handlePageClick2 = ({ selected: page }) => {
    getDrivers(
      {
        company_id: companyId,
        search: searchTwo ? searchTwo : "",
        from_date: "",
        to_date: "",
      },
      page + 1
    );
  };
  const handlePageClick3 = ({ selected: page }) => {
    getCarPlateList(
      {
        company_id: companyId,
        search: searchThree ? searchThree : "",
        from_date: "",
        to_date: "",
      },
      page + 1
    );
  };
  return (
    <div>
      {loading || driver_loading || car_plate_loading || complaint_loading ? (
        <SiteLoader />
      ) : null}
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
                    <Form.Label>Total Allowed Plate Numbers</Form.Label>
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
                      value={company_details.total_complaints}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Drivers</Form.Label>
                    <Form.Control
                      type="number"
                      className="up_input"
                      placeholder="29"
                      disabled
                      value={company_details.total_driver}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-4"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Car Plates Remaining</Form.Label>
                    <Form.Control
                      type="text"
                      className="up_input"
                      placeholder="45"
                      disabled
                      value={company_details.total_car_plats_available}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <h3>Complaints Table</h3>
          <div className="grey_open">
            <div className="view_box mb-2">
              <div className="web_status">
                <div
                  className="second d-flex w-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <SearchbarFilter
                    setSearch={setSearchOne}
                    search={searchOne}
                  />
                  <CalenderFilter
                    handleSelect={handleSelect1}
                    dates={datesOne}
                  />
                </div>
              </div>
            </div>
            <DriverComplaint
              complaints={complaints}
              setIsCheck={setIsCheck2}
              isCheck={isCheck2}
            />
            {complaints && complaints.length > 0 && (
              <div className="d-flex justify-content-between p-4">
                <div>
                  <h5>Total {total_record1} records</h5>
                </div>
                <Paginate
                  totalCounts={total_record1}
                  perPage={per_page1}
                  currentPage={currentPage1}
                  handlePageClick={handlePageClick1}
                />
              </div>
            )}
          </div>
          <h3>Driver Table </h3>
          <div className="grey_open">
            <div className="view_box mb-2">
              <div className="web_status">
                <div
                  className="second d-flex w-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <SearchbarFilter
                    setSearch={setSearchTwo}
                    search={searchTwo}
                  />
                  <CalenderFilter
                    handleSelect={handleSelect2}
                    dates={datesTwo}
                  />
                </div>
              </div>
            </div>
            <DriverStatus
              drivers={drivers}
              setIsCheck={setIsCheck}
              isCheck={isCheck}
            />
            {drivers && drivers.length > 0 && (
              <div className="d-flex justify-content-between p-4">
                <div>
                  <h5>Total {total_record2} records</h5>
                </div>
                <Paginate
                  totalCounts={total_record2}
                  perPage={per_page2}
                  currentPage={currentPage2}
                  handlePageClick={handlePageClick2}
                />
              </div>
            )}
          </div>
          <h3> Car Plate Table </h3>
          <div className="grey_open">
            <div className="view_box mb-2">
              <div className="web_status">
                <div
                  className="second d-flex w-100"
                  style={{ justifyContent: "space-between" }}
                >
                  <SearchbarFilter
                    setSearch={setSearchThree}
                    search={searchThree}
                  />
                  <CalenderFilter
                    handleSelect={handleSelect3}
                    dates={datesThree}
                  />
                </div>
              </div>
            </div>
            <CarPlateTable
              car_plates={car_plates}
              setIsCheck={setIsCheck2}
              isCheck={isCheck2}
            />
            {car_plates && car_plates.length > 0 && (
              <div className="d-flex justify-content-between p-4">
                <div>
                  <h5>Total {total_record} records</h5>
                </div>
                <Paginate
                  totalCounts={total_record}
                  perPage={per_page}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick3}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  company: { loading, company_details },
  driver: {
    loading: driver_loading,
    drivers,
    currentPage: currentPage2,
    per_page: per_page2,
    total_record: total_record2,
  },
  complaint: {
    loading: complaint_loading,
    complaints,
    currentPage: currentPage1,
    per_page: per_page1,
    total_record: total_record1,
  },
  car_plate: {
    loading: car_plate_loading,
    car_plates,
    currentPage,
    per_page,
    total_record,
  },
}) => {
  return {
    loading,
    company_details,
    drivers,
    driver_loading,
    complaint_loading,
    complaints,
    car_plate_loading,
    car_plates,
    currentPage,
    per_page,
    total_record,
    currentPage1,
    per_page1,
    total_record1,
    currentPage2,
    per_page2,
    total_record2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyDetail: (companyId) => dispatch(getCompanyDetail(companyId)),
    getDrivers: (companyId, page) => dispatch(getDrivers(companyId, page)),
    getComplaints: (companyId, page) =>
      dispatch(getComplaints(companyId, page)),
    getCarPlateList: (companyId, page) =>
      dispatch(getCarPlateList(companyId, page)),
    resetDetail: () => {
      dispatch({ type: RESET_DRIVER_LIST });
      dispatch({ type: RESET_COMPANY_DETAIL });
      dispatch({ type: RESET_CAR_PLATE_LIST });
      dispatch({ type: RESET_COMPLAINT_LIST });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CompanyDetails));
