import React, { useState } from "react";
import { Table, InputGroup } from "react-bootstrap";
import Checkbox from "../../../../Shared/Checkbox";

export const CarPlateTable = ({ car_plates, setIsCheck, isCheck }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(car_plates.map((li) => li.id));
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
            <th>Date/Time Added</th>
            <th>Date/Time Deleted</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {car_plates &&
            car_plates.length > 0 &&
            car_plates.map((plate) => (
              <tr key={plate.id}>
                <td>
                  <Checkbox
                    key={plate.id}
                    id={plate.id}
                    name={`item_${plate.id}`}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(plate.id)}
                  />
                </td>
                <td>{plate.car_plate_number}</td>

                <td>{plate.joining_date}</td>
                <td>{plate.deleted_at || "NA"}</td>
                <td>
                  {plate.status === "1" && (
                    <span className="status green">Active</span>
                  )}
                  {plate.status === "0" && (
                    <span className="status red">Inactive</span>
                  )}
                  {plate.status === "2" && (
                    <span className="status yellow">Deleted</span>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
