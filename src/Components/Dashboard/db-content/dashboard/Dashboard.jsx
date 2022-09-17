import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Searchbar } from "../../../../Shared/Searchbar";
import { Filter } from "../../../../Shared/Filter";
import { DASHBOARD_CARDS } from "../../../common/constant";
import { useSelector, useDispatch } from "react-redux";
import {
  getDashboardCount,
  getRecentCompanies,
} from "../../../../store/actions/companyAction";
import SiteLoader from "../../../SiteLoader/SiteLoader";
import { RecentTable } from "./RecentTable";
const Dashboard = () => {
  const count = useSelector((state) => state.dashboard);
  const { loading, recent_companies } = useSelector(
    (state) => state.recent_company
  );
  const disptach = useDispatch();
  const [isCheck, setIsCheck] = useState([]);

  useEffect(() => {
    disptach(getDashboardCount());
    disptach(getRecentCompanies());
  }, [disptach]);

  return (
    <div className="dashboard">
      <div className="overview">
        <h5 className="db_title">Overview</h5>
        <div className="view_box">
          <div className="web_status">
            {DASHBOARD_CARDS &&
              DASHBOARD_CARDS.map((card) => (
                <div className="first_box" key={card.id}>
                  <span>
                    <img src={card.icon} alt="" />
                  </span>
                  <div className="detail_box">
                    <p>{card.title}</p>
                    <h5>{count[card.dataKey]}</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {loading ? <SiteLoader /> : null}
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

          <RecentTable
            companies={recent_companies || []}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
          />
        </div>
      </div>
    </div>
  );
};
export default withRouter(Dashboard);
