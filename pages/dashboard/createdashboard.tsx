import React from 'react'
import Head from 'next/head'
import NavMenu from '../../components/Nav'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/createdashboard.module.css'
import DForms from '../../components/Dashboard/forms'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";

export default function createbook() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />  
      <NavMenuDashboard /> 
        <Container fluid>
          <Container>
            <Row >
               <Sidebar/>
                <Col md={6}>
                  <Row  className={styles.createcontainer}>
             <Col>
                 <Col className={styles.indentselectbox}>
                    <Form.Control className={styleIn.inputselect} as="select" defaultValue="Select Creation">
                          <option disabled>Select Creation</option>                                
                          <option>Print Book and Ebook € 350</option>
                          <option>Print Book Only € 300</option>                  
                          <option>Ebook Only € 250</option>  
                    </Form.Control>
                 </Col>
             <DForms/>
             </Col> 
             </Row>
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    );
}
