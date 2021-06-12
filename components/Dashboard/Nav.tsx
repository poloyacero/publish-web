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
         
                <Nav id={styles.dropdownNextLevel}>
                <NavDropdown title={<AiOutlineMenu/>} id={styles.menus} className={styles.navmenu}>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Name</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Account Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Credit/Debit Cards</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Pay Open Invoices</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Tax Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Compensation</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Contract</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Messages</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Logout</NavDropdown.Item>

                  </NavDropdown>                 
                  
                  <Link href="/packages" passHref><Nav.Link id={styles.menus} className={styles.navmenu}>Home</Nav.Link></Link>
                  <Link href="/services" passHref><Nav.Link id={styles.menus} className={styles.navmenu}>Titles</Nav.Link></Link>
                  <Link href="/products" passHref><Nav.Link id={styles.menus}className={styles.navmenu}>Reports</Nav.Link></Link>
                  <Link href="/products" passHref><Nav.Link id={styles.menus}className={styles.navmenu}>Orders</Nav.Link></Link>
                </Nav>
        
          </Col>
          
        </Navbar>
        </Row>
      </Container>
     
    </Container>
  );
};

export default NavMenu;