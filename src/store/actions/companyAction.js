import AXIOS, { setToken } from "../common/api_helper";
import { APIs } from "../common/constants";
import { NAVIGATION } from "../../Components/common/constant";
import {
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_LIST,
  FORM_SUBMITTING,
  RESET_FORM_SUBMITTING,
  SET_COMPANY_DETAIL,
  SET_COMPANY_LIST,
} from "../common/types";
import { toast } from "react-toastify";

export const addCompany = (payload, resetForm, history) => async (dispatch) => {
  try {
    setToken();
    let fd = new FormData();
    for (let key in payload) {
      fd.append(key, payload[key]);
    }
    dispatch({
      type: FORM_SUBMITTING,
    });
    const { data } = await AXIOS({
      method: "post",
      url: APIs.ADD_COMPANY,
      data: fd,
      headers: { "Content-Type": "multipart/form-data" },
    });
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });
    if (data.status) {
      toast.success(data.message);
      resetForm();
      history.push(NAVIGATION.COMPANY);
    } else {
      toast.error(data.message);
    }
  } catch (err) {
    dispatch({
      type: RESET_FORM_SUBMITTING,
    });
    toast.error(err.response.data.message);
  }
};

export const getCompanies = (payload) => async (dispatch) => {
  try {
    setToken();
    dispatch({ type: FETCH_COMPANY_LIST });
    const { data } = await AXIOS.get(APIs.GET_COMPANIES);

    if (data.status) {
      dispatch({
        type: SET_COMPANY_LIST,
        payload: data.record || [],
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_COMPANY_ERROR,
      payload: err,
    });
  }
};

export const getCompanyDetail = (companyId) => async (dispatch, getState) => {
  try {
    setToken();
    dispatch({ type: FETCH_COMPANY_LIST });
    const { data } = await AXIOS.get(`${APIs.GET_COMPANY_DETAIL}/${companyId}`);
    if (data.status) {
      dispatch({
        type: SET_COMPANY_DETAIL,
        payload: data.record || {},
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_COMPANY_ERROR,
      payload: err,
    });
  }
};

export const deleteCompany = async (companyId) => {
  try {
    setToken();
    const { data } = await AXIOS.get(`${APIs.DELETE_COMPANY}/${companyId}`);
    if (data.status) {
      toast.success(data.message);
      return true;
    } else {
      toast.error(data.message);
      return false;
    }
  } catch (err) {
    toast.error(err.message);
  }
};
