import React from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/packagesdashboard/packagesdashboard.module.css'
import Forms from '../../components/Dashboard/packagesdashboard/Deluxeform'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";


export default function deluxepkg() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Deluxe Package</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard/> 
   
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
                <Col md={8}>
             <Col className={styles.packagescontainer}>
                        
                <h3 className={styles.packagesheaderlabel2}>Deluxe Package  € 1900</h3>
                <br/>
         
            <Row>
               <Col className={styles.pkgdetails}>
                 <Row>
              <Col md={4} className={styles.pkgdetails2}><b>Edit and Design</b><br/>
                    Paperback Format<br/>
                    E-Book Format<br/>
                    Standard Text & Layout Formatting<br/>
                    1 Round Layout Revisions<br/>
                    </Col>
                    <Col md={4} className={styles.pkgdetails2}>
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
                    <Col md={3} className={styles.pkgdetails2}>
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
