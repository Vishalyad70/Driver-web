import React from "react";
import { Table, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../../common/images";
import { Link } from "react-router-dom";
import { dateToFormat } from "../../../common/_helper";
export const CompanyTable = ({ companies }) => {
  return (
    <div>
      <Table className="recenttable" responsive>
        <thead>
          <tr>
            <th>
              {" "}
              <InputGroup>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup>
            </th>
            <th>Company Name</th>
            <th>Date and Time</th>
            <th>Total Car Plates</th>
            <th>Total Drivers</th>
            <th>Total Complaints</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies.length > 0 &&
            companies.map((company) => (
              <tr key={company.id}>
                <td>
                  <InputGroup>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </td>
                <td>
                  <Link to={`/dashboard/company/company-details/${company.id}`}>
                    <div className="use_img">
                      <img
                        src={company ? company.company_image : imageurl.company}
                        alt=""
                      />{" "}
                      <span style={{ color: "#000000" }}>{company.name}</span>
                    </div>
                  </Link>
                </td>
                <td>
                  {dateToFormat(company.created_at, "MMM, DD, YYYY H:mm A")}
                </td>
                <td>{company.total_numbar_plate}</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </td>
                <td>
                  <Icon icon="fluent:delete-24-filled" color="black" />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
