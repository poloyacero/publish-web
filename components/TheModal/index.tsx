import React from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

interface TheModalProps {
  title?: string;
  children?: any;
  show?: any;
  onHide?: any;
}

const TheModal = ({ children, ...props }: TheModalProps) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Create Account</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TheModal;