import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import styles from './NavMenuDashboard.module.css';



interface SidebarProps {
  className?: string;  
}

const Sidebar = ({ ...props }: SidebarProps) => { 

  return (
      
    <Col md={4} className={styles.sidebarcol} >
    <Col className={styles.buttoncontainer}>
<Row className={styles.buttonwrapper}>
<Col><Button className={styles.button}><Link href="/dashboard/createdashboard" passHref>Create</Link></Button></Col>
<Col><Button className={styles.button}><Link href="/dashboard/packagesdashboard" passHref>Package</Link></Button></Col>
<Col><Button className={styles.button}><Link href="/dashboard/servicesdashboard" passHref>Services</Link></Button></Col>
</Row> 
</Col>
</Col>

  );
};

export default Sidebar;