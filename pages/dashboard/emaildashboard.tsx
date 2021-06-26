import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function emaildashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Email</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer}>
             
                <Col>
                <h3 className={styles2.dropheaderlabel2}>Email</h3>
                <br></br>
                <Row className="form-group text-left">
              <Col ><Form.Control as="textarea" rows={15}/> </Col>
                 </Row>
                 <br/> <br/> <br/> 
              <Row className="form-group text-left">
            <Col md={2}><Button className={styles2.dashsubmitbutton}>Send</Button></Col>
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
