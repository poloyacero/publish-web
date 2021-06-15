import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import styles from './NavMenu.module.css';



interface SidebarProps {
  className?: string;
  onHide?:any;  
}

const Sidebar = ({ ...props }: SidebarProps) => { 

  return (
    <Col md={4} className={styles.sidebarcol} >
    <Col className={styles.buttoncontainer}>
<Row className={styles.buttonwrapper}>
<Col><Link href="/dashboard/create" passHref><Button className={styles.button}>Create</Button></Link></Col>
<Col><Link href="/dashboard/packages" passHref><Button className={styles.button}>Package</Button></Link></Col>
<Col><Button className={styles.button}>Services</Button></Col>
</Row> 
</Col>
</Col> 
  );
};

export default Sidebar;