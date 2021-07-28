import React,{useEffect} from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import styles from '../../styles/Home.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert'

export default function contactdashboard() {
  const [firstname, setFirstname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phonenumber, setPhonenumber] = React.useState('')
  const [subjectmsg, setSubjectmsg] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  
  useEffect(() => {
   initializedata();
  }, [])


  function initializedata(){
    setFirstname('Gabriel')
    setLastname('Balbuena')
    setEmail('balbuenagf@gmail.com')    
    setPhonenumber('423452344') 
    setSubjectmsg('User Chat') 
    console.log("data initialized")  
  }
  const handleSubmit = (e:any) => { 
    e.preventDefault()
    console.log('Sending...')    
    

  let data = {
      firstname,
      lastname,
      email,
      phonenumber,
      subjectmsg ,
      message     
    }
  fetch('/api/userMail', {
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
        setSubmitted(true)
        setFirstname('')
        setEmail('')
        setLastname('')
        setPhonenumber('') 
        setSubjectmsg('')
        setMessage('')   
        swal("Message sent!", "Thank You!", "success");
       }
     
    })
  }
    return (
        <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer}>
             
                <Col>
                <h3 className={styles2.dropheaderlabel2}>Contact</h3>
                <br></br>
                <Form className={styles.form}>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
            <Row><Col>
                <Row>  
              <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  First Name
                </Form.Text>
                <Form.Control type="text"  onChange={(e)=>{setFirstname(e.target.value)}} name="firstname"/>
                </Col>
                 <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Last Name
                </Form.Text>
                <Form.Control type="text"  onChange={(e)=>{setLastname(e.target.value)}} name="lastname"  />
                </Col>                          
            </Row>
            <Row>
              <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Email
                </Form.Text>
                <Form.Control type="email"  onChange={(e)=>{setEmail(e.target.value)}} name="email"  />
              </Col>
                
                <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                  Phone
                </Form.Text>
                <Form.Control type="tel" onChange={(e)=>{setPhonenumber(e.target.value)}} name="phonenumber"/>
                </Col>
            </Row>
           <Row> <Col>
                <Form.Text className="text-muted" style={{paddingBottom: '5px'}}>
                 Message
                </Form.Text>
                <Form.Control  as="textarea" rows={5}   onChange={(e)=>{setMessage(e.target.value)}} name="message"/>
                <p></p>
                <Button className={styles.sendButton} variant="primary" type="submit" onClick={(e)=>{handleSubmit(e)}}>SUBMIT</Button>
                </Col></Row>
            
            </Col></Row>
            </Form.Group>
            </Form>
            <Row className={styles.ctext}>
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
              <h1>
               +45 2090 1011
              </h1>             
              
              </Col>
            </Row>
              <br/> <br/> <br/>
             </Col>
           
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
