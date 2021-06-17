import React from 'react';
import { Navbar, Nav, Container, Row, Col, NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import Link from 'next/link';
import {AiOutlineMenu} from 'react-icons/ai'
import styles from './NavMenuDashboard.module.css';



interface DNavProps {
  className?: string;
  onHide?:any;  
}

const Navdashboard = ({ ...props }: DNavProps) => { 

  return (
    <Container fluid style={{background: '#8f7c69'}}>
      <Container className={"container " + props.className} >
        <Row>
        
              <Col>                      
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>     
                    {/* <NavDropdown title={<AiOutlineMenu/>}  id={styles.menus}  className={styles.navmenu}>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Name</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/dashboard/accountinfo">Account Information</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Credit/Debit Cards</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Pay Open Invoices</NavDropdown.Item>      
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Compensation</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Documents</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Email</NavDropdown.Item>
                    <NavDropdown.Item id={styles.dropdownNextLevel} href="/#">Logout</NavDropdown.Item>
                    </NavDropdown>     */}
                                 
                  {/* <Link href="/dashboard/homedashboard"passHref><<Nav.Link>  id={styles.menus} className={styles.navmenu}>Home</Nav.Link></Link>
                  <Link href="/dashboard/services" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Titles</Nav.Link></Link>
                  <Link href="/dashboard/reports" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Reports</Nav.Link></Link>
                  <Link href="/dashboard/orders" passHref><Nav.Link id={styles.menus}  className={styles.navmenu}>Orders</Nav.Link></Link> */}
                
             </Col>       
  
        </Row>
      </Container>
     
    </Container>
  );
};

export default Navdashboard;