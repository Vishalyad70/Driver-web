import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { MailverifyLink } from "../modal/MailverifyLink";
import { useDispatch, useSelector } from "react-redux";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { forgotPassword } from "../../store/actions/authAction";
import { forgotValidation } from "../common/validation";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../common/TextError";
const ForgotPassword = () => {
  const [show, setShow] = useState(false);
  const submitting = useSelector((state) => state.form.submitting);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    setSubmitting(false);
    dispatch(forgotPassword(values, setShow, resetForm));
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
              email: "",
            }}
            validationSchema={forgotValidation}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
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
                    <Field
                      type="text"
                      name="email"
                      placeholder="Username here"
                      className="form-control"
                    />
                    <Icon icon="bxs:user" color="black" />
                  </div>
                  <ErrorMessage name="email" component={TextError} />
                </Form.Group>

                <button
                  type="submit"
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
                    "Send"
                  )}
                </button>
                <MailverifyLink show={show} onHide={() => setShow(false)} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );  
};

export default ForgotPassword;
