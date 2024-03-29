import Link from 'next/link';
import Image from 'next/image'
import swal from 'sweetalert';
import React,{useEffect,useState} from 'react'
import {  Button, Col, Container, Form, FormControl, InputGroup, Nav, Row } from 'react-bootstrap';

import styles from './FooterMenu.module.css';
import axios from 'axios';


interface FooterProps {}

  const Footer = ({ ...props }: FooterProps) => {
  const [firstname, setFirstname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phonenumber, setPhonenumber] = React.useState('')
  const [subjectmsg, setSubjectmsg] = React.useState('Subject')
  const [subjects, setSubjects] = React.useState('')
  const [isloading, setIsloading] = React.useState(false)
  const [noSubject, setNosubject] = React.useState(true)
  const [islogin, setIslogin] = useState(""); 
  
  
  const handleSubject = () => { 
    if(subjectmsg!=="Subject"){ 
     
    setSubjects(subjects+" "+subjectmsg+",");
    setNosubject(false)
  }
    console.log("subjects:",subjects)
  }


  const clearSubject = () => { 
    setSubjects("")
    setNosubject(true)
  }


   useEffect(() => {
      
    handleSubject(); 
  
   }, [subjectmsg])

  const handleSubmit = (e:any) => { 
    if(firstname!==""&&email!==""&&phonenumber!==""){
    e.preventDefault()
    console.log('Sending...') 

 setIsloading(true)
  let data = {
      firstname,
      lastname,
      email,
      phonenumber,
      subjects      
    }
  fetch('/api/footerMail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      console.log(data)
      if (res.status === 200) {
        console.log('Response succeeded!')
        setFirstname('')
        setEmail('')
        setLastname('')
        setPhonenumber('') 
        setSubjectmsg('')    
        swal("Mail Sent!", "Thank you!", "success").then((success)=>{
          setIsloading(false)
        })
      }
     
    })
  }else{
    swal("Please fill form", "Thank you!", "error");
  }
  }
  useEffect(() => {
  
  getuser();
   
  }, [islogin])
  async function getuser () {
      
      let webApiUrl = 'https://account.thepublishing.com/auth/info';
      let tokenStr = localStorage.getItem("AccessToken");
      
      try {
        const response = await axios.get(webApiUrl, 
          { headers: {"Authorization" : `Bearer ${tokenStr}`} 
         
        });
              
        setIslogin("true")
      } catch (error) {
        console.error(error);
      }
      };


  return (
   
    <Container fluid style={{background: '#f0e3d5'}}>
       {!islogin? ( 
        <>
      <Container style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row className="justify-content-md-center">
          <Col md={'auto'} className={styles.left}>
         <Nav.Link href="/pricing"><h1 className={styles.footerh1}>Let's Create a Book</h1></Nav.Link>
            <Form className={styles.form} id="mailform">
              <Form.Group className={styles.formGroup}>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  First Name
                </Form.Text> */}
                <Form.Control type="text" className={styles.footerinput} placeholder="First Name" value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} name="name"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Last Name
                </Form.Text> */}
                <Form.Control type="text" className={styles.footerinput} placeholder="Last Name" value={lastname} onChange={(e)=>{setLastname(e.target.value)}}  name="lastname"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Email
                </Form.Text> */}
                <Form.Control type="email" className={styles.footerinput} placeholder="Email" value={email}  onChange={(e)=>{setEmail(e.target.value)}} name="email"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                  Phone
                </Form.Text> */}
                <Form.Control type="tel" className={styles.footerinput}  value={phonenumber} placeholder="Phone"onChange={(e)=>{setPhonenumber(e.target.value)}} name="phonenumber"/>
                <Row><Col style={{padding:0}}><br/></Col></Row>
                {/* <Form.Text style={{paddingBottom: '5px'}}>
                 Subject
                </Form.Text> */}
                {/* <Form.Control type="text" className={styles.footerinput} placeholder="Subject" /> */}
                <Form.Control className={styles.footerinputselect} as="select" defaultValue="Select" onChange={(e)=>{setSubjectmsg(e.target.value)}} name="subjectmsg">
                  <option disabled>Subject</option>
                  <optgroup label="General Inquiries">                                  
                  <option>Services</option>
                  <option>Book Printing</option>                  
                  <option>Book Distribution</option>
                  <option>Book Order</option>
                  <option>Editorial</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Royalties</option>
                  <option>Submission Inquiries</option>
                  </optgroup>
                  <optgroup label="Manuscript Status?">
                  <option>Complete and Edited</option>
                  <option>Complete but not edited</option>
                  <option>Ongoing</option>
                  <option>About to Start</option>
                  </optgroup>
                  <optgroup label="Type of Book">
                  <option>Childrens Book</option>
                  <option>Art and Photography</option>
                  <option>Biography and Memoir</option>
                  <option>Fiction</option>
                  <option>Non Fiction</option>
                  <option>Cook Book</option>
                  <option>Health and Fitness</option>
                  <option>Crafts and Hobbies</option>
                  <option>Home and Garden</option>
                  <option>Travel and Adventure</option>
                  <option>Entertainment</option>
                  <option>Family and Relationship</option>
                  <option>Religion</option>
                  </optgroup>

                </Form.Control>
                <Row><Col><br/><p className={styles.copyright}>{subjects}
                {noSubject? <span> </span>: <span onClick={()=>{clearSubject()}}>(clear)</span>}</p></Col></Row>
                <Row><Col className={styles.checkboxlabel}><Form.Check type="checkbox"label="I agree to the Privacy Policy and Terms and Condition" name="selectstyles"  id="styles1"/></Col>
               </Row>
                   <br/>  
                   {isloading?  <Button className={styles.sendmail} >LOADING...</Button>: <Button className={styles.sendmail} onClick={(e)=>{handleSubmit(e)}}>SEND MAIL</Button>}           
               
              </Form.Group>
            </Form>
              
          </Col>
        </Row>
        <Row><Col><br/><br/></Col></Row>
      
        <Row className="justify-content-md-center">
             <Col>
                  <Row className={styles.center}>
                  <Col className={styles.footerlink} ><Link href="/about">About</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/contact">Contact</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/privacy-policy">Privacy</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/terms-of-use">Terms</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/services">Services</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/distribution">Distribution</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/packages">Packages</Link></Col>
                  <Col className={styles.footerlink} ><Link href="/add-on">Add on</Link></Col>                  
                  <Col className={styles.footerlink} ><Link href="/illustration-services">Illustrations</Link></Col>
                  </Row>
             </Col>
        </Row> <br/><br/>
               <Row className={styles.socialmediawrapper}>
               
                 <Col className={styles.socialmedialink} > <a href="https://www.facebook.com/thepublishingaps" className="fa fa-facebook"></a></Col>                
                 <Col className={styles.socialmedialink} > <a href="https://www.linkedin.com/company/the-publishing" className="fa fa-linkedin"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="https://www.youtube.com/channel/UClmZY_nzJMTwEfcJDzj3_Yw" className="fa fa-youtube"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="https://www.instagram.com/thepublishing.admin" className="fa fa-instagram"></a></Col>
                
            
           </Row>
           <br/><br/>
              <Row className="justify-content-md-center">
                <Col>
                <Row className={styles.center}><Col className={styles.footerlink}>
                <Link href="/"><a><Image src="/logo.png" width="125%" height="30px" /></a></Link>
              <div className={styles.copyright}>
              <p>CVR-nr 42434655 Copyright © All Rights Reserved ThePublishing</p>
            </div> 
            </Col></Row>  
            </Col></Row>  
      </Container>
      </>
      ):( 
        <>
        <Container className="container" style={{marginTop: '30px', marginBottom: '30px'}} >
        <Row className="justify-content-md-center">
          <Col md={'auto'} className={styles.left}>
           
          </Col>
        </Row>
        <Row><Col><br/><br/></Col></Row>
      
        <Row className="justify-content-md-center">
             <Col><Row className={styles.center}>
                <Col className={styles.footerlink} ><Link href="/about">About</Link></Col>
                <Col className={styles.footerlink} ><Link href="/contact">Contact</Link></Col>
                <Col className={styles.footerlink} ><Link href="/privacy-policy">Privacy</Link></Col>
                <Col className={styles.footerlink} ><Link href="/terms-of-use">Terms</Link></Col>
                <Col className={styles.footerlink} ><Link href="/services">Services</Link></Col>
                <Col className={styles.footerlink} ><Link href="/distribution">Distribution</Link></Col>
                <Col className={styles.footerlink} ><Link href="/packages">Packages</Link></Col>
                <Col className={styles.footerlink} ><Link href="/add-on">Add on</Link></Col>                
                <Col className={styles.footerlink} ><Link href="/illustration-services">Illustrations</Link></Col>
                </Row>
                </Col>
               </Row>
               <br/><br/>
               <Row className={styles.socialmediawrapper}>
               
                 <Col className={styles.socialmedialink} > <a href="https://www.facebook.com/thepublishingaps" className="fa fa-facebook"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="#" className="fa fa-twitter"></a></Col> 
                 <Col className={styles.socialmedialink} > <a href="#" className="fa fa-linkedin"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="#" className="fa fa-youtube"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="#" className="fa fa-instagram"></a></Col>
                 <Col className={styles.socialmedialink} > <a href="#" className="fa fa-pinterest"></a></Col>
            
           </Row>
           <br/><br/>
              <Row className="justify-content-md-center">
                <Col>
                <Row className={styles.center}><Col className={styles.footerlink}>
                <Link href="/"><a><Image src="/logo.png" width="125%" height="30px" /></a></Link>
              <div className={styles.copyright}>
              <p>CVR-nr 42434655 Copyright © All Rights Reserved ThePublishing</p>
            </div> 
            </Col></Row>  
            </Col></Row>  
      </Container>
      </>

      )}
    </Container>
   
  );
}

export default Footer;