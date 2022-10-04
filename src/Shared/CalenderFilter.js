import React, { useRef } from "react";
import DatePicker from "react-multi-date-picker";
import { Icon } from "@iconify/react";
const CalenderFilter = ({ dates, handleSelect }) => {
  const datePickerRef = useRef();
  return (
    <div className="custom__calender">
      <button
        className="sign_btn down_csv d-block "
        onClick={() => datePickerRef.current.openCalendar()}
      >
        <Icon icon="pepicons:calendar" color="black" />
        Calender
      </button>
      <DatePicker
        style={{ display: "none" }}
        ref={datePickerRef}
        multiple={true}
        value={dates}
        onChange={handleSelect}
        range
        format={"YYYY-MM-DD"}
        fixRelativePosition={true}
      />
    </div>
  );
};

export default CalenderFilter;
