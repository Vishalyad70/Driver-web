import AXIOS, { setToken } from "../common/api_helper";
import { APIs } from "../common/constants";
import { NAVIGATION } from "../../Components/common/constant";
import {
  FETCH_CAR_PLATE_ERROR,
  FETCH_CAR_PLATE_LIST,
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_LIST,
  FETCH_COMPLAINT_ERROR,
  FETCH_COMPLAINT_LIST,
  FETCH_RECENT_COMPANY_ERROR,
  FETCH_RECENT_COMPANY_LIST,
  FORM_SUBMITTING,
  RESET_FORM_SUBMITTING,
  SET_CAR_PLATE_LIST,
  SET_COMPANY_DETAIL,
  SET_COMPANY_LIST,
  SET_COMPLAINT_LIST,
  SET_DASHBOARD_COUNT,
  SET_RECENT_COMPANY_LIST,
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
export const editCompany =
  (payload, resetForm, history) => async (dispatch) => {
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
        url: APIs.EDIT_COMPANY,
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

export const getCompanies =
  (payload, page = 1) =>
  async (dispatch) => {
    try {
      setToken();
      dispatch({ type: FETCH_COMPANY_LIST });
      const { data } = await AXIOS.post(`${APIs.GET_COMPANIES}?page=${page}`, {
        ...payload,
      });

      if (data.status) {
        dispatch({
          type: SET_COMPANY_LIST,
          payload: data.record || [],
          pagination: {
            currentPage: data.currentPage || 1,
            per_page: data.per_page || 0,
            total_record: data.total_record || 0,
          },
        });
      } else {
        dispatch({
          type: SET_COMPANY_LIST,
          payload: [],
          pagination: {
            currentPage: 1,
            per_page: 0,
            total_record: 0,
          },
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

export const getDashboardCount = () => async (dispatch) => {
  try {
    setToken();
    const { data } = await AXIOS.get(APIs.GET_DASHBOARD_COUNT);

    if (data.status) {
      dispatch({
        type: SET_DASHBOARD_COUNT,
        payload: {
          total_plats: data.record.total_plats || 0,
          total_complaints: data.record.total_complaints || 0,
          total_driver: data.record.total_driver || 0,
          total_company: data.record.total_company || 0,
        },
      });
    }
  } catch (err) {
    toast.error(err.message);
  }
};

export const getRecentCompanies = (payload) => async (dispatch) => {
  try {
    setToken();
    dispatch({ type: FETCH_RECENT_COMPANY_LIST });
    const { data } = await AXIOS.get(APIs.GET_RECENT_COMPANY);

    if (data.status) {
      dispatch({
        type: SET_RECENT_COMPANY_LIST,
        payload: data.record || [],
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_RECENT_COMPANY_ERROR,
      payload: err,
    });
  }
};

export const getCarPlateList =
  (payload, page = 1) =>
  async (dispatch) => {
    try {
      setToken();
      dispatch({ type: FETCH_CAR_PLATE_LIST });
      const { data } = await AXIOS.post(
        `${APIs.GET_COMPANY_CARPLATE_LIST}?page=${page}`,
        { ...payload }
      );

      if (data.status) {
        dispatch({
          type: SET_CAR_PLATE_LIST,
          payload: data.record || [],
          pagination: {
            currentPage: data.currentPage || 1,
            per_page: data.per_page || 0,
            total_record: data.total_record || 0,
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
      dispatch({
        type: FETCH_CAR_PLATE_ERROR,
        payload: err,
      });
    }
  };

export const getComplaints =
  (payload, page = 1) =>
  async (dispatch) => {
    try {
      setToken();
      dispatch({ type: FETCH_COMPLAINT_LIST });
      const { data } = await AXIOS.post(
        `${APIs.GET_COMPANY_COMPLAINT_LIST}?page=${page}`,
        { ...payload }
      );

      if (data.status) {
        dispatch({
          type: SET_COMPLAINT_LIST,
          payload: data.record || [],
          pagination: {
            currentPage: data.currentPage || 1,
            per_page: data.per_page || 0,
            total_record: data.total_record || 0,
          },
        });
      }
    } catch (err) {
      toast.error(err.message);
      dispatch({
        type: FETCH_COMPLAINT_ERROR,
        payload: err,
      });
    }
  };

export const downloadCSV = async (setDownloading) => {
  try {
    setToken();
    const { data } = await AXIOS.get(APIs.DOWNLOAD_COMPANY_CSV);
    // const data = await response.text();
    const blob = new Blob([data], { type: "data:text/csv;charset=utf-8," });
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = `company-list.csv`;
    anchor.href = blobURL;
    anchor.dataset.downloadurl = [
      "text/csv",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
    setDownloading(false);
  } catch (err) {
    setDownloading(false);
    toast.error(err.message);
  }
};

export const downloadCompanyComplaintCSV = async (
  companyId,
  setDownloading
) => {
  try {
    setToken();
    const { data } = await AXIOS.get(
      `${APIs.DOWNLOAD_COMPANY_COMPLAINT_LIST_CSV}/${companyId}`
    );
    const blob = new Blob([data], { type: "data:text/csv;charset=utf-8," });
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = `company-complaint-list.csv`;
    anchor.href = blobURL;
    anchor.dataset.downloadurl = [
      "text/csv",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
    setDownloading(false);
  } catch (err) {
    setDownloading(false);
    toast.error(err.message);
  }
};

export const downloadCompanyDriverCSV = async (companyId, setDownloading) => {
  try {
    setToken();
    const { data } = await AXIOS.get(
      `${APIs.DOWNLOAD_COMPANY_DRIVER_LIST_CSV}/${companyId}`
    );
    const blob = new Blob([data], { type: "data:text/csv;charset=utf-8," });
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = `company-driver-list.csv`;
    anchor.href = blobURL;
    anchor.dataset.downloadurl = [
      "text/csv",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
    setDownloading(false);
  } catch (err) {
    setDownloading(false);
    toast.error(err.message);
  }
};

export const downloadCompanyCarPlateCSV = async (companyId, setDownloading) => {
  try {
    setToken();
    const { data } = await AXIOS.get(
      `${APIs.DOWNLOAD_COMPANY_CAR_PLATE_LIST_CSV}/${companyId}`
    );
    const blob = new Blob([data], { type: "data:text/csv;charset=utf-8," });
    const blobURL = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = `company-car-plate-list.csv`;
    anchor.href = blobURL;
    anchor.dataset.downloadurl = [
      "text/csv",
      anchor.download,
      anchor.href,
    ].join(":");
    anchor.click();
    setDownloading(false);
  } catch (err) {
    setDownloading(false);
    toast.error(err.message);
  }
};
