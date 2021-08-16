import Link from 'next/link';
import React from 'react';
import { Button, Col,Container,Row,Form } from 'react-bootstrap';
import TheModal from '../TheModal';
import styles from './Package.module.css';
import swal from 'sweetalert'

interface PackageProps {
  title: string;
  price: number;
  children: any;
  width: number;
  currency?: string;
  onHide?:any;
}

  const Package = ({ children, ...props }: PackageProps) => {
  const [modalShowCreate, setModalShowCreate] = React.useState(false);
  const [modalShowSignin, setModalShowSignin] = React.useState(false);

  const [firstname, setFirstname] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [packagevalue, setPackagevalue] = React.useState('')
  const [submitted, setSubmitted] = React.useState(false)
  const [isloading, setIsloading] = React.useState(false)    
  
  function handlepkg1(){
    setModalShowSignin(true)
    setPackagevalue('Starter<br/>€ 900<br/><br/>Edit and Design <br/>Paperback Format <br/>E-Book Format <br/>Standard Text and Layout Formatting <br/>1 Round Layout Revisions <br/>Post-publication features: <br/>3 Paperback Copies <br/>2 ISBN <br/>Print Book Registration <br/>Amazon Look Inside <br/>Google Books Preview <br/>Barnes and Noble Read Instantly <br/>Worldwide Online Book Distribution <br/>Online Book Sales Account<br/>Royalties <br/>Marketing services: <br/>20 Bookmarks <br/>20 Business Cards <br/>50 Postcards');
    }
  function handlepkg2(){
    setModalShowSignin(true)
    setPackagevalue('Deluxe<br/>€ 1500<br/><br/>Edit and Design <br/>Paperback Format <br/>E-Book Format <br/>Standard Text and Layout Formatting <br/>1 Round Layout Revisions <br/>Post-publication features: <br/>5 Paperback Copies <br/>2 ISBN <br/>Print Book Registration <br/>Amazon Look Inside <br/>Google Books Preview <br/>Barnes and Noble Read Instantly <br/>Worldwide Online Book Distribution <br/>Online Book Sales Account<br/>Royalties <br/>Marketing services: <br/>30 Bookmarks <br/>30 Business Cards <br/>50 Postcards');
  }
  function handlepkg3(){
    setModalShowSignin(true)
    setPackagevalue('Pro<br/>€ 4000<br/><br/>Edit and Design <br/>Paperback Format <br/>Hardcover Format <br/>E-Book Format <br/>Data Entry<br/>Custom Text & Layout Formatting<br/>2 Rounds Layout Revisions<br/>Design Consultation<br/>Basic Cover Design<br/><b>Post-publication features:</b><br/>15 Paperback Copies<br/>3 Hardback Copies<br/>10 BookStub Cards<br/>3 ISBN<br/>Copyright Registration<br/>Print Book Registration<br/>Amazon Look Inside<br/>Google Books Preview<br/>Barnes and Noble Read Instantly<br/>Worldwide Online Book Distribution<br/>Online Book Sales Account<br/>Royalties<br/>Book Return Program 12 Months<br/><b>Marketing services:</b><br/>50 Bookmarks<br/>50 Business Cards<br/>50 Postcards<br/>5 Posters<br/>Basic Web Design<br/>Press Release Campaign');
  }
  function handlepkg4(){
    setModalShowSignin(true)
    setPackagevalue('Elite<br/>€ 16000<br/><br/>Edit and Design<br/>Paperback Format<br/>Hardcover Format<br/>E-Book Format<br/>Data Entry<br/>Copyediting<br/> Indexing<br/>Custom Text & Layout Formatting<br/>2 Rounds Layout Revisions<br/>Design Consultation<br/>Advance Cover Design<br/>Post-publication features:<br/>50 Paperback Copies<br/>10 Hardback Copies<br/>20 BookStub Cards<br/>2 Leather-Bound<br/>3 ISBN<br/>Copyright Registration<br/>Print Book Registration<br/>Amazon Look Inside<br/>Google Books Preview<br/>Barnes and Noble Read Instantly<br/>Worldwide Online Book Distribution<br/>Online Book Sales Account<br/>Royalties<br/>100% Royalty Program 3 years<br/>Book Return Program 12 Months<br/>Marketing services:<br/>200 Bookmarks<br/>200 Business Cards<br/> 200 Postcards<br/>20 Posters<br/>Advance Website<br/>Press Release Campaign<br/>Author Events<br/>Social Media<br/>Audio Book<br/>Video Book');
  }
  const handleSubmit = (e:any) => { 
    if(firstname!==""&&email!==""){
    e.preventDefault()
 setIsloading(true)

  let data = {
      firstname,
      lastname,
      email,
      packagevalue      
    }
  fetch('/api/getPackage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setFirstname('')
        setEmail('')
        setLastname('')
        setPackagevalue('')
        swal("Sent!", "Thank You!", "success");
        setIsloading(false)
      }
      setModalShowSignin(false);
      setIsloading(false)
    })
  }else{
    swal("Please fill form", "Thank You!", "error");
  }
  }
  return (
    <Col className={styles.package} md={props.width}>
      <div className={styles.bg}>
        <h3>{props.title}</h3>
        <span>{props.currency + ' ' + props.price}</span>
        <div className={styles.packageContent}>{children}</div>
        {props.title==="Starter"? (
          <Button className={styles.button} onClick={() => handlepkg1()}>Get Package</Button>
        ):props.title==="Deluxe"?(
          <Button className={styles.button} onClick={() => handlepkg2()}>Get Package</Button>
        ):props.title==="Pro"?(
          <Button className={styles.button} onClick={() => handlepkg3()}>Get Package</Button>
        ):props.title==="Elite"?(
          <Button className={styles.button} onClick={() => handlepkg4()}>Get Package</Button>
        ):(
         <></>

        )
        
        }
        
        <TheModal 
title="Create an Account"
show={modalShowCreate}
onHide={() => setModalShowCreate(false)}
>
<Container>
  <Row>
    <Col md={{ span: 12, offset: 0 }}>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className={styles.label}>Contact Name</Form.Label>
          <Form.Control className={styles.inputnav1} type="text" name="contact-name"/>
        </Col>
      </Form.Group>
    </Col>
    <Col md={{ span: 12, offset: 0 }}>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className={styles.label}>Email</Form.Label>
          <Form.Control className={styles.inputnav1} type="email" name="email"/>
        </Col>
      </Form.Group>
    </Col>
    <Col md={{ span: 12, offset: 0 }}>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className={styles.label}>Password</Form.Label>
          <Form.Control className={styles.inputnav1} type="password" name="password"/>
        </Col>
      </Form.Group>
    </Col>
    <Col md={{ span: 12, offset: 0 }}>
      <Form.Group as={Row}>
        <Col md={6}>
          <Form.Label className={styles.label}>Validate Password</Form.Label>
          <Form.Control className={styles.inputnav1} type="password" name="validate"/>
        </Col>
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col className={styles.forgotpasslink1} md={12}>   
        <br/>                                
          <Button data-dismiss-modal onClick={() => setModalShowCreate(true)} className={styles.createButton}>Create Account </Button>
        </Col>
       
      </Form.Group>
    </Col>
  </Row>
</Container>
</TheModal>
<TheModal 
title="Get in touch"
size="sm"
show={modalShowSignin}
onHide={() => setModalShowSignin(false)}
>      
<Container>
  <Row className="justify-content-md-center">
    <Col>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className={styles.label}>First name</Form.Label>
          <Form.Control required className={styles.inputnav} value={firstname}  onChange={(e)=>{setFirstname(e.target.value)}} type="text" name="name"/>
        </Col>
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className={styles.label}>Last name</Form.Label>
          <Form.Control className={styles.inputnav} value={lastname}  onChange={(e)=>{setLastname(e.target.value)}} type="text" name="message"/>                  
        </Col>
       
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col md={12}>
          <Form.Label className={styles.label}>Email</Form.Label>
          <Form.Control required className={styles.inputnav} value={email}  onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email"/>                  
        </Col>
       
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col md={12}> 
        {isloading?<Button className={styles.signinButton} >Loading...</Button>:<Button onClick={props.onHide} className={styles.signinButton} onMouseDown={(e)=>{handleSubmit(e)}}>Get Package</Button>}                                 
          
        </Col>
       
      </Form.Group>
    </Col>
    <Col md={{ span: 12, offset: 0 }}>    
      
     
    </Col>
    <Col md={{ span: 12, offset: 0 }}>
      
        <Col className={styles.forgotpasslink} md={12}>                                   
         
          <hr></hr>
        </Col>
       
     
    </Col>
    <Col md={{ span: 12, offset: 0 }}>
      
        <Col className={styles.haveaccount} md={12}>                                   
          Do you have an account?
        </Col>               
     
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col className={styles.forgotpasslink} md={12}>   
        <br/>                                
          <Button data-dismiss-modal onClick={() => setModalShowCreate(true)} className={styles.createButton}>Create Account </Button>
        </Col>
       
      </Form.Group>
    </Col>
  </Row>
</Container>
</TheModal>
      </div>
    </Col>
  );
}

export default Package;