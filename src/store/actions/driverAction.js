import AXIOS, { setToken } from "../common/api_helper";
import { APIs } from "../common/constants";
import { NAVIGATION } from "../../Components/common/constant";
import {
  FETCH_DRIVER_ERROR,
  FETCH_DRIVER_LIST,
  SET_DRIVER_LIST,
} from "../common/types";
import { toast } from "react-toastify";

export const getDrivers = (companyId) => async (dispatch) => {
  try {
    setToken();
    dispatch({ type: FETCH_DRIVER_LIST });
    const { data } = await AXIOS.get(
      `${APIs.GET_COMPANY_DRIVERS}/${companyId}`
    );

    if (data.status) {
      dispatch({
        type: SET_DRIVER_LIST,
        payload: data.record || [],
      });
    }
  } catch (err) {
    toast.error(err.message);
    dispatch({
      type: FETCH_DRIVER_ERROR,
      payload: err,
    });
  }
};
