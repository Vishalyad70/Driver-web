import AXIOS from "../common/api_helper";
import { APIs, COOKIE_EXPIRED } from "../common/constants";
import {
  FORM_SUBMITTING,
  FORM_SUCCESS,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  RESET_FORM_SUBMITTING,
  SIGNOUT_SUCCESS,
} from "../common/types";
import { toast } from "react-toastify";

export const login =
  (payload, resetForm, history, setCookie, removeCookie) =>
  async (dispatch) => {
    try {
      dispatch({
        type: FORM_SUBMITTING,
      });

      const { data } = await AXIOS.post(APIs.ADMIN_LOGIN, {
        ...payload,
        user_types: "4",
      });
      dispatch({
        type: FORM_SUCCESS,
      });
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      if (data.status) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            ...data.record,
          },
        });

        saveSession(data.record);

        if (payload.rememberMe) {
          setCookie("email", payload.email, {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
          setCookie("password", payload.password, {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
          setCookie("rememberMe", 1, {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
        } else {
          //if exist so remove
          removeCookie("email", {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
          removeCookie("password", {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
          removeCookie("rememberMe", {
            path: "/",
            maxAge: COOKIE_EXPIRED,
          });
        }
        toast.success(data.message);
        resetForm();
        history.push("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      dispatch({
        type: LOGIN_ERROR,
        payload: {
          error:
            err.response && err.response.data.message
              ? err.response.data.message
              : err.message,
        },
      });
      if (err.response && err.response.status === 401) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
    }
  };

export const saveSession = (data) => {
  localStorage.setItem("Authorization", data.authtoken);
  localStorage.setItem("id", data.id);
};

export const getSession = () => {
  return {
    Authorization: localStorage.getItem("Authorization"),
    user_id: localStorage.getItem("id"),
  };
};

export const clearSession = () => {
  localStorage.removeItem("Authorization");
  localStorage.removeItem("id");
};

export const forgotPassword =
  (payload, setShow, resetForm) => async (dispatch) => {
    try {
      dispatch({
        type: FORM_SUBMITTING,
      });
      const { data } = await AXIOS.post(APIs.FORGOT_PASSWORD, { ...payload });
      dispatch({
        type: FORM_SUCCESS,
      });
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      if (data.status) {
        localStorage.setItem("reset_email", payload.email);
        setShow(true);
        resetForm();
        // toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      dispatch({
        type: RESET_FORM_SUBMITTING,
      });
      if (
        err.response &&
        (err.response.status === 412 || err.response.status === 401)
      ) {
        toast.error(err.response.data.message);
      } else {
        toast.error(err.message);
      }
    }
  };

export const changePassword = (payload, history) => async (dispatch) => {
  try {
    dispatch({
      type: FORM_SUBMITTING,
    });
    const { data } = await AXIOS.post(APIs.CHANGE_PASSWORD, { ...payload });
    dispatch({
      type: FORM_SUCCESS,
    });
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });
    if (data.status) {
      localStorage.removeItem("reset_email");
      history.push("/");
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  } catch (err) {
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });

    if (
      err.response &&
      (err.response.status === 412 || err.response.status === 401)
    ) {
      toast.error(err.response.data.message);
    } else {
      toast.error(err.message);
    }
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({ type: SIGNOUT_SUCCESS });
  clearSession();
  toast.success("logout success fully.");
  history.push("/");
};
