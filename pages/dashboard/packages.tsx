import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link"

export default function dashpackage() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Dash Package</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row className={styles2.dashcontainer} >
               <Sidebar/>
             <Col md={6}>
              <Col className={styles2.createcontainer}>
              <Link href="/dashboard/starterpkg">Starter</Link>
              <Link href="/dashboard/deluxepkg">Deluxe</Link>
              <Link href="/dashboard/propkg">Pro</Link>
              <Link href="/dashboard/elitepkg">Elite</Link>
             </Col>      
              </Col>
  
            </Row>
          </Container>   
       
        </Container>
     
      <Footer />    
        </div>
    )
}
