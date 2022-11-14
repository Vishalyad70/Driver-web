import React from "react";
import { Form, Modal, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useState } from "react";

const CommentModal = ({ show, comment, onHide }) => {
  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Modal.Title
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          id="contained-modal-title-vcenter"
        >
          Preview
          <Icon
            className="ml-auto cursor ml-auto text-right"
            icon="eva:close-fill"
            onClick={() => {
              onHide();
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ textAlign: "left" }}>{comment || "NA"} </p>
      </Modal.Body>
      <Modal.Footer className="video_modal justify-content-between">
        <button onClick={onHide} className="btn btn-sm btn-danger mt-3">
          cancel
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default CommentModal;
