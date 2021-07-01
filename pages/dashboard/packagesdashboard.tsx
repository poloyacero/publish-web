import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/packagesdashboard/packagesdashboard.module.css'
import { Col, Container, Row,Nav} from 'react-bootstrap'
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
             
              <Col className={styles.packagescontainer}>
              
              <h4 className={styles.packagesheaderlabel}><Nav.Link className={styles.pkglink} href="/dashboard/starterpkg">Starter</Nav.Link></h4>               
             
             
              <h4 className={styles.packagesheaderlabel}> <Nav.Link className={styles.pkglink}  href="/dashboard/deluxepkg">Deluxe</Nav.Link></h4>               
          
              
              <h4 className={styles.packagesheaderlabel}><Nav.Link className={styles.pkglink}  href="/dashboard/propkg">Pro</Nav.Link></h4>
              
              
              <h4 className={styles.packagesheaderlabel}><Nav.Link className={styles.pkglink}  href="/dashboard/elitepkg">Elite</Nav.Link></h4>                
             
             </Col>      
              </Col>
  
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
