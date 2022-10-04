import React from "react";
import { Icon } from "@iconify/react";
import { Form } from "react-bootstrap";
export const SearchbarFilter = ({ search, setSearch }) => {
  return (
    <div>
      <Form.Group className="search_op" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search ? search : ""}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Icon icon="akar-icons:search" />
      </Form.Group>
    </div>
  );
};
