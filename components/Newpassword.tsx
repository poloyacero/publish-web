import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';
import swal from 'sweetalert'
import styles from './Newpassword.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap';
import Footer from "../components/Footer";
import React,{ useEffect,useState } from "react";
import { useRouter } from 'next/router'

export default function Newpassword() {
  const router = useRouter()
  const axios = require('axios'); 
  var QueryString = require('querystring');
  const [emailData, setEmailData] = useState("");
  const [codeData, setCodeData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [valPasswordData, setValPasswordData] = useState("");

  const handleSubmitPassRec = (event:any) => {
    event.preventDefault();
    handlePassRec();    
  };
  const handlePassRec = () => {
    if(passwordData===valPasswordData){    
  
    axios.post('https://account.thepublishing.com/auth/reset-password', QueryString.stringify({
    password:passwordData,
    email:router.query.email,
    code:router.query.code
     
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }).then(function (response:any) {
          
          swal("Password Changed!", "Thank you!", "success").then(success => {
            if (success) {
              console.log(success);
              router.push("/logged_in")
            }
          })             
        })
        .catch(function (error:any) {
          console.log(error);
          swal("Code expired!", "Try again!", "error");    
        })
        .then(function () {
          // always executed
        });  
      } else{
        swal("Password did not match!", "Try again", "error");
      }
  };
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Reset Password</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
           
          </Container>
        </Container>
        <Container fluid>
          <Container className={styles.newpasscontainer}>
          <Form onSubmit={handleSubmitPassRec} >
        <Form.Group as={Row} className={styles.formGroup}>
            <Col className={styles.forgotsection}>
           
              <Form.Group as={Row}>
                <Col className={styles.centered}>
               
                  <br/>
                  <h3>Create New Password</h3>
                  <br/>
                  
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" required className={styles.inputnav} value={passwordData} onChange={(e)=>{setPasswordData(e.target.value)}} name="password"/>
                  <p className={styles.labelforgot}>Must be at least 8 characters</p>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control required type="password" className={styles.inputnav} value={valPasswordData} onChange={(e)=>{setValPasswordData(e.target.value)}} name="password"/>
                  <p className={styles.labelforgot}>Both passwords must match.</p>
              <br/>
                  <Button type="submit"  className={styles.sendButton}>Reset Password</Button>
                  
                  <Col>
                  <br/><br/>                 
            </Col>
                </Col>
            
              </Form.Group>
            </Col>
            
            
          </Form.Group>
          </Form>
          </Container>
        </Container>
        </PageLayout>
      <Footer />
    </div>
  )
}