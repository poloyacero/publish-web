import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenu.module.css';



interface NavProps {
  className?: string;
  onHide?:any;  
}

const Sidebar = ({ ...props }: NavProps) => { 

  return (
    <Col md={4} className={styles.sidebarcol} >
    <Col className={styles.buttoncontainer}>
<Row className={styles.buttonwrapper}>
<Col><Link href="/dashboard/create"><Button className={styles.button}>Create</Button></Link></Col>
<Col><Button className={styles.button}>Package</Button></Col>
<Col><Button className={styles.button}>Services</Button></Col>
</Row> 
</Col>
</Col> 
  );
};

export default Sidebar;