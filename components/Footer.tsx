import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

import styles from './FooterMenu.module.css';


interface FooterProps {}

const Footer = ({ ...props }: FooterProps) => {
  return (
    <Container fluid style={{background: '#f0e3d5'}}>
      <Container className="container" style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row className="justify-content-md-center">
          <Col md={'auto'} className={styles.left}>
            <h1 className={styles.footerh1}>Let's Create a Book</h1>
            <Form className={styles.form}>
              <Form.Group className={styles.formGroup}>
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
                {/* <Form.Control type="text" className={styles.input} placeholder="Subject" /> */}
                <Form.Control className={styles.footerinputselect} as="select" defaultValue="Subject">
                  <option disabled>Subject</option>
                  <optgroup label="General Inquiries">                  
                  <option>Services</option>
                  <option>Book Printing</option>                  
                  <option>Book Distribution</option>
                  <option>Book Order</option>
                  <option>Editorial</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Royalties</option>
                  <option>Submission Inquiries</option>
                  </optgroup>
                  <optgroup label="Manuscript Status?">
                  <option>Complete and Edited</option>
                  <option>Complete but not edited</option>
                  <option>Ongoing</option>
                  <option>About to Start</option>
                  </optgroup>
                  <optgroup label="Type of Book">
                  <option>Childrens Book</option>
                  <option>Art and Photography</option>
                  <option>Biography and Memoir</option>
                  <option>Fiction</option>
                  <option>Non Fiction</option>
                  <option>Cook Book</option>
                  <option>Health and Fitness</option>
                  <option>Crafts and Hobbies</option>
                  <option>Home and Garden</option>
                  <option>Travel and Adventure</option>
                  <option>Entertainment</option>
                  <option>Family and Relationship</option>
                  <option>Religion</option>
                  </optgroup>

                </Form.Control>
                <Row><Col><br/></Col></Row>
                <Row><Col className={styles.checkboxlabel}><Form.Check type="checkbox"label="I agree to the Privacy Policy and Terms and Condition" name="selectstyles"  id="styles1"/></Col>
               </Row>
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
                <Row className={styles.center}><Col className={styles.footerlink}>
                <Link href="/"><a><Image src="/logo.png" width="125%" height="30px" /></a></Link>
              <div className={styles.copyright}>
              <p>CVR 42434558 Copyright © All Rights Reserved ThePublshing</p>
            </div> 
            </Col></Row>  
            </Col></Row>  
      </Container>
    </Container>
  );
}

export default Footer;