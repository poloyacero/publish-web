import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenu.module.css';



interface NavProps {
  className?: string;
  onHide?:any;  
}

const NavMenu = ({ ...props }: NavProps) => { 

  return (
    <Container fluid style={{background: '#8f7c69'}}>
      <Container className={"container " + props.className} >
        <Row>
          <Navbar className={styles.navbar} expand="lg">
          
          <Col className={styles.togglecontainer} md={{ span: 6, offset: 1}} >
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">                
                 <Nav id={styles.dropdownNextLevel}>             
                    <NavDropdown title={<AiOutlineMenu/>} id="collasible-nav-dropdown" className={styles.navmenu}>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Name</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Account Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Credit/Debit Cards</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Pay Open Invoices</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Tax Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Compensation</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Contract</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Messages</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Logout</NavDropdown.Item>
                    </NavDropdown>    
                                 
                  <Link href="/dashboard/home" passHref><Nav.Link id={styles.menus} className={styles.navmenu}>Home</Nav.Link></Link>
                  <Link href="/dashboard/services" passHref><Nav.Link id={styles.menus} className={styles.navmenu}>Titles</Nav.Link></Link>
                  <Link href="/dashboard/reports" passHref><Nav.Link id={styles.menus}className={styles.navmenu}>Reports</Nav.Link></Link>
                  <Link href="/dashboard/orders" passHref><Nav.Link id={styles.menus}className={styles.navmenu}>Orders</Nav.Link></Link>
                  </Nav>
                </Navbar.Collapse>   
        
          </Col>
          
        </Navbar>
        </Row>
      </Container>
     
    </Container>
  );
};

export default NavMenu;