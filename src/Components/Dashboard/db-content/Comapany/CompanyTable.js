import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../../common/images";
import { Link } from "react-router-dom";
import Checkbox from "../../../../Shared/Checkbox";
export const CompanyTable = ({
  companies,
  setIsCheck,
  isCheck,
  deleteHandler,
}) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(companies.map((li) => li.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, Number(id)]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== Number(id)));
    }
  };
  return (
    <div>
      <Table className="recenttable" responsive>
        <thead>
          <tr>
            <th>
              <Checkbox
                name="selectAll"
                id="selectAll"
                handleClick={handleSelectAll}
                isChecked={isCheckAll}
              />
            </th>
            <th>Company Name</th>
            <th>Date and Time</th>
            <th>Total Car Plates</th>
            <th>Total Car Plates Available</th>
            <th>Total Drivers</th>
            <th>Total Complaints</th>
            {/* <th>Rating</th> */}
            {/* <th>Description</th> */}
            {/* <th>Location</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies.length > 0 &&
            companies.map((company) => (
              <tr key={company.id}>
                <td>
                  <Checkbox
                    key={company.id}
                    id={company.id}
                    name={`item_${company.id}`}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(company.id)}
                  />
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
                  {/* {dateToFormat(company.created_at, "MMM, DD, YYYY H:mm A")} */}
                  <td>{company.date_time}</td>
                </td>
                <td>{company.total_numbar_plate}</td>
                <td>{company.total_car_plats_available}</td>
                <td>{company.total_driver}</td>
                <td>{company.total_complaints}</td>
                {/* <td>{company.rating || 0}</td> */}
                {/* <td>{company.total_complaints}</td> */}
                {/* <td>
                  <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </td> */}
                <td>
                  <Link to={`/dashboard/company/edit-company/${company.id}`}>
                    <Icon icon="eva:edit-fill" />
                  </Link>
                </td>

                <td>
                  <Icon
                    onClick={() => deleteHandler(company.id)}
                    icon="fluent:delete-24-filled"
                    color="black cursor"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
