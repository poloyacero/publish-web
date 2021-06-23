import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
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
              <Link href="/dashboard/starterpkg" passHref>
              <h4 className={styles2.homeHeaderlabel}><a>Starter</a></h4>               
               </Link>
              <Link href="/dashboard/deluxepkg" passHref>
              <h4 className={styles2.homeHeaderlabel}><a>Deluxe</a></h4>               
               </Link>
              <Link href="/dashboard/propkg" passHref>
              <h4 className={styles2.homeHeaderlabel}><a>Pro</a></h4>
               </Link>
              <Link href="/dashboard/elitepkg" passHref>
              <h4 className={styles2.homeHeaderlabel}><a>Elite</a></h4>                
               </Link>
             </Col>      
              </Col>
  
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
