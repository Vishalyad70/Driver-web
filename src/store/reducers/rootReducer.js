import { combineReducers } from "redux";
import authReducer, { loaderReducer, formReducer } from "./authReducer";
import companyReducer, {
  dashboardReducer,
  recentCompanyReducer,
} from "./companyReducer";
import driverReducer from "./driverReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  form: formReducer,
  company: companyReducer,
  dashboard: dashboardReducer,
  recent_company: recentCompanyReducer,
  driver: driverReducer,
});

export default rootReducer;
