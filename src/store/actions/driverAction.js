import AXIOS, { setToken } from "../common/api_helper";
import { APIs } from "../common/constants";
import {
  FETCH_DRIVER_ERROR,
  FETCH_DRIVER_LIST,
  SET_DRIVER_LIST,
} from "../common/types";
import { toast } from "react-toastify";

export const getDrivers =
  (companyId, page = 1) =>
  async (dispatch) => {
    try {
      setToken();
      dispatch({ type: FETCH_DRIVER_LIST });
      const { data } = await AXIOS.get(
        `${APIs.GET_COMPANY_DRIVERS}/${companyId}?page=${page}`
      );

      if (data.status) {
        dispatch({
          type: SET_DRIVER_LIST,
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
        type: FETCH_DRIVER_ERROR,
        payload: err,
      });
    }
  };
