import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";



export default function reportdashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Report</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row className={styles.ctext} >
             
             <Col md={8}>
               
               
               <Row className={styles2.dropdownmenucontainer}>
                <Col>
                
                 <Row>
                  <Col>             
                   <h4 className={styles2.dropheaderlabel2}>Please Select Report</h4>                        
                  </Col>      
                 </Row>
                      <br/>
                 <Row>  
                  <Col className={styles2.indentcheckbox}>
                      <Form.Check
                      type="checkbox"
                      label="Invoices"
                      name="reportlect"
                      id="invoices"
                    />  
                        <Form.Check
                      type="checkbox"
                      label="Billing Statement"
                      name="reportlect"
                      id="billingstatement"
                    /> 
                        <Form.Check
                      type="checkbox"
                      label="Ebook Sales"
                      name="reportlect"
                      id="ebooksales"
                    /> 
                        <Form.Check
                      type="checkbox"
                      label="Print Book Sales"
                      name="reportlect"
                      id="printbooksales"
                    /> 
                        <Form.Check
                      type="checkbox"
                      label="Compensation"
                      name="reportlect"
                      id="Compensation"
                    /> 
                        <Form.Check
                      type="checkbox"
                      label="Transactions"
                      name="reportlect"
                      id="transactions"
                    />                       
                </Col> 
                </Row>
               
              
                <Row>
                  <Col className={styles2.indentcheckbox}>  
                    <br/>           
                    <h4 className={styles2.homeheaderlabel}>Currency</h4>                        
                  </Col>      
                </Row>
                               
                <Row>
                <Col className={styles2.indentcheckbox}>
                    <Form.Check
                    type="radio"
                    label="Euro"
                    name="reportcurrency"
                    id="euro"
                  />  
                      <Form.Check
                    type="radio"
                    label="US Dollar"
                    name="reportcurrency"
                    id="usdollar"
                  /> 
                      <Form.Check
                    type="radio"
                    label="Australian Dollar"
                    name="reportcurrency"
                    id="australiandollar"
                  />            
                </Col> 
                </Row>
                <br/> 
                <Row>
               <Col className={styles2.indentcheckbox}> 
               <br/>            
                <h4 className={styles2.homeheaderlabel}>Date Range</h4> 
               
                <Row>
                
                 <Col md={5}>                
               <Form.Control
               type="date"              
               name="reportdate"
               
             />  </Col>
             <Col md={1} className="text-center">to</Col>
               <Col md={5}>
                 <Form.Control
               type="date"              
               name="reportdate"
               
             />               
             </Col> 
            
             </Row>                       
               </Col>  
               <br/>
              </Row>
               
              

                <br/> 
                <Row>
               <Col className={styles2.indentcheckbox}> 
               <br/>            
                <h4 className={styles2.homeheaderlabel}>Email Address</h4>
                <Row>
                  <Col md={8}  className={styleIn.accountinput}>                
                      <Form.Control
                      type="email"              
                      name="reportemail"
                      placeholder="Email address"
                    />     <br/>           
                        <Form.Control
                      type="email"              
                      name="reportemailre"
                      placeholder="Re-type Email address"
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
               </Col>  
               <br/>
               </Row>
               
             
               
                
            
              </Col>  
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
