import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./dashboard.css";
import Dashboard from "../Dashboard/db-content/dashboard/Dashboard";
import { Header } from "./Header";
import Company from "./db-content/Comapany/Company";
import AddCompany from "./db-content/Comapany/AddCompany";
import CompanyDetails from "./db-content/Comapany/CompanyDetails";

const DashboardLayout = () => {
  return (
    <div className="dblayout">
      <Sidebar />
      <div className="side_wrapper">
        <Header />
        <Container fluid className="ps-3 pe-3">
          <Row>
            <Col>
              <Route exact path="/dashboard/" component={Dashboard} />
              <Route exact path="/dashboard/company/" component={Company} />
              <Route
                exact
                path="/dashboard/company/add-company"
                component={AddCompany}
              />
              <Route
                exact
                path="/dashboard/company/company-details/:companyId"
                component={CompanyDetails}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default withRouter(DashboardLayout);
