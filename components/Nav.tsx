import React from 'react';
import { Navbar, Nav, Container, Row, Col, Image, NavDropdown, Form ,Button} from 'react-bootstrap';
import Link from 'next/link';

import styles from './NavMenu.module.css';
import TheModal from './TheModal';
import EnquiryModal from './EnquiryModal';

interface NavProps {
  className?: string;
  onHide?:any;  
}

const NavMenu = ({ ...props }: NavProps) => {
  const [modalShowCreate, setModalShowCreate] = React.useState(false);
  const [modalShowSignin, setModalShowSignin] = React.useState(false);

  return (
    <Container fluid style={{background: '#f0e3d5'}}>
      <Container className={"container " + props.className} >
        <Row>
          <Navbar className={styles.navbar} expand="lg">
          <Col md={{span:3, order: 'first'}} className={styles.logoWrapper}>
            <Link href="/" passHref>
              <Navbar.Brand className={styles.brand}>
              <Image src="/logo.png" className={styles.logo}/>
              {/*<h1>The Publishing</h1>*/}
              </Navbar.Brand>
            </Link>
          </Col>
          <Col className={styles.togglecontainer} md={{ span: 6, offset: 1}} >
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
          <Col md={{ span: 2, offset: 0, order: 'last'}} className={styles.utilityMenu}>
             <Col className={styles.utilitycontainer}>
               <Col>
            <Link href="/" passHref>
              <Nav.Link className={styles.utilityMenus} href="/">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                  <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                </svg>
              </Nav.Link>
            </Link>
            </Col>
            <Col>
            <Link href="/" passHref>
              <Nav.Link className={styles.utilityMenus} href="/">
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
              </Nav.Link>
            </Link>
            </Col>
            <Col>
            <Nav.Link className={styles.utilityMenus} onClick={() => setModalShowSignin(true)}>
              <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
              </svg>
            </Nav.Link>
            </Col>
            </Col>
          </Col>
        </Navbar>
        </Row>
      </Container>
      <TheModal 
        title="Create an Account"
        show={modalShowCreate}
        onHide={() => setModalShowCreate(false)}
      >
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6}>
                  <Form.Label className={styles.label}>Contact Name</Form.Label>
                  <Form.Control className={styles.inputnav1} type="text" name="contact-name"/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6}>
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control className={styles.inputnav1} type="email" name="email"/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6}>
                  <Form.Label className={styles.label}>Password</Form.Label>
                  <Form.Control className={styles.inputnav1} type="password" name="password"/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6}>
                  <Form.Label className={styles.label}>Validate Password</Form.Label>
                  <Form.Control className={styles.inputnav1} type="password" name="validate"/>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row}>
                <Col className={styles.forgotpasslink1} md={12}>   
                <br/>                                
                  <Button data-dismiss-modal onClick={() => setModalShowCreate(true)} className={styles.createButton}>Create Account </Button>
                </Col>
               
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </TheModal>
      <TheModal 
        title="Sign In"
        size="sm"
        show={modalShowSignin}
        onHide={() => setModalShowSignin(false)}
      >      
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <Form.Group as={Row}>
                <Col md={12}>
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control className={styles.inputnav} type="email" name="email"/>
                </Col>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row}>
                <Col md={12}>
                  <Form.Label className={styles.label}>Password</Form.Label>
                  <Form.Control className={styles.inputnav} type="password" name="password"/>                  
                </Col>
               
              </Form.Group>
            </Col>
            <Col>
              <Form.Group as={Row}>
                <Col md={12}>                                   
                  <Button onClick={props.onHide} className={styles.signinButton}>Log In</Button>
                </Col>
               
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              
                <Col className={styles.forgotpasslink} md={12}>                                   
                  <Link href="/">Forgot Password?</Link>
                </Col>
               
             
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              
                <Col className={styles.forgotpasslink} md={12}>                                   
                  <br/><br/>
                  <hr></hr>
                </Col>
               
             
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              
                <Col className={styles.haveaccount} md={12}>                                   
                  Do you have an account?
                </Col>               
             
            </Col>
            <Col>
              <Form.Group as={Row}>
                <Col className={styles.forgotpasslink} md={12}>   
                <br/>                                
                  <Button data-dismiss-modal onClick={() => setModalShowCreate(true)} className={styles.createButton}>Create Account </Button>
                </Col>
               
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </TheModal>
    </Container>
  );
};

export default NavMenu;