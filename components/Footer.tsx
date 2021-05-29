import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

import styles from './FooterMenu.module.css';


interface FooterProps {}

const Footer = ({ ...props }: FooterProps) => {
  return (
    <Container fluid style={{background: '#e7d2bc'}}>
      <Container className="container" style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row className="justify-content-md-center">
          <Col md={'auto'} className={styles.left}>
            <h1 className={styles.footerh1}>Let's Create a Book</h1>
            <Form className={styles.form}>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  First Name
                </Form.Text> */}
                <Form.Control type="text" className={styles.input} placeholder="First Name" />
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Last Name
                </Form.Text> */}
                <Form.Control type="text" className={styles.input} placeholder="Last Name"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Email
                </Form.Text> */}
                <Form.Control type="email" className={styles.input} placeholder="Email"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Phone
                </Form.Text> */}
                <Form.Control type="tel" className={styles.input} placeholder="Phone"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                 Subject
                </Form.Text> */}
                <Form.Control type="text" className={styles.input} placeholder="Subject" />
                <Row><Col style={{padding:0}}><br/></Col></Row>
                <Row style={{flexWrap:'nowrap'}}><Col sm={1}><Form.Check type="checkbox" name="selectstyles"  id="styles1"/></Col>
                <Col sm={11} style={{padding:"5px"}} className={styles.checkboxlabel}>I agree to the Privacy Policy and Terms and Condition</Col><Col></Col></Row>
                   <br/>             
                <Button className={styles.sendmail}>SEND MAIL</Button>
              </Form.Group>
            </Form>
              
          </Col>
        </Row>
        <Row><Col><br/><br/></Col></Row>
      
        <Row className="justify-content-md-center">
             <Col><Row className={styles.center}>
                <Col className={styles.footerlink} ><Link href="/about">About</Link></Col>
                <Col className={styles.footerlink} ><Link href="/contact">Contact</Link></Col>
                <Col className={styles.footerlink} ><Link href="/privacy-policy">Privacy</Link></Col>
                <Col className={styles.footerlink} ><Link href="/terms-of-use">Terms</Link></Col>
                <Col className={styles.footerlink} ><Link href="/services">Services</Link></Col>
                <Col className={styles.footerlink} ><Link href="/add-on">Add on</Link></Col>
                <Col className={styles.footerlink} ><Link href="/packages">Packages</Link></Col>
                <Col className={styles.footerlink} ><Link href="/distribution">Distribution</Link></Col>
                <Col className={styles.footerlink} ><Link href="/illustration-services">Illustrations</Link></Col>
                </Row>
                </Col>
               </Row>
               <Row><Col><br/><br/></Col></Row>
              <Row className="justify-content-md-center">
                <Col>
                <Row className={styles.center}><Col>
               <Image src="/logo.png" width="100%" height="23px" />
              <div className={styles.copyright}>
              <p>Copyright © {(new Date().getFullYear())} ThePublishing All Rights Reserved </p>
            </div> 
            </Col></Row>  
            </Col></Row>  
      </Container>
    </Container>
  );
}

export default Footer;