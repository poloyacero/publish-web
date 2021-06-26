import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


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
            <Row>
               <Sidebar/>
             <Col md={6}>
             
              <Col className={styles2.xcontainer+" "+styles.serviceslink}>
              
              <h4 className={styles2.xheaderlabel}><Link href="/dashboard/starterpkg" passHref>Starter</Link></h4>               
             
             
              <h4 className={styles2.xheaderlabel}> <Link href="/dashboard/deluxepkg" passHref>Deluxe</Link></h4>               
          
              
              <h4 className={styles2.xheaderlabel}><Link href="/dashboard/propkg" passHref>Pro</Link></h4>
              
              
              <h4 className={styles2.xheaderlabel}><Link href="/dashboard/elitepkg" passHref>Elite</Link></h4>                
             
             </Col>      
              </Col>
  
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
