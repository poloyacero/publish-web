import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import Sidebar from '../../components/Dashboard/Sidebar'
import NavMenu from '../../components/NavDashboard'
import styles from '../../components/Dashboard/homedashboard.module.css'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import FooterDashboard from "../../components/Footer";
import withAuth from "../../components/withAuth";


const homedashboard=() =>{

  
    return (
      <>
        <div className={styles.container}>
      <Head>
        <title>Home Dashboard</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
    
      <NavMenuDashboard/>  
   
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
                <Col>
             <Col className={styles.homecontainer}>
             <h2 className={styles.ctext}>Welcome to the Publishing!</h2>
             <p><Image src="/img/homepicnew.png" width="480px" height="auto" /></p>

             <p className={styles.howtohelp}>How we can help you?<br/>
             <span className={styles.contactnumber}>+45 36 96 89 84</span></p>
             </Col> 
             </Col>
            </Row>
          </Container>   
       
        </Container>
      
        <FooterDashboard />    
        </div>
        </>
    )
}
export default withAuth(homedashboard);