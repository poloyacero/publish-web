import React from 'react';
import { Button, Container, Modal } from 'react-bootstrap';

import styles from './TheModal.module.css';

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
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className={styles.createButton}>Create Account</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TheModal;