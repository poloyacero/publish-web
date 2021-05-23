import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap';
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>Contact Us</h1>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
          <Form className={styles.form}>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
            <Row><Col>
              
            <Row>  
              <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  First Name
                </Form.Text>
                <Form.Control type="text" />
                </Col>
                 <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Last Name
                </Form.Text>
                <Form.Control type="text"  />
                </Col>                          
            </Row>
            <Row>
              <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Email
                </Form.Text>
                <Form.Control type="email"  />
              </Col>
                
                <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Phone
                </Form.Text>
                <Form.Control type="text" />
                </Col>
            </Row>
           <Row> <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                 Message
                </Form.Text>
                <Form.Control  as="textarea" placeholder="Message" rows={5}/>
                <p></p>
                <Button className={styles.sendButton} variant="primary" type="submit">SUBMIT</Button>
                </Col></Row>
            
            </Col></Row>
            </Form.Group>
            </Form>
            <Row>
              <Col>
              <p><b>Office Hours</b></p>
              <p>
               8:30 am-5:00 pm<br/>
               Denmark<br/>
               Mon-Fri<br/>
              </p>             
              
              </Col >
          
              <Col>
              <p><b>Office and Mailing Address</b></p>
              <p>
               Bengtasvej 2<br/>
               2900 Hellerup<br/>
               Denmark<br/>
              </p>             
              
              </Col>
           
              <Col>
              <p><b>Inquiries and Customer Service</b></p>
              <p>
               +45 2090 1011
              </p>             
              
              </Col>
            </Row>
          </Container>
        </Container>
        </PageLayout>
      <Footer />
    </div>
  )
}