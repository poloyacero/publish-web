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
<Col><Link href="/dashboard/createdashboard" passHref><Button className={styles.buttons}>Create</Button></Link></Col>
<Col><Link href="/dashboard/packagesdashboard" passHref><Button className={styles.buttons}>Package</Button></Link></Col>
<Col><Link href="/dashboard/servicesdashboard" passHref><Button className={styles.buttons}>Services</Button></Link></Col>
</Row> 
</Col>
</Col>

  );
};

export default Sidebar;