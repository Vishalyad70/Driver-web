import React from "react";
import { Table , InputGroup} from "react-bootstrap";
import { Icon } from '@iconify/react';
import imageurl from "../../../common/images";
import {Link} from "react-router-dom"
export const CompanyTable = () => {
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
            <td><Link to="/dashboard/company/compamy-details"><div className="use_img">
              <img src={imageurl.company} alt="" /> <name style={{color:"#000000"}}>Vishal</name></div></Link></td>
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
