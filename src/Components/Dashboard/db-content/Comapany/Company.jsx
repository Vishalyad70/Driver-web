import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Filter } from "../../../../Shared/Filter";
import { Searchbar } from "../../../../Shared/Searchbar";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { CompanyTable } from "./CompanyTable";
import {
  deleteCompany,
  getCompanies,
} from "../../../../store/actions/companyAction";
import { connect } from "react-redux";
import SiteLoader from "../../../SiteLoader/SiteLoader";
import { CUSTOM_PROPS } from "../../../common/constant";
import ConfirmationModal from "../../../modal/ConfirmationModal";
const Company = ({ companies, loading, getCompanies }) => {
  const [isCheck, setIsCheck] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
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
              <button className="sign_btn down_csv d-block ms-3 me-3">
                <Icon icon="fa6-solid:download" color="black" />
                <span>Download CSV</span>
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

const mapStateToProps = ({ company: { loading, companies } }) => {
  return {
    loading,
    companies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCompanies: (payload) => dispatch(getCompanies(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Company));
