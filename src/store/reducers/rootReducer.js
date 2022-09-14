import { combineReducers } from "redux";
import authReducer, { loaderReducer, formReducer } from "./authReducer";
import companyReducer, {
  dashboardReducer,
  recentCompanyReducer,
} from "./companyReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  form: formReducer,
  company: companyReducer,
  dashboard: dashboardReducer,
  recent_company: recentCompanyReducer,
});

export default rootReducer;
