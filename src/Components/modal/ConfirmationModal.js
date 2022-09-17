import React from "react";
import { Modal } from "react-bootstrap";
import { Icon } from "@iconify/react";

const ConfirmationModal = (props) => {
  return (
    <Modal
      show={props.show}
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
          {props.title}
          <Icon
            className="ml-auto cursor ml-auto"
            icon="eva:close-fill"
            onClick={() => {
              props.onHide();
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="video_modal">
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer className="video_modal justify-content-between">
        <button onClick={props.onHide} className="sign_btn">
          cancel
        </button>
        <button onClick={props.actionHandler} className="sign_btn">
          {props.confirmBtnText ? props.confirmBtnText : "Okay"}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmationModal;
