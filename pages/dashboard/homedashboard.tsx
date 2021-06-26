import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import Sidebar from '../../components/Dashboard/Sidebar'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Image} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


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
             <h2 className={styles.ctext}>Welcome to the Publishing!3</h2>
             <p><Image src="/img/homepic.png" width="438px" height="auto" /></p>

             <p>How we can help you?<br/>
             <span style={{fontSize:'20px'}}>+45 2090 1011</span></p>
             </Col> 
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
        <FooterDashboard />    
        </div>
    )
}
