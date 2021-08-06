import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';
import React,{ useEffect } from "react";
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";
import swal from 'sweetalert'


export default function Emailconfirmation() {
  const router = useRouter()
  const axios = require('axios'); 
  var QueryString = require('querystring');
  
  
  useEffect(() => {
     
    handleVerification();
  
    }, [])

  const handleVerification = () => {
       
  axios.post('https://account.thepublishing.com/auth/confirmation', QueryString.stringify({
   
    email:router.query.email,
    code:router.query.code
     
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }).then(function (response:any) {                  
          swal("Email Verified!", "Thank you!", "success");  
          router.push('/')      
        })
        .catch(function (error:any) {
          console.log(error);
          swal("Code expired!", "Try again!", "error");    
        })
        .then(function () {
          // always executed
        });  
     
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Email Confirmation</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h2>Verifying your email...</h2>
              <br/><br/>
<p style={{textAlign:"center"}}>
<b>thePublishing</b><br/>
Bengtasvej 2 2900 Hellerup Denmark<br/>
</p>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
              <p></p>
              
              </Col>
            </Row>
          </Container>
        </Container>
        </PageLayout>
      <Footer />
    </div>
  )
}