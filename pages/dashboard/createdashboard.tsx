import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import DForms from '../../components/Dashboard/forms'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form} from 'react-bootstrap'
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function createbook() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Create</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />    
      <NavMenuDashboard className={styles.home}/> 
        <Container fluid>
          <Container>
            <Row >
               <Sidebar/>
                <Col md={6} className={styles2.createcontainer}>
             <Col >
             <Form.Control className={styleIn.inputselect} as="select" defaultValue="Select Creation">
                  <option disabled>Select Creation</option>                                
                  <option>Print Book and Ebook € 350</option>
                  <option>Print Book Only € 300</option>                  
                  <option>Ebook Only € 250</option>  
             </Form.Control>
            <DForms/>
             </Col> 
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <Footer />    
        </div>
    )
}
