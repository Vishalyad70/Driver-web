import {
  FETCH_CAR_PLATE_ERROR,
  FETCH_CAR_PLATE_LIST,
  RESET_CAR_PLATE_LIST,
  SET_CAR_PLATE_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  car_plates: [],
  currentPage: 1,
  per_page: 0,
  total_record: 0,
};

const carPlateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_PLATE_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_CAR_PLATE_LIST:
      return {
        ...state,
        car_plates: [...action.payload],
        ...action.pagination,
        loading: false,
      };

    case FETCH_CAR_PLATE_ERROR:
      return {
        ...state,
        loading: false,
        currentPage: 1,
        per_page: 0,
        total_record: 0,
        error: action.payload,
      };
    case RESET_CAR_PLATE_LIST:
      return { ...state, loading: false, car_plates: [] };

    default:
      return state;
  }
};

export default carPlateReducer;
