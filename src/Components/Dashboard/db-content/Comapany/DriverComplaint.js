import React, { useState } from "react";
import { Table } from "react-bootstrap";
// import { Icon } from "@iconify/react";
// import imageurl from "../../../common/images";
import Checkbox from "../../../../Shared/Checkbox";
import CommentModal from "./CommentModal";

export const DriverComplaint = ({ complaints, setIsCheck, isCheck }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [showModal, setShowModal] = useState();
  const [comment, setComment] = useState(null);
  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(complaints.map((li) => li.id));
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
            <th>Driver Name</th>
            <th>Complaint Reason</th>
            <th>Date/Time</th>
            <th>Location</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {complaints &&
            complaints.length > 0 &&
            complaints.map((complaint) => (
              <tr key={complaint.id}>
                <td>
                  <Checkbox
                    key={complaint.id}
                    id={complaint.id}
                    name={`item_${complaint.id}`}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(complaint.id)}
                  />
                </td>
                <td>{complaint.car_plate_number}</td>
                <td>{complaint.driver_name}</td>
                <td>{complaint.complaint_reason}</td>
                <td>{complaint.complaint_date}</td>
                <td>{complaint.location || "NA"}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-sm mt-3 update_comment_btn"
                    onClick={() => {
                      setComment(complaint.comment);
                      setShowModal(true);
                    }}
                  >
                    Comment
                  </button>
                </td>
              </tr>
            ))}
          {complaints.length === 0 && (
            <tr>
              <td align="center" colSpan={6}>
                No driver available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {showModal && (
        <CommentModal
          show={showModal}
          onHide={() => {
            setComment(null);
            setShowModal(false);
          }}
          comment={comment || ""}
        />
      )}
    </div>
  );
};
