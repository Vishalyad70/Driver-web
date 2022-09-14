import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Checkbox from "../../../../Shared/Checkbox";
// import { Icon } from "@iconify/react";
import imageurl from "../../../common/images";

export const DriverStatus = ({ drivers, setIsCheck, isCheck }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(drivers.map((li) => li.id));
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
            <th>Car Plate Number</th>
            <th>Driver Name</th>
            <th>Driver Status</th>

            <th>Date/Time Added</th>
            <th>Date/Time Deleted</th>
          </tr>
        </thead>
        <tbody>
          {drivers &&
            drivers.length > 0 &&
            drivers.map((driver) => (
              <tr key={driver.id}>
                <td>
                  <Checkbox
                    key={driver.id}
                    id={driver.id}
                    name={`item_${driver.id}`}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(driver.id)}
                  />
                </td>
                <td>{driver.car_plate_number || "NA"}</td>

                <td>
                  <div className="use_img">
                    <img
                      src={
                        driver.profile_pic
                          ? driver.profile_pic
                          : imageurl.company
                      }
                      alt=""
                    />{" "}
                    <small style={{ color: "#000000" }}>{driver.name}</small>
                  </div>
                </td>
                <td>
                  {driver.status === "1" && (
                    <span className="status green">Active</span>
                  )}
                  {driver.status === "0" && (
                    <span className="status red">Inactive</span>
                  )}
                  {driver.status === "2" && (
                    <span className="status yellow">Delete</span>
                  )}
                </td>
                <td>{driver.joining_date}</td>
                <td>{driver.deleted_at || "NA"}</td>
              </tr>
            ))}

          {drivers.length === 0 && (
            <tr>
              <td align="center" colSpan={6}>
                No driver found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
