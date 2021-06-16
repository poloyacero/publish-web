import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenuDashboard.module.css';



interface DNavProps {
  className?: string;
  onHide?:any;  
}

const DashboardNavMenu = ({ ...props }: DNavProps) => { 

  return (
    <Container fluid style={{background: '#8f7c69'}}>
      <Container className={"container " + props.className} >
        <Row>
          <Navbar className={styles.navbar} expand="lg">
          
          <Col className={styles.togglecontainer} md={{ span: 6, offset: 1}} >
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                <NavDropdown title="Create" id="collasible-nav-dropdown" className={styles.navmenu}>
                  <NavDropdown.Item id={styles.dropdownNextLevel} href="/print-book">Print Book</NavDropdown.Item>
                      <NavDropdown.Item id={styles.dropdownNextLevel} href="/ebook">Ebook</NavDropdown.Item>
                  </NavDropdown>                 
                  
                  <Link href="/packages" passHref><Nav.Link className={styles.navmenu}>Packages</Nav.Link></Link>
                  {/* <NavDropdown title="Services" id="collasible-nav-dropdown" className={styles.navmenu}>
                    <NavDropdown.Item className={styles.dropdownItem} href="/marketing">Marketing</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/add-on">Add-on</NavDropdown.Item>
                  </NavDropdown> */}
                  <Link href="/services" passHref><Nav.Link className={styles.navmenu}>Services</Nav.Link></Link>
                  <Link href="/products" passHref><Nav.Link className={styles.navmenu}>Products</Nav.Link></Link>
                </Nav>
              </Navbar.Collapse>
        
          </Col>
          
        </Navbar>
        </Row>
      </Container>
     
    </Container>
  );
};

export default DashboardNavMenu;