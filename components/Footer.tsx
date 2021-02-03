import Link from 'next/link';
import React from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

import styles from './FooterMenu.module.css';

interface FooterProps {}

const Footer = ({ ...props }: FooterProps) => {
  return (
    <Container fluid style={{background: '#303030'}}>
      <Container className="container" style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row>
          <Col md={{ span: 6, offset: 3 }} className={styles.center}>
            <Link href="/">
              <Nav.Link className={styles.footerMenus} href="/">
                About
              </Nav.Link>
            </Link>
            <Link href="/">
              <Nav.Link className={styles.footerMenus} href="/">
                Get Started
              </Nav.Link>
            </Link>
            <Link href="/">
              <Nav.Link className={styles.footerMenus} href="/">
                Contact
              </Nav.Link>
            </Link>
            <Form className={styles.form}>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                <Form.Control type="email" placeholder="EMAIL" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
                <Button className={styles.sendButton} variant="primary" type="submit">SEND</Button>
              </Form.Group>
            </Form>
            <div className={styles.copyright}>
              <p>Copyright © {(new Date().getFullYear())} DomainName-All Rights Reserved<br></br> Publishing</p>
            </div>   
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;