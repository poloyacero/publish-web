import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/NavMenuDashboard.module.css'
import Forms from '../../components/Dashboard/forms'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function deluxepkg() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Deluxe Package</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
                <Col md={6}>
             <Col className={styles2.packagesdashcontainer}>
                        
                <h3 className={styles2.srvcsheaderlabel}>Deluxe Package  € 1500</h3>
                <br/>
         
            <Row>
               <Col className={styles2.pkgdetails}>
                 <Row>
              <Col md={5}><b>Edit and Design</b><br/>
                    Paperback Format<br/>
                    E-Book Format<br/>
                    Standard Text and Layout Formatting<br/>
                    1 Round Layout Revisions<br/>
                    </Col>
                    <Col md={4}>
                    <b>Post-publication features:</b><br/>
                    5 Paperback Copies<br/>
                    2 ISBN<br/>
                    Print Book Registration<br/>
                    Amazon Look Inside<br/>
                    Google Books Preview<br/>
                    Barnes and Noble Read Instantly<br/>
                    Worldwide Online Book Distribution<br/>
                    Online Book Sales Account<br/>
                    Royalties<br/>
                    </Col>
                    <Col md={3}>
                    <b>Marketing services:</b><br/>
                    20 Bookmarks<br/>
                    20 Business Cards<br/>
                    50 30 Bookmarks<br/>
                    30 Business Cards<br/>
                    30 Postcards<br/>
                    3Posters<br/>
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
