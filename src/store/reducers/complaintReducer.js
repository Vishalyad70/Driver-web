import {
  FETCH_COMPLAINT_ERROR,
  FETCH_COMPLAINT_LIST,
  RESET_COMPLAINT_LIST,
  SET_COMPLAINT_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  complaints: [],
};

const complaintReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPLAINT_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPLAINT_LIST:
      return { ...state, complaints: [...action.payload], loading: false };

    case FETCH_COMPLAINT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_COMPLAINT_LIST:
      return { ...state, loading: false, complaints: [] };

    default:
      return state;
  }
};

export default complaintReducer;
