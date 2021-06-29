import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

import styles from './FooterMenu.module.css';


interface FooterPropsdash {}

const FooterDashboard = ({ ...props }: FooterPropsdash) => {
  return (
    <Container fluid style={{background: '#f0e3d5'}}>
      <Container className="container" style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row className="justify-content-md-center">
          <Col md={'auto'} className={styles.left}>
           
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
                <Col className={styles.footerlink} ><Link href="/distribution">Distribution</Link></Col>
                <Col className={styles.footerlink} ><Link href="/packages">Packages</Link></Col>
                <Col className={styles.footerlink} ><Link href="/add-on">Add on</Link></Col>                
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

export default FooterDashboard;