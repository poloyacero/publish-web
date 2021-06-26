import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function documentsinfo() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Documents Information</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer} >
             
                <Col>
                <Row className="text-left">
                <h4 className={styles2.homeHeaderlabel2}>Documents</h4>
                </Row>
                <br></br>
                <Row className="text-center">
                  <Col className={styles2.documentsheader} md={5}>Received Documents</Col><Col md={3} className={styles2.documentsheader}>Date</Col><Col md={4} className={styles2.documentsheader}>Action</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={5} className={styles2.documentscolborder}>The Publishing Contract</Col><Col md={3}  className={styles2.documentscolborder}>jun-17-2021</Col><Col className={styles2.documentsviewpdf}>View</Col><Col className={styles2.documentsviewpdf}>Download Pdf</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={5} className={styles2.documentscolborder}></Col><Col md={3}  className={styles2.documentscolborder}>jun-17-2021</Col><Col className={styles2.documentsviewpdf}>View</Col><Col className={styles2.documentsviewpdf}>Download Pdf</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={5} className={styles2.documentscolborder}></Col><Col md={3}  className={styles2.documentscolborder}>jun-17-2021</Col><Col className={styles2.documentsviewpdf}>View</Col><Col className={styles2.documentsviewpdf}>Download Pdf</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={5} className={styles2.documentscolborder}></Col><Col md={3}   className={styles2.documentscolborder}>jun-17-2021</Col><Col className={styles2.documentsviewpdf}>View</Col><Col className={styles2.documentsviewpdf}>Download Pdf</Col>
                 </Row>
               
             </Col>
           
            </Row>
            <br></br> <br></br>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
