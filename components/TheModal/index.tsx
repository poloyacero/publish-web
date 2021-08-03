import React from 'react';
import { Modal } from 'react-bootstrap';

import styles from './TheModal.module.css';

interface TheModalProps {
  title?: string;
  children?: any;
  show?: any;
  onHide?: any;  
  size?:any;
}

const TheModal = ({ children, ...props }: TheModalProps) => {
  return (
    
    
    <Modal
      {...props}
      
      left
    >
      <Modal.Header closeButton className={styles.modalHeader}>
        <Modal.Title className={styles.modalTitle} id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
    
   
  )
}

export default TheModal;