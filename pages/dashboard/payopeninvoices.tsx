import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function payopeninvoices() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Pay Open Invoices</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer} >
             
                <Col>
                <Row className="text-left">
                <h4 className={styles2.dropheaderlabel2}>Pay Open Invoices</h4>
                </Row>
                <br></br>
                <Row className="text-center">
                  <Col md={2} className={styles2.documentsheader} >Name</Col>
                  <Col md={2} className={styles2.documentsheader}>Job Number</Col>
                  <Col md={2} className={styles2.documentsheader}>Invoice Detail</Col>
                  <Col md={1} className={styles2.documentsheader}>Total</Col>
                  <Col md={1} className={styles2.documentsheader}>Due Date</Col>
                  <Col md={1} className={styles2.documentsheader}>Pay</Col>
                  <Col md={1} className={styles2.documentsheader}>Paid Date</Col>
                  <Col md={1} className={styles2.documentsheader}>Refund</Col>
                  <Col md={1} className={styles2.documentsheader}>Status</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf1} ><Col className={styles2.documentsviewpdf}>View</Col></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>View</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>View</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>View</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>View</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                 </Row>
                  <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>Gabriel Balbuena</Col>
                  <Col md={2} className={styles2.documentscolborder}>SJN0000000</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>View</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Download</Col>
                  <Col md={1} className={styles2.documentscolborder}>€ 1,200.00</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Pay</Col>
                  <Col md={1} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
                  <Col md={1} className={styles2.documentscolborder}>Paid</Col>
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
