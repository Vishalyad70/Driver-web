import React from "react";
import { Table , InputGroup} from "react-bootstrap";
import { Icon } from '@iconify/react';
import imageurl from "../../../common/images";
export const RecentTable = () => {
  return (
    <div>
      <Table className="recenttable" responsive>
        <thead>
          <tr>
            <th>
              {" "}
              <InputGroup >
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
          <tr>
            <td><InputGroup>
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              </InputGroup></td>
            <td><div className="use_img">
              <img src={imageurl.company} alt="" /> <name>Vishal</name></div></td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td><p>4517 Washington Ave. Manchester, Kentucky 39495</p></td>
            <td><Icon icon="fluent:delete-24-filled" color="black" /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
