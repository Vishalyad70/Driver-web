import {
  FETCH_COMPANY_ERROR,
  FETCH_COMPANY_LIST,
  FETCH_RECENT_COMPANY_ERROR,
  FETCH_RECENT_COMPANY_LIST,
  RESET_COMPANY_DETAIL,
  SET_COMPANY_DETAIL,
  SET_COMPANY_LIST,
  SET_DASHBOARD_COUNT,
  SET_RECENT_COMPANY_LIST,
} from "../common/types";

const initialState = {
  error: "",
  loading: false,
  companies: [],
  company_details: {},
  currentPage: 1,
  per_page: 0,
  total_record: 0,
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_COMPANY_LIST:
      return {
        ...state,
        companies: [...action.payload],
        ...action.pagination,
        loading: false,
      };

    case FETCH_COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentPage: 1,
        per_page: 0,
        total_record: 0,
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
  total_plats: 0,
  total_complaints: 0,
  total_driver: 0,
  total_company: 0,
};

export const dashboardReducer = (state = dashboardState, action) => {
  switch (action.type) {
    case SET_DASHBOARD_COUNT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const recentCompanyReducer = (
  state = {
    error: "",
    loading: false,
    recent_companies: [],
  },
  action
) => {
  switch (action.type) {
    case FETCH_RECENT_COMPANY_LIST:
      return {
        ...state,
        loading: true,
      };
    case SET_RECENT_COMPANY_LIST:
      return {
        ...state,
        recent_companies: [...action.payload],
        loading: false,
      };

    case FETCH_RECENT_COMPANY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default companyReducer;
