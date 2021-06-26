import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import Forms from '../../components/Dashboard/forms'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function elitepkg() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Elite Package</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
                <Col md={6}>
             <Col className={styles2.xcontainer}>
                        
                <h3 className={styles2.homeheaderlabel2}>Elite Package € 16000</h3>
                <br/>
         
            <Row>
               <Col className={styles2.pkgdetails}>
                 <Row>
              <Col md={5}><b>Edit and Design</b><br/>
                      Paperback Format<br/>
                      Hardcover Format<br/>
                      E-Book Format<br/>
                      Data Entry<br/>
                      Copyediting<br/>
                      Indexing<br/>
                      Custom Text & Layout Formatting<br/>
                      2 Rounds Layout Revisions<br/>
                      Design Consultation<br/>
                      Advance Cover Design<br/>
                    </Col>
                    <Col md={4}>
                    <b>Post-publication features:</b><br/>
                      50 Paperback Copies<br/>
                      10 Hardback Copies<br/>
                      20 BookStub Cards<br/>
                      2 Leather-Bound<br/>
                      3 ISBN<br/>
                      Copyright Registration<br/>
                      Print Book Registration<br/>
                      Amazon Look Inside<br/>
                      Google Books Preview<br/>
                      Barnes and Noble Read Instantly<br/>
                      Worldwide Online Book Distribution<br/>
                      Online Book Sales Account<br/>
                      Royalties<br/>
                      100% Royalty Program 3 years<br/>
                      Book Return Program 12 Months<br/>
                    </Col>
                    <Col md={3}>
                    <b>Marketing services:</b><br/>
                      200 Bookmarks<br/>
                      200 Business Cards<br/>
                      200 Postcards<br/>
                      20 Posters<br/>
                      Advance Website<br/>
                      Press Release Campaign<br/>
                      Author Events<br/>
                      Social Media<br/>
                      Audio Book<br/>
                      Video Book<br/>
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
