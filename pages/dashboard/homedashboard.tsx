import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function homedashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Home Dashboard</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/>  
   
        <Container fluid>
          <Container>
            <Row className={styles2.dashcontainer} >
               <Sidebar/>
                <Col>
             <Col className={styles2.homecontainer}>
             <h2 className={styles.ctext}>Welcome to the Publishing!</h2>
             <p><Image src="/img/homepic.png" width="438px" height="auto" /></p>

             <p>How we can help you?<br/>
             <span style={{fontSize:'20px'}}>+45 2090 1011</span></p>
             </Col>
            
                   <Link  href="/dashboard/accountinfo">Account Information</Link ><br/>
                   <Link  href="/dashboard/billinginfo">Credit/Debit Cards</Link ><br/>
                   <Link  href="/dashboard/payopeninvoices">Pay Open Invoices</Link ><br/>      
                   <Link  href="/dashboard/compensationinfo">Compensation</Link ><br/>
                   <Link  href="/dashboard/documentsinfo">Documents</Link ><br/>
                   <Link  href="/dashboard/emaildashboard">Email</Link ><br/>
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <Footer />    
        </div>
    );
}
