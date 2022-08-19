import React, { useEffect } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Formik, ErrorMessage, Field } from "formik";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { useCookies } from "react-cookie";
import { getSession, login } from "../../store/actions/authAction";
import { NAVIGATION } from "../common/constant";
import { loginValidation } from "../common/validation";
import TextError from "../common/TextError";
const Login = ({ login, submitting }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const history = useHistory();
  let { Authorization } = getSession();
  useEffect(() => {
    if (Authorization) {
      history.push(NAVIGATION.DASHBOARD);
    }
  }, [history, Authorization]);
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    login(values, resetForm, history, setCookie, removeCookie);
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
              email: cookies.email || "",
              password: cookies.password || "",
              rememberMe: Boolean(cookies.rememberMe) || false,
            }}
            validationSchema={loginValidation}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="logo_box">
                  <img className="log_img" src={imageurl.Logo} alt="" />
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
                    <Field
                      type="text"
                      placeholder="Username Here"
                      className="form-control"
                      name="email"
                    />
                    <Icon icon="bxs:user" color="black" />
                  </div>
                  <ErrorMessage name="email" component={TextError} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="nazi">
                    <Field
                      type="password"
                      placeholder="Password Here"
                      className="form-control"
                      name="password"
                    />
                    <Icon icon="bxs:lock-alt" color="black" />
                  </div>
                  <ErrorMessage name="password" component={TextError} />{" "}
                </Form.Group>
                <div className="dplay mb-4">
                  <Field name="rememberMe">
                    {({ field }) => (
                      <div className="form-check">
                        <input
                          type="checkbox"
                          {...field}
                          checked={field.value}
                          className="form-check-input"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                    )}
                  </Field>

                  <Link to="/forgot-password" className="forgot_pass">
                    Forgot Password?
                  </Link>
                </div>
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
                    "Login"
                  )}
                </button>
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
    login: (payload, resetForm, history, setCookie, removeCookie) =>
      dispatch(login(payload, resetForm, history, setCookie, removeCookie)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
