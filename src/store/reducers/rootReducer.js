import { combineReducers } from "redux";
import authReducer, { loaderReducer, formReducer } from "./authReducer";
import carPlateReducer from "./carPlateReducer";
import companyReducer, {
  dashboardReducer,
  recentCompanyReducer,
} from "./companyReducer";
import complaintReducer from "./complaintReducer";
import driverReducer from "./driverReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  loader: loaderReducer,
  form: formReducer,
  company: companyReducer,
  dashboard: dashboardReducer,
  recent_company: recentCompanyReducer,
  driver: driverReducer,
  complaint: complaintReducer,
  car_plate: carPlateReducer,
});

export default rootReducer;
