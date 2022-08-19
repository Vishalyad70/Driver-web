import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { SuccessMessge } from "../modal/SuccessMessge";
import { changePassword } from "../../store/actions/authAction";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Formik, ErrorMessage, Field } from "formik";
import { changePasswordValidation } from "../common/validation";
import TextError from "../common/TextError";

const ResetPassword = ({ changePassword, submitting }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const { token } = useParams();
  const handleSubmit = (values, { setSubmitting }) => {
    let email = localStorage.getItem("reset_email");
    changePassword({ email, token, ...values }, history);
    setSubmitting(false);
  };
  return (
    <div>
      <div className="login_panel">
        <div className="side_img">
          <img src={imageurl.Banner} alt="" />
        </div>
        <div className="login_form">
          <Formik
            initialValues={{
              password: "",
              password_confirmation: "",
            }}
            validationSchema={changePasswordValidation}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="logo_box">
                  <img className="log_img" src={imageurl.Logo} alt="" />
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
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Password Here"
                      name="password"
                    />
                    <Icon icon="bxs:lock-alt" color="black" />
                  </div>
                  <ErrorMessage name="password" component={TextError} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm New Password</Form.Label>
                  <div className="nazi">
                    <Field
                      type="password"
                      className="form-control"
                      placeholder="Password Here"
                      name="password_confirmation"
                    />
                    <Icon icon="bxs:lock-alt" color="black" />
                  </div>
                  <ErrorMessage
                    name="password_confirmation"
                    component={TextError}
                  />
                </Form.Group>

                <button
                  className="sign_btn d-block w-100"
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
                    "Change Password"
                  )}
                </button>
                <SuccessMessge show={show} onHide={() => setShow(false)} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ form }) => {
  return {
    submitting: form.submitting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePassword: (payload, history) =>
      dispatch(changePassword(payload, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
