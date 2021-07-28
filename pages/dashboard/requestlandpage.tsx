
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function requestlandpage() {
  
    return (
        <div className={styles.container}>
      <Head>
        <title>Request Submitted</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.rqstcontainer}>
             
              <Col>
           <Row>
             <Col className={styles2.rqstheader}>Request Submitted</Col>
           </Row>
           <Row>
             <Col className={styles2.rqstmessage}>
               <br/> <br/>
             <p>Thank you for your submission of inquiries to The Publishing.</p>
             <p>We will get back to you with our offer in the shortest time possible.</p>
             <p>An email or one of our customer service will contact you.</p>
             </Col>
           </Row>
           <Row>
             <Col className={styles2.rqstreminder+" align-middle"}><b>Important reminder:</b> Please make sure all the account Information are correct and complete.</Col>
           </Row>
             </Col>
           
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
