import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function servicesdashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row className={styles.ctext} >
               <Sidebar/>
             <Col md={6}>
               
               <Row>
               <Col className={styles2.createcontainer}>             
                <h4 className={styles2.homeheaderlabel}>Editing</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles2.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Editing"
              name="editing"
              id="editing"
            />  
                <Form.Check
              type="checkbox"
              label="Editorial Assessment"
              name="editing"
              id="editorial"
            /> 
                <Form.Check
              type="checkbox"
              label="Line Editing"
              name="editing"
              id="linediting"
            /> 
                <Form.Check
              type="checkbox"
              label="Copy Editing"
              name="editing"
              id="copyediting"
            /> 
                <Form.Check
              type="checkbox"
              label="Proofreading"
              name="editing"
              id="proofreading"
            /> 
                <Form.Check
              type="checkbox"
              label="Indexing"
              name="editing"
              id="indexing"
            />   
             <Form.Check
              type="checkbox"
              label="Data Entry"
              name="editing"
              id="dataentry"
            />          
             <Form.Check
              type="checkbox"
              label="Text and Layout Format"
              name="editing"
              id="textandlayout"
            />                              
                </Col> 
                </Row>

                <Row>
               <Col className={styles2.createcontainer}>             
                <h4 className={styles2.homeheaderlabel}>Design</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles2.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Illustrations"
              name="design"
              id="illustration"
            />  
                <Form.Check
              type="checkbox"
              label="Book Cover Design"
              name="design"
              id="billingstatement"
            /> 
                <Form.Check
              type="checkbox"
              label="Book Interior Design"
              name="design"
              id="interiordesign"
            /> 
                <Form.Check
              type="checkbox"
              label="Hardback Upgrade"
              name="design"
              id="hardbackupgrade"
            /> 
                         
                </Col> 
                </Row>
                <Row>
               <Col className={styles2.createcontainer}>             
                <h4 className={styles2.homeheaderlabel}>Distribution</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles2.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Print Book Distribution"
              name="distribution"
              id="printbook"
            />  
                <Form.Check
              type="checkbox"
              label="Ebook Distribution"
              name="distribution"
              id="ebookdistribution"
            /> 
                <Form.Check
              type="checkbox"
              label="Copyright Registration"
              name="distribution"
              id="copyrightdistribution"
            /> 
                <Form.Check
              type="checkbox"
              label="Print Book Sales"
              name="distribution"
              id="isbn"
            /> 
                         
                </Col> 
                </Row>

                <Row>
               <Col className={styles2.createcontainer}>             
                <h4 className={styles2.homeheaderlabel}>Marketing</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles2.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Author Website"
              name="marketing"
              id="authorwebsite"
            />  
                <Form.Check
              type="checkbox"
              label="Audio Book"
              name="marketing"
              id="audiobook"
            /> 
                <Form.Check
              type="checkbox"
              label="Ebook Sales"
              name="marketing"
              id="ebooksales"
            /> 
                <Form.Check
              type="checkbox"
              label="Video Book"
              name="marketing"
              id="videobook"
            /> 
                <Form.Check
              type="checkbox"
              label="Press Release Compaign"
              name="marketing"
              id="pressrelease"
            /> 
                <Form.Check
              type="checkbox"
              label="Author Events"
              name="marketing"
              id="authorevents"
            />  
             <Form.Check
              type="checkbox"
              label="Print Advertisement"
              name="marketing"
              id="printads"
            />                             
                </Col> 
                </Row>
                <br/> <br/> <br/>  <br/> <br/> <br/> 

<Row className="form-group text-right">
<Col md={4}><Button className={styleIn.commonbutton}>Submit Request</Button></Col> <Col md={3}></Col><Col md={6}></Col>
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
