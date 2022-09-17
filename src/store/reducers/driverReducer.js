import {
  FETCH_DRIVER_ERROR,
  FETCH_DRIVER_LIST,
  RESET_DRIVER_LIST,
  SET_DRIVER_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  drivers: [],
  currentPage: 1,
  per_page: 0,
  total_record: 0,
};

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRIVER_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_DRIVER_LIST:
      return {
        ...state,
        drivers: [...action.payload],
        ...action.pagination,
        loading: false,
      };

    case FETCH_DRIVER_ERROR:
      return {
        ...state,
        loading: false,
        currentPage: 1,
        per_page: 0,
        total_record: 0,
        error: action.payload,
      };
    case RESET_DRIVER_LIST:
      return { ...state, loading: false, drivers: [] };

    default:
      return state;
  }
};

export default driverReducer;
