import * as Yup from "yup";
export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("please enter valid email address")
    .required("email field is required")
    .label("email"),
  password: Yup.string()
    .required("password field is required")
    .label("password"),
});

export const forgotValidation = Yup.object().shape({
  email: Yup.string()
    .email("please enter valid email address")
    .required("email field is required")
    .label("Email"),
});

export const changePasswordValidation = Yup.object().shape({
  password: Yup.string()
    .required("Password is required.")
    .min(6, "Password must be at least 6 characters."),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

export const addCompanyValidation = Yup.object().shape({
  name: Yup.string().required().label("name"),
  username: Yup.string()
    .email("please enter valid email address")
    .required()
    .label("username"),
  company_image: Yup.string().optional().label("company image"),
  total_numbar_plate: Yup.number().required().label("no. of plate"),
  password: Yup.string().required().label("temporary password"),
});
export const editCompanyValidation = Yup.object().shape({
  name: Yup.string().required().label("name"),
  username: Yup.string()
    .email("please enter valid email address")
    .required()
    .label("username"),
  company_image: Yup.string().optional().label("company image"),
  total_numbar_plate: Yup.number().required().label("no. of plate"),
  // password: Yup.string().required().label("temporary password"),
});
