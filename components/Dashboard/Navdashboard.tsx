import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenuDashboard.module.css';




interface DNavProps {
  className?: string; 
}

const Navdashboard = ({ ...props }: DNavProps) => { 

  return (
    <Container fluid style={{background: '#8f7c69'}}>
      <Container className="container">
        <Row>
        {/* <AiOutlineMenu/> */}
              <Col> 
                         
              <Navbar className={styles.navbardash} expand="lg">
                 <Col md={1} className={styles.navbardropcontainer}>
                    <NavDropdown title={<AiOutlineMenu/>}  id={styles.menus}  className={styles.navmenu}>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Name</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Account Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/billinginfo">Payment Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/payopeninvoices">Pay Open Invoices</NavDropdown.Item>      
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/compensationinfo">Compensation</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/documentsinfo">Documents</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/emaildashboard">Email</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Logout</NavDropdown.Item>
                    </NavDropdown>    
                    </Col>
                   <Col md={10}  className={styles.navbarlinkcontainer}>              
                  <Link href="/dashboard/homedashboard"passHref><Nav.Link id={styles.menus} className={styles.navmenu}>Home</Nav.Link></Link>
                  <Link href="/dashboard/titlesdashboard" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Titles</Nav.Link></Link>
                  <Link href="/dashboard/reportdashboard" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Reports</Nav.Link></Link>
                  <Link href="/dashboard/ordersdashboard" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Orders</Nav.Link></Link>
                  <Link href="/dashboard/submittedrequestdashboard" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Submitted Request</Nav.Link></Link>
                   </Col>
            </Navbar>    
             </Col>       
  
        </Row>
      </Container>
     
    </Container>
  );
};

export default Navdashboard;