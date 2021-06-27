import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


export default function submittedrequestdashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Submitted Request</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/>
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer} >
             
                <Col>
                <Row className="text-left">
                <h4 className={styles2.dropheaderlabel2}>Submitted Request</h4>
                </Row>
                <br></br>
                <Row className="text-center">
                  <Col md={3} className={styles2.documentsheader} >Received Documents</Col>
                  <Col md={3} className={styles2.documentsheader}>Date Requested</Col>
                  <Col md={3} className={styles2.documentsheader}>Status</Col>
                  <Col md={3} className={styles2.documentsheader}>Date Replied</Col>                 
                 </Row>
                 
                 <Row className="text-center">
                  <Col md={3} className={styles2.documentscolborder}>Print Book</Col>
                  <Col md={3} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={3} className={styles2.documentscolborder}>Evaluating</Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>                                                                   
                 </Row>

                 <Row className="text-center">
                  <Col md={3} className={styles2.documentscolborder}>Starter Package</Col>
                  <Col md={3} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={3} className={styles2.documentscolborder}>Replied to Mail</Col>
                  <Col md={3} className={styles2.documentscolborder}>Sep-10-2021</Col>                                                                   
                 </Row>
                 <Row className="text-center">
                  <Col md={3} className={styles2.documentscolborder}>Services</Col>
                  <Col md={3} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={3} className={styles2.documentscolborder}>Evaluating</Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>                                                                   
                 </Row>
                 <Row className="text-center">
                  <Col md={3} className={styles2.documentscolborder}></Col>
                  <Col md={3} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>                                                                   
                 </Row>
                
                 <br></br><br></br>             
            
             </Col>
           
            </Row>
            <br></br> <br></br>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
