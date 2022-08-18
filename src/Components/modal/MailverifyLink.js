import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import "./modal.css"

export const MailverifyLink = (props) => {
  return (
    <div>
        <Modal
        {...props} >
        <Modal.Header >
          <span><Icon icon="fluent:mail-20-filled" /></span>
          {/* closeButton={props.onHide} */}
        </Modal.Header>
        <Modal.Body>
          <p>Your reset password link has been sent to your email.</p>
          {/* <button  className="sign_btn d-block" > Check Email</button> */}
          <Link to="/resetpassword" className="sign_btn d-block">Check Email</Link>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}
