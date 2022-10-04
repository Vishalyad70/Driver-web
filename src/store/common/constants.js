// const BASE_URL = "https://mmfinfotech.co/driver_app/api";
const BASE_URL = "https://roadeye.ae/driver_app_backend/api";

const AUTHORIZATION = "Authorization";
const COOKIE_EXPIRED = 60 * 60 * 24 * 365;
const APIs = {
  ADMIN_LOGIN: "/user/login",
  GET_DASHBOARD_COUNT: "/company/count_carPlates_drivers_complaints",
  FORGOT_PASSWORD: "/reset/forgot_password",
  CHANGE_PASSWORD: "/reset/set_new_password",
  ADD_COMPANY: "/company/add_company",
  EDIT_COMPANY: "/company/edit_company",
  GET_COMPANY_DETAIL: "/company/company_details",
  GET_COMPANIES: "/company/company_lists",
  DELETE_COMPANY: "/company/company_delete",
  GET_RECENTLY_COMPANY: "",
  GET_RECENT_COMPANY: "/company/recent_company_lists",
  GET_COMPANY_DRIVERS: "/company/company_driverlist",
  GET_COMPANY_CARPLATE_LIST: "/company/company_carPlates_ist",
  GET_COMPANY_COMPLAINT_LIST: "/company/driver_complaintsList",
  DOWNLOAD_COMPANY_CSV: "/company/download_csv_companyList",
};
 
export { BASE_URL, COOKIE_EXPIRED, APIs, AUTHORIZATION };
