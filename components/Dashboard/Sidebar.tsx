import React from 'react';
import { Row, Col, Button} from 'react-bootstrap';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
   
<Col md={4} className={styles.sidebarcol} >
<Col className={styles.buttoncontainer}>
<Row className={styles.buttonwrapper}>
<Col><Link href="/dashboard/accountinfo" passHref><Button className={styles.buttons}>Account</Button></Link></Col>
<Col><Link href="/dashboard/servicesdashboard" passHref><Button className={styles.buttons}>Services</Button></Link></Col>
<Col><Link href="/dashboard/contactdashboard" passHref><Button className={styles.buttons}>Contact</Button></Link></Col>
</Row>
</Col>
</Col>
    )
}

