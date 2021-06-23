import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Nav,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"

export default function dashpackage() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Dashboard Packages</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row className={styles2.dashcontainer+" "+ styles.serviceslink} >
               <Sidebar/>
             <Col md={6}>
              <Col className={styles2.createcontainer}>
              
              <h4 className={styles2.homeHeaderlabel}><Link href="/dashboard/starterpkg" passHref><Nav.Link>Starter</Nav.Link></Link></h4>               
             
             
              <h4 className={styles2.homeHeaderlabel}> <Link href="/dashboard/deluxepkg" passHref><Nav.Link>Deluxe</Nav.Link></Link></h4>               
          
              
              <h4 className={styles2.homeHeaderlabel}><Link href="/dashboard/propkg" passHref><Nav.Link>Pro</Nav.Link></Link></h4>
              
              
              <h4 className={styles2.homeHeaderlabel}><Link href="/dashboard/elitepkg" passHref><Nav.Link>Elite</Nav.Link></Link></h4>                
             
             </Col>      
              </Col>
  
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
