import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Filter } from "../../../../Shared/Filter";
import { Searchbar } from "../../../../Shared/Searchbar";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { CompanyTable } from "./CompanyTable";
import {
  deleteCompany,
  downloadCSV,
  getCompanies,
} from "../../../../store/actions/companyAction";
import { connect } from "react-redux";
import SiteLoader from "../../../SiteLoader/SiteLoader";
import { CUSTOM_PROPS } from "../../../common/constant";
import ConfirmationModal from "../../../modal/ConfirmationModal";
import Paginate from "../../../../Shared/Paginate/Paginate";
const Company = ({
  companies,
  loading,
  getCompanies,
  currentPage,
  per_page,
  total_record,
}) => {
  const [isCheck, setIsCheck] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    getCompanies({});
  }, [getCompanies]);

  const deleteHandler = (companyId) => {
    setDeleteId(companyId);
    setModalShow(true);
  };

  const handleDelete = async () => {
    deleteCompany(deleteId)
      .then((res) => {
        if (res) {
          getCompanies({});
        }
      })
      .finally(() => {
        setModalShow(false);
        setDeleteId(null);
      });
  };

  const handlePageClick = ({ selected: page }) => {
    getCompanies({}, page + 1);
  };

  return (
    <div className="dashboard">
      <div className="overview">
        <div className="view_box">
          <div
            className="web_status"
            style={{ justifyContent: "space-between" }}
          >
            {loading ? <SiteLoader /> : null}
            <h5 className="mb-0 db_title">All Companies</h5>
            <div className="second d-flex">
              <Searchbar />
              <Filter />
              <button
                className="sign_btn down_csv d-block ms-3 me-3"
                onClick={() => {
                  setDownloading(true);
                  downloadCSV(setDownloading);
                }}
                disabled={downloading}
              >
                <Icon icon="fa6-solid:download" color="black" />
                <span>{downloading ? "Downloading..." : "Download CSV"}</span>
              </button>
              <Link to="/dashboard/company/add-company">
                <button className="sign_btn add_com d-block">
                  Add Company
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="white_box">
        <div className="open_nas">
          <CompanyTable
            companies={companies || []}
            isCheck={isCheck}
            setIsCheck={setIsCheck}
            deleteHandler={deleteHandler}
          />
          {companies && companies.length > 0 && (
            <div className="d-flex justify-content-between p-4">
              <div>
                <h5>Total {total_record} records</h5>
              </div>
              <Paginate
                totalCounts={total_record}
                perPage={per_page}
                currentPage={currentPage}
                handlePageClick={handlePageClick}
              />
            </div>
          )}
        </div>
        {modalShow && (
          <ConfirmationModal
            {...CUSTOM_PROPS.CONFIRMATION_DELETE}
            show={modalShow}
            onHide={() => setModalShow(false)}
            actionHandler={handleDelete}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({
  company: { loading, companies, currentPage, per_page, total_record },
}) => {
  return {
    loading,
    companies,
    currentPage,
    per_page,
    total_record,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: (payload, page) => dispatch(getCompanies(payload, page)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Company));
