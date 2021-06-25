import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


export default function emaildashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Email</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      {/* <NavMenu /> */}
      <NavMenuDashboard /> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row>
             
                <Col>
                <h3>Email 9</h3>
                <br></br>
                <Row className="form-group text-left">
              <Col ><Form.Control as="textarea" rows={15}/> </Col>
                 </Row>
                 <br/> <br/> <br/> 
              <Row className="form-group text-left">
            <Col md={2}><Button>Send</Button></Col>
            </Row>
              <br/> <br/> <br/>
             </Col>
           
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}