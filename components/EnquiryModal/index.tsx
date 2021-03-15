import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import styles from './EnquiryModal.module.css';

interface EnquiryModalProps {
  title?: string;
  children?: any;
  show?: any;
  onHide?: any;
}

const EnquiryModal = ({ children, ...props }: EnquiryModalProps) => {
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
        <Button onClick={props.onHide} className={styles.submitButton}>Submit</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EnquiryModal;