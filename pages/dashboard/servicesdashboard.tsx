import React,{useRef} from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/Nav'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/servicesdashboard.module.css'
import styles2 from '../../components/Dashboard/Dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button,Image,Modal} from 'react-bootstrap'
import FooterDashboard from "../../components/FooterDashboard";
import swal from 'sweetalert';
import { AnyARecord } from 'dns'
import Imageupload from "../../components/Dashboard/UploadImageToS3WithNativeSdk"




export default function servicesdashboard() {
  const [modalShow, setModalShow] = React.useState(false);
  function Mypopupmessage(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  

    return (
        <div className={styles.container}>
      <Head>
        <title>Services</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard/> 
      
        <Container fluid>
          <Container>
            <Row>
               <Sidebar/>
             <Col md={8}>

             <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>BOOK DETAILS</h4>                        
               </Col>      
               </Row>

               <Row>
                <Col className={styles.indentcheckbox}> 
                <Mypopupmessage show={modalShow} onHide={() => setModalShow(false)}/>              
               <Form.Control className={styleIn.accountinput} type="text" defaultValue="BOOK TITLE"/>
               <span className={styles.spannotes}>If you do not yet have a title for your work, please put in Untitled</span> 
               </Col>
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
               <Form.Group>
            <br/>
           <div className={styleIn.fileinputs}> 
          <div className={styleIn.fakefile}><Row><Col className={styleIn.formcolbutton1}><Image src="/img/services/upload-manuscript.png" width="auto" height="auto" /></Col><Col className={styleIn.formcolbutton2}><Button className={styleIn.submitbuttondashboard} onClick={() => setModalShow(true)}>Upload Manuscript</Button></Col></Row></div>
          <Form.Control type="file" className={styleIn.formfile} id="file-id" />
           <br/>
           
          </div>
          <span className={styles.spannotes2}>File uploaded should not be more than 100MB</span>
          </Form.Group>
          <br/>
          </Col>
          </Row>
         
          <Row>
            <Col className={styles.indentcheckbox}>
            <p>General information about your book.</p>
            <Form.Control  as="textarea" rows={15} defaultValue="Book Synopsis"/>
            </Col>
          </Row>
          <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Packages</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
                <br/>  
                                     
                <Form.Check
              type="checkbox"
              label="Starter"
              name="editing"
              id="linediting"
            /> 
            <Form.Check
              type="checkbox"
              label="Deluxe"
              name="editing"
              id="developmentalediting"
            /> 
            <Form.Check
              type="checkbox"
              label="Pro"
              name="editing"
              id="contentediting"
            /> 
                <Form.Check
              type="checkbox"
              label="Elite"
              name="editing"
              id="copyediting"
            />     
                                       
                </Col> 
                </Row>

               <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Editing</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
                <br/>  
                         
                <Form.Check
              type="checkbox"
              label="Editorial Assessment"
              name="editing"
              id="editorial"
            /> 
                <Form.Check
              type="checkbox"
              label="Line Editing"
              name="editing"
              id="linediting"
            /> 
            <Form.Check
              type="checkbox"
              label="Developmental Editing"
              name="editing"
              id="developmentalediting"
            /> 
            <Form.Check
              type="checkbox"
              label="Content Editing"
              name="editing"
              id="contentediting"
            /> 
                <Form.Check
              type="checkbox"
              label="Copy Editing"
              name="editing"
              id="copyediting"
            /> 
                <Form.Check
              type="checkbox"
              label="Proofreading"
              name="editing"
              id="proofreading"
            /> 
                <Form.Check
              type="checkbox"
              label="Indexing"
              name="editing"
              id="indexing"
            />   
             <Form.Check
              type="checkbox"
              label="Data Entry"
              name="editing"
              id="dataentry"
            />          
                                       
                </Col> 
                </Row>

                <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Design</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Illustrations"
              name="design"
              id="illustration"
            />  
                <Form.Check
              type="checkbox"
              label="Book Cover Design"
              name="design"
              id="billingstatement"
            /> 
                <Form.Check
              type="checkbox"
              label="Book Interior Design"
              name="design"
              id="interiordesign"
            /> 
                <Form.Check
              type="checkbox"
              label="Hardback Upgrade"
              name="design"
              id="hardbackupgrade"
            /> 
             <Form.Check
              type="checkbox"
              label="Text and Layout Format"
              name="editing"
              id="textandlayout"
            />   
                         
                </Col> 
                </Row>
                <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Distribution</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Print Book Distribution"
              name="distribution"
              id="printbook"
            />  
                <Form.Check
              type="checkbox"
              label="Ebook Distribution"
              name="distribution"
              id="ebookdistribution"
            /> 
                <Form.Check
              type="checkbox"
              label="Copyright Registration"
              name="distribution"
              id="copyrightdistribution"
            /> 
                <Form.Check
              type="checkbox"
              label="Print Book Sales"
              name="distribution"
              id="isbn"
            /> 
                         
                </Col> 
                </Row>

                <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Marketing</h4>                        
               </Col>      
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
                <br/>
               <Form.Check
              type="checkbox"
              label="Author Website"
              name="marketing"
              id="authorwebsite"
            />  
                <Form.Check
              type="checkbox"
              label="Audio Book"
              name="marketing"
              id="audiobook"
            /> 
                <Form.Check
              type="checkbox"
              label="Ebook Sales"
              name="marketing"
              id="ebooksales"
            /> 
                <Form.Check
              type="checkbox"
              label="Video Book"
              name="marketing"
              id="videobook"
            /> 
                <Form.Check
              type="checkbox"
              label="Press Release Compaign"
              name="marketing"
              id="pressrelease"
            /> 
                <Form.Check
              type="checkbox"
              label="Author Events"
              name="marketing"
              id="authorevents"
            />  
             <Form.Check
              type="checkbox"
              label="Print Advertisement"
              name="marketing"
              id="printads"
            />     

             <Form.Check
              type="checkbox"
              label="Royalty Program"
              name="marketing"
              id="royaltyprog"
            />     
             <Form.Check
              type="checkbox"
              label="Sale Sheets"
              name="marketing"
              id="salesheets"
            />     
             <Form.Check
              type="checkbox"
              label="Advanced Reader Copies"
              name="marketing"
              id="advreader"
            />                  
             <Form.Check
              type="checkbox"
              label="Social Media "
              name="marketing"
              id="socialmedia"
            />  
             <Form.Check
              type="checkbox"
              label="Book Return Program"
              name="marketing"
              id="bookreturn"
            />                              
                </Col> 
                </Row>
                <br/> <br/> <br/>  <br/> <br/> <br/> 

<Row className="form-group text-right">
<Col md={5} className={styles.indentbutton}><Button className={styleIn.commonbutton}>Submit Request</Button></Col> <Col md={3}></Col><Col md={5}></Col>
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
