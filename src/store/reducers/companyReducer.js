import {
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_LIST,
  RESET_COMPANY_DETAIL,
  SET_COMPANY_DETAIL,
  SET_COMPANY_LIST,
  SET_DASHBOARD_COUNT,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  companies: [],
  company_details: {},
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPANY_LIST:
      return { ...state, companies: [...action.payload], loading: false };

    case FETCH_COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_COMPANY_DETAIL:
      return { ...state, loading: false, company_details: action.payload };
    case RESET_COMPANY_DETAIL:
      return { ...state, loading: false, company_details: {} };
    default:
      return state;
  }
};
const dashboardState = {
  totalPlateNo: 10,
  totalDriver: 20,
  totalComplaint: 3,
};

export const dashboardReducer = (state = dashboardState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_COUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default companyReducer;
