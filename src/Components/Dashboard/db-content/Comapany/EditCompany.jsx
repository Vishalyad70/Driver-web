import React, { useState, useRef, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import imageurl from "../../../common/images";
import { Row, Col, Form, Spinner } from "react-bootstrap";
// import { generateRandom } from "../../../common/_helper";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../../../common/TextError";
import { editCompanyValidation } from "../../../common/validation";
import { connect } from "react-redux";
import {
  editCompany,
  getCompanyDetail,
} from "../../../../store/actions/companyAction";
import { RESET_COMPANY_DETAIL } from "../../../../store/common/types";
import SiteLoader from "../../../SiteLoader/SiteLoader";

const EditCompany = ({
  submitting,

  history,
  loading,
  company_details,
  getCompanyDetail,
  resetDetail,
  editCompany,
}) => {
  const logoRef = useRef(null);
  const [logo, setLogo] = useState(null);
  const { companyId } = useParams();

  useEffect(() => {
    getCompanyDetail(companyId);
    return () => resetDetail();
  }, [companyId, getCompanyDetail, resetDetail]);

  useEffect(() => {
    if (company_details.company_image) {
      setLogo(company_details.company_image);
    }
  }, [company_details]);

  const initialFormValues = {
    name: company_details.name || "",
    company_image: "",
    username: company_details.username || "",
    total_numbar_plate: company_details.total_numbar_plate || "",
    // password: generateRandom(10) || "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    editCompany(
      {
        ...values,
        company_id: company_details.id,
      },
      resetForm,
      history
    );
    setSubmitting(false);
  };

  const onLogoChange = (event, setFieldValue) => {
    const image = event.target.files[0];
    setFieldValue("company_image", image);
    let reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target.result);
    };
    reader.readAsDataURL(image);
  };

  return (
    <div>
      {loading ? <SiteLoader /> : null}
      <Formik
        enableReinitialize={true}
        initialValues={initialFormValues}
        validationSchema={editCompanyValidation}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <div className="view_box">
              <div
                className="web_status"
                style={{ justifyContent: "space-between" }}
              >
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
                    <span>Edit Company</span>
                  </h5>
                </Link>
                <div className="second d-flex">
                  <button
                    className="sign_btn add_com d-block"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : (
                      "Update"
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="open_nas add_company">
              <Row>
                <Col>
                  <div
                    className="company_img cursor"
                    onClick={() => logoRef.current.click()}
                  >
                    <img
                      src={logo ? logo : imageurl.upload}
                      alt=""
                      className={logo && "new_img"}
                    />
                  </div>
                  <input
                    type="file"
                    onChange={(e) => onLogoChange(e, setFieldValue)}
                    ref={logoRef}
                    hidden
                    accept="image/*"
                  />
                  <ErrorMessage name="company_image" component={TextError} />
                </Col>
              </Row>
              <Row>
                <Col lg={7}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>

                    <Field
                      placeholder="Name here"
                      type="text"
                      name="name"
                      className="form-control up_input"
                    />
                    <ErrorMessage name="name" component={TextError} />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Total Number Plate</Form.Label>
                    <Field
                      placeholder="Number plate"
                      type="number"
                      name="total_numbar_plate"
                      className="form-control up_input"
                    />
                    <ErrorMessage
                      name="total_numbar_plate"
                      component={TextError}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={7}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Username</Form.Label>
                    <Field
                      placeholder="Username here"
                      type="text"
                      name="username"
                      className="form-control up_input"
                    />
                    <ErrorMessage name="username" component={TextError} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    {/* <Form.Label>Password</Form.Label> */}

                    <Row>
                      {/* <Col lg={7}>
                        <Field
                          placeholder="Username here"
                          type="text"
                          name="password"
                          className="form-control up_input"
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </Col> */}
                      {/* <Col lg={5}>
                        <div
                          className="web_status mb-0"
                          style={{ height: "100%" }}
                        >
                          <div className="second d-flex">
                            <span
                              className="sign_btn add_com d-block cursor"
                              style={{ padding: "16px 20px" }}
                              onClick={() =>
                                setFieldValue("password", generateRandom(10))
                              }
                            >
                              Generate New Password
                            </span>
                          </div>
                        </div>
                      </Col> */}
                    </Row>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
const mapStateToProps = ({ form, company: { loading, company_details } }) => {
  return {
    submitting: form.submitting,
    loading,
    company_details,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCompanyDetail: (companyId) => dispatch(getCompanyDetail(companyId)),
    editCompany: (payload, resetForm, history) =>
      dispatch(editCompany(payload, resetForm, history)),
    resetDetail: () => {
      dispatch({ type: RESET_COMPANY_DETAIL });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditCompany));
