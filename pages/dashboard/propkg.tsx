import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard.module.css'
import Forms from '../../components/Dashboard/forms'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


export default function propkg() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Pro Package</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
                <Col md={6}>
             <Col className={styles2.createcontainer}>
                        
                <h3 className={styles2.homeheaderlabel2}>Pro Package  € 4000</h3>
                <br/>
         
            <Row>
               <Col className={styles2.pkgdetails}>
                 <Row>
              <Col md={5}><b>Edit and Design</b><br/>
                    Paperback Format<br/>
                    Hardcover Format<br/>
                    E-Book Format<br/>
                    Data Entry<br/>
                    Copy Editing<br/>
                    Custom Text & Layout Formatting<br/>
                    2 Rounds Layout Revisions<br/>
                    Design Consultation<br/>
                    Basic Cover Design<br/>
                    </Col>
                    <Col md={4}>
                    <b>Post-publication features:</b><br/>
                      15 Paperback Copies<br/>
                      3 Hardback Copies<br/>
                      10 BookStub Cards<br/>
                      3 ISBN<br/>
                      Copyright Registration<br/>
                      Print Book Registration<br/>
                      Amazon Look Inside<br/>
                      Google Books Preview<br/>
                      Barnes and Noble Read Instantly<br/>
                      Worldwide Online Book Distribution<br/>
                      Online Book Sales Account<br/>
                      Royalties<br/>
                      Book Return Program 12 Months<br/>
                    </Col>
                    <Col md={3}>
                    <b>Marketing services:</b><br/>
                      50 Bookmarks<br/>
                      50 Business Cards<br/>
                      50 Postcards<br/>
                      5 Posters<br/>
                      Basic Web Design<br/>
                      Press Release Campaign<br/>
                    </Col>
                    </Row>
                    </Col>
            </Row>
            <Forms/>
             </Col> 
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
