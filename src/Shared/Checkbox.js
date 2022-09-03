import React from "react";
import { InputGroup } from "react-bootstrap";

const Checkbox = ({ id, name, handleClick, isChecked }) => {
  return (
    <InputGroup className="filter_open_check" style={{ width: "unset" }}>
      <InputGroup.Checkbox
        id={id}
        name={name}
        onChange={handleClick}
        checked={isChecked}
      />
    </InputGroup>
  );
};

export default Checkbox;
