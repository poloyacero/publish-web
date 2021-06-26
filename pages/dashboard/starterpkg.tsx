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

export default function starterpkg() {
    return (
        <div className={styles.container}>
      <Head>
        <title>Starter Package</title>
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
                        
                <h3 className={styles2.homeheaderlabel2}>Starter Package  € 900</h3>
                <br/>
         
            <Row>
               <Col>
                 <Row>
              <Col md={5}><b>Edit and Design</b><br/>
                    Paperback Format<br/>
                    E-Book Format<br/>
                    Standard Text and Layout Formatting<br/>
                    1 Round Layout Revisions<br/>
                    </Col>
                    <Col md={4}>
                    <b>Post-publication features:</b><br/>
                    3 Paperback Copies<br/>
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
                    50 Postcards<br/>
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
