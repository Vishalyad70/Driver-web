import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "./modal.css"

export const SuccessMessge = (props) => {
  return (
    <div>
        <Modal
        {...props} >
        <Modal.Header >
          <span><Icon icon="akar-icons:circle-check-fill" color='#4ecb71'/></span>
          {/* closeButton={props.onHide} */}
        </Modal.Header>
        <Modal.Body>
          <p>Your  password has been changed Successfully.</p>
          {/* <button  className="sign_btn d-block" > Back to Login</button> */}
          <Link to="/" className="sign_btn d-block">Back to Login</Link>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}
