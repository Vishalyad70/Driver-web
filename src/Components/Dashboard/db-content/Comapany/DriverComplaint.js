import React from "react";
import { Table, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../../common/images";

export const DriverComplaint = () => {
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
            <th>Car Plate Number</th>
            <th>Driver Name</th>
            <th>Complaint Reason</th>
            <th>Total Drivers</th>
            <th>Date/Time</th>
            <th>Location</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <InputGroup>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup>
            </td>
            <td>HR-26-AK-0728</td>

            <td>
              <div className="use_img">
                <img src={imageurl.company} alt="" />{" "}
                <name style={{ color: "#000000" }}>Vishal</name>
              </div>
            </td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
           

            <td>
              <Icon icon="fluent:delete-24-filled" color="black" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
