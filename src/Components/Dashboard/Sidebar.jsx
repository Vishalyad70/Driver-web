import React from "react";
import { withRouter, NavLink } from "react-router-dom";

import imageurl from "../common/images";

const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="logo_img text-center">
        <img src={imageurl.Logo} alt="" />
      </div>

      <ul>
        <NavLink to="/dashboard/" exact>
          <li>
            <img src={imageurl.db} alt="" />
            <span> Dashboard</span>
          </li>
        </NavLink>

        <NavLink to="/dashboard/company/" >
          <li>
            <img src={imageurl.Complain} alt="" />

            <span> Company</span>
          </li>
        </NavLink>

        <NavLink to="/" exact>
          <li>
            <img src={imageurl.Logout} alt="" />

            <span>Logout</span>
          </li>
        </NavLink>
        

       
      </ul>
    </div>
  );
};
export default withRouter(Sidebar);
