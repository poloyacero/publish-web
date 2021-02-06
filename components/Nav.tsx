import React from 'react';
import { Navbar, Nav, Container, Row, Col, Image, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

import styles from './NavMenu.module.css';

interface NavProps {}

const NavMenu = ({ ...props }: NavProps) => {
  return (
    <Container fluid style={{background: '#000000'}}>
      <Container className="container">
        <Row>
          <Navbar className={styles.navbar} expand="lg">
          <Col md={3}>
            <Link href="/" passHref>
              <Navbar.Brand className={styles.brand}>
                <h1>BRAND</h1>
                <span>Publishing</span>
              </Navbar.Brand>
            </Link>
          </Col>
          <Col md={6}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavDropdown title="Publish" id="collasible-nav-dropdown" className={styles.navmenu}>
                    <NavDropdown.Item className={styles.dropdownItem} href="/products">Products</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/pricing">Create</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="How" id="collasible-nav-dropdown" className={styles.navmenu}>
                    <NavDropdown.Item className={styles.dropdownItem} href="/self-publish">How To Self Publish</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/self-publish-cost">How Much Does It Cost</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/design-a-book">How To Design a Book</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/distribution">Distribution</NavDropdown.Item>
                  </NavDropdown>
                  <Link href="/packages" passHref><Nav.Link className={styles.navmenu}>Packages</Nav.Link></Link>
                  <NavDropdown title="Services" id="collasible-nav-dropdown" className={styles.navmenu}>
                    <NavDropdown.Item className={styles.dropdownItem} href="/marketing">Marketing</NavDropdown.Item>
                    <NavDropdown.Item className={styles.dropdownItem} href="/add-on">Add-on</NavDropdown.Item>
                  </NavDropdown>
                  {/*<Link href="/" passHref><Nav.Link className={styles.navmenu}>Services</Nav.Link></Link>*/}
                </Nav>
              </Navbar.Collapse>
          </Col>
          <Col md={3} className={styles.utilityMenu}>
            <Link href="/" passHref>
              <Nav.Link className={styles.utilityMenus} href="/">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </Nav.Link>
            </Link>
            <Link href="/" passHref>
              <Nav.Link className={styles.utilityMenus} href="/">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </Nav.Link>
            </Link>
            <Link href="/" passHref>
              <Nav.Link className={styles.utilityMenus} href="/">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                  <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                </svg>
              </Nav.Link>
            </Link>
          </Col>
        </Navbar>
        </Row>
      </Container>
    </Container>
  );
};

export default NavMenu;