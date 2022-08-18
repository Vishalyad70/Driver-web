import React from "react";
import { Icon } from '@iconify/react';
import { Form } from "react-bootstrap";
export const Searchbar = () => {
  return (
    <div>
      <Form.Group className="search_op" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Search" />
        <Icon icon="akar-icons:search" />
      </Form.Group>
    </div>
  );
};
