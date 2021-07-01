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
export default function emaildashboard() {
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
        swal("Good job!", "You clicked the button!", "success");
       }
     
    })
  }
    return (
        <div className={styles.container}>
      <Head>
        <title>Email</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard className={styles.home}/> 
   
        <Container fluid>
          <Container  className={styles.ctext}>
            <Row className={styles2.dropdownmenucontainer}>
             
                <Col>
                <h3 className={styles2.dropheaderlabel2}>Email</h3>
                <br></br>
                <Row className="form-group text-left">
              <Col ><Form.Control as="textarea" rows={15} onChange={(e)=>{setMessage(e.target.value)}} name="message"/> </Col>
                 </Row>
                 <br/> <br/> 
              <Row className="form-group text-left">
            <Col md={2}><Button className={styles2.dashsubmitbutton} onClick={(e)=>{handleSubmit(e)}}>Send</Button></Col>
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
