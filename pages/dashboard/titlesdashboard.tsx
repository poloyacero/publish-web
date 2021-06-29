import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


export default function titlesdashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Titles</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/>
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer} >
             
                <Col>
                <Row className="text-left">
                <h4 className={styles2.dropheaderlabel2}>Titles Added</h4>
                </Row>
                <br></br>
                <Row className="text-center">
                  <Col md={2} className={styles2.documentsheader} >Title</Col>
                  <Col md={2} className={styles2.documentsheader}>ISBN</Col>
                  <Col md={3} className={styles2.documentsheader}>Format</Col>
                  <Col md={2} className={styles2.documentsheader}>Submission</Col>
                  <Col md={2} className={styles2.documentsheader}>Publication</Col>
                  <Col md={1} className={styles2.documentsheader}>Status</Col>
                
               
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>The Super Hero</Col>
                  <Col md={2} className={styles2.documentscolborder}>978-3-16-148410-0</Col>
                  <Col md={3} className={styles2.documentscolborder}>6x9" (254x203mm)Paperback</Col>
                  <Col md={2} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={2} className={styles2.documentscolborder}>Dec-10-2021</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Done</Col>                                                   
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Active</Col>                                                   
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}>1</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Refund</Col>                                                   
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={3} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Hold</Col>                                                   
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
