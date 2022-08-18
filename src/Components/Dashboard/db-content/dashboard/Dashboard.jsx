import React from "react";
import { withRouter } from "react-router-dom";
import imageurl from "../../../common/images";
import { RecentTable } from "./RecentTable";
import { Searchbar } from "../../../../Shared/Searchbar";
import { Filter } from "../../../../Shared/Filter";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="overview">
        <h5 className="db_title">Overview</h5>
        <div className="view_box">
          <div className="web_status">
            <div className="first_box">
              <span>
                <img src={imageurl.plate} alt="" />
              </span>
              <div className="detail_box">
                <p>Total Plate number</p>
                <h5>56</h5>
              </div>
            </div>
            <div className="first_box">
              <span>
                <img src={imageurl.user} alt="" />
              </span>
              <div className="detail_box">
                <p>Total Drivers</p>
                <h5>40</h5>
              </div>
            </div>
            <div className="first_box">
              <span>
                <img src={imageurl.cop} alt="" />
              </span>
              <div className="detail_box">
                <p>Total Complaints</p>
                <h5>21</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white_box">
        <h5 className="db_title">Recent</h5>
        <div className="open_nas">
          <div className="view_box mb-2">
            <div className="web_status">
              <div
                className="second d-flex w-100"
                style={{ justifyContent: "space-between" }}
              >
                <Searchbar />
                <Filter />
              </div>
            </div>
          </div>
          <RecentTable />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Dashboard);
