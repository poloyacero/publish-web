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

export default function ordersdashboard() {
    return (
        <div className={styles.container}>
      <Head>
        <title>orders</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/>
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer} >
             
                <Col>
                <Row className="text-left">
                <h4 className={styles2.dropheaderlabel2}>Book Order</h4>
                </Row>
                <br></br>
                <Row className="text-center">
                  <Col md={2} className={styles2.documentsheader} >Title</Col>
                  <Col md={2} className={styles2.documentsheader}>ISBN</Col>
                  <Col md={1} className={styles2.documentsheader}>Author</Col>
                  <Col md={2} className={styles2.documentsheader}>Published</Col>
                  <Col md={1} className={styles2.documentsheader}>Quantity</Col>
                  <Col md={2} className={styles2.documentsheader}>Order</Col>
                  <Col md={1} className={styles2.documentsheader}>Status</Col>
                  <Col md={1} className={styles2.documentsheader}>Submit</Col>
               
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}>The Super Hero</Col>
                  <Col md={2} className={styles2.documentscolborder}>978-3-16-148410-0</Col>
                  <Col md={1} className={styles2.documentscolborder}>George O.</Col>
                  <Col md={2} className={styles2.documentscolborder}>Sep-10-2021</Col>
                  <Col md={1} className={styles2.documentscolborder}>10</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Add</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Cancel</Col>
                  <Col md={1} className={styles2.documentscolborder}>Ordered</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Submit Order</Col>                  
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Add</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Cancel</Col>
                  <Col md={1} className={styles2.documentscolborder}>Cancelled</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Submit Order</Col>                  
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Add</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Cancel</Col>
                  <Col md={1} className={styles2.documentscolborder}>Pending</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Submit Order</Col>                  
                 </Row>
                 <Row className="text-center">
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={2} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Add</Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Cancel</Col>
                  <Col md={1} className={styles2.documentscolborder}></Col>
                  <Col md={1} className={styles2.documentsviewpdf}>Submit Order</Col>                  
                 </Row>
                 <br></br><br></br>
                 <Row className="text-left">
                <h4 className={styles2.homeHeaderlabel2}>Address Book</h4>
                </Row>
                <br></br>
                <Row>
                  <Col>
                 
                  <Row>
                    <Col className={styles2.documentsheader}>
                    Shipping Address
                    </Col> 
                  </Row>
                  <Row>
                    <Col className={styles2.documentscolborder}>
                    Full Name<br/>
                    Business Name<br/>
                    Street Addrdess (Apartment/Flat number)<br/>
                    City, State and ZIP code<br/>
                    Country
                    </Col>
                  </Row>
                  
                  </Col>
                  <Col md={1}></Col>
                  <Col>
                  
                  <Row>
                    <Col className={styles2.documentsheader}>
                    Return Address
                    </Col>
                  </Row>
                  <Row>
                    <Col className={styles2.documentscolborder}>
                    Full Name<br/>
                    Business Name<br/>
                    Street Addrdess (Apartment/Flat number)<br/>
                    City, State and ZIP code<br/>
                    Country
                    </Col>
                  </Row>
                  </Col>
                </Row>
                <br/>
                <Row className="text-left">
            <Col><Button className={styles2.dashsavebutton}>Edit</Button></Col> 
            </Row>
            
             </Col>
           
            </Row>
            <br></br> <br></br>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
