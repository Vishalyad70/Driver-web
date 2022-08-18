import React from "react";
import { Table, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../../common/images";

export const DriverStatus = () => {
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
            <th>Driver Status</th>

            <th>Date/Time Added</th>
            <th>Date/Time Deleted</th>
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
            <td>
              <span className="status green">Active</span>
            </td>
            <td>22/07/2022</td>
            <td>22/07/2022</td>
          </tr>
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
            <td>
              <span className="status red">Inactive</span>
            </td>
            <td>22/07/2022</td>
            <td>22/07/2022</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
