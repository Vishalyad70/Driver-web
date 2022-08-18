import React from "react";
import { Dropdown } from "react-bootstrap";
import { Icon } from '@iconify/react';
export const Filter = () => {
  return (
    <div>
     <Dropdown>
      <Dropdown.Toggle className="filter" variant="success" id="dropdown-basic">
      <Icon icon="clarity:filter-grid-solid" color="black" />
      <span>Filter</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Company</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Complaints</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Ratings</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
};
