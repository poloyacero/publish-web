import React,{useEffect,useState} from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/NavDashboard'
import Sidebar from '../../components/Dashboard/Sidebar'
import styles from '../../components/Dashboard/servicesdashboard.module.css'
import styles2 from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button,Image,Modal} from 'react-bootstrap'
import FooterDashboard from "../../components/Footer";
import swal from 'sweetalert';
import { useS3Upload } from 'next-s3-upload';
import withAuth from "../../components/withAuth";
import axios from 'axios'
import BookExhibit from '../book-exhibit'

const servicesdashboard=()=>{
  const [modalShow, setModalShow] = React.useState(false);
  const [isloading, setIsloading] = React.useState(false);
  const [isattached, setIsattached] = React.useState(false);
  const [booktitle, setBooktitle] = useState('')
  const [booksynopsis, setBooksynopsis] = useState('')
  //Package
  const [user, setUser] = useState(""); 
  const [email, setEmail] = useState("");
  const [package1, setPackage] = useState("");  

  
  
  //Editing
  const [editorial, setEditorial] = useState(false);
  const [editorialvalue, setEditorialvalue] = useState('');
  const [developmental, setDevelopmental] = useState(false);
  const [developmentalvalue, setDevelopmentalvalue] = useState('');
  const [contentedit, setContentedit] = useState(false);
  const [contenteditvalue, setContenteditvalue] = useState('');
  const [lineediting, setLineediting] = useState(false);
  const [lineeditingvalue, setLineeditingvalue] = useState('');
  const [copyediting, setCopyediting] = useState(false);
  const [copyeditingvalue, setCopyeditingvalue] = useState('');
  const [proof, setProof] = useState(false);
  const [prooflvalue, setProoflvalue] = useState('');
  const [indexing, setIndexing] = useState(false);
  const [indexingvalue, setIndexingvalue] = useState('');
  const [dataentry, setDataentry] = useState(false);
  const [dataentryvalue, setDataentryvalue] = useState('');
  
  //Design
  
  const [illustrations, setIllustrations] = useState(false);
  const [illustrationsvalue, setIllustrationsvalue] = useState('');
  const [coverdesign, setCoverdesign] = useState(false);
  const [coverdesignvalue, setCoverdesignvalue] = useState('');
  const [interiordesign, setInteriordesign] = useState(false);
  const [interiordesignvalue, setInteriordesignvalue] = useState('');
  const [hardback, setHardback] = useState(false);
  const [hardbackvalue, setHardbackvalue] = useState('');
  const [bookdesc, setBookdesc] = useState(false);
  const [bookdescvalue, setBookdescvalue] = useState('');
  const [textformat, setTextformat] = useState(false);
  const [textformatvalue, setTextformatvalue] = useState('');
  
  //Distribution
  const [printbook, setPrintbook] = useState(false);
  const [printbookvalue, setPrintbookvalue] = useState('');
  const [ebookdist, setEbookdist] = useState(false);
  const [ebookdistvalue, setEbookdistvalue] = useState('');
  const [copyright, setCopyright] = useState(false);
  const [copyrightvalue, setCopyrightvalue] = useState('');
  const [isbn, setIsbn] = useState(false);
  const [isbnvalue, setIsbnvalue] = useState('');
  
  //Marketing
  const [website, setWebsite] = useState(false);
  const [websitevalue, setWebsitevalue] = useState('');
  const [audiobook, setAudiobook] = useState(false);
  const [audiobookvalue, setAudiobookvalue] = useState('');
  const [videobook, setVideobook] = useState(false);
  const [videobookvalue, setVideobookvalue] = useState('');
  const [pressrelease, setPressrelease] = useState(false);
  const [pressreleasevalue, setPressreleasevalue] = useState('');
  const [authorevents, setAuthorevents] = useState(false);
  const [authoreventsvalue, setAuthoreventsvalue] = useState('');
  const [printads, setPrintads] = useState(false);
  const [printadsvalue, setPrintadsvalue] = useState('');
  
  const [royaltyprog, setRoyaltyprog] = useState(false);
  const [royaltyprogvalue, setRoyaltyprogvalue] = useState('');
  const [salesheets, setSalesheets] = useState(false);
  const [salesheetsvalue, setSalesheetsvalue] = useState('');
  const [adrecop, setAdrecop] = useState(false);
  const [adrecopvalue, setAdrecopvalue] = useState('');
  const [socialmedia, setSocialmedia] = useState(false);
  const [socialmediavalue, setSocialmediavalue] = useState('');
  const [socialmedia30, setSocialmedia30] = useState(false);
  const [socialmedia30value, setSocialmedia30value] = useState('');
  const [socialmedia90, setSocialmedia90] = useState(false);
  const [socialmedia90value, setSocialmedia90value] = useState('');
  const [socialmediaxt, setSocialmediaxt] = useState(false);
  const [socialmediaxtvalue, setSocialmediaxtvalue] = useState('');
  const [boreprog, setBoreprog] = useState(false);
  const [boreprogvalue, setBoreprogvalue] = useState('');

  const [inflight, setInflight] = useState(false);
  const [inflightvalue, setInflightvalue] = useState('');
  const [publishers, setPublishers] = useState(false);
  const [publishersvalue, setPublishersvalue] = useState('');

  const [exhibit, setExhibit] = useState(false);
  const [exhibitvalue, setExhibitvalue] = useState('');
  const [bookvideoprem, setBookvideoprem] = useState(false);
  const [bookvideopremvalue, setBookvideopremvalue] = useState('');

  const [bookreview, setBookreview] = useState(false);
  const [bookreviewvalue, setBookreviewvalue] = useState('');
  const [hollywoodpitch, setHollywoodpitch] = useState(false);
  const [hollywoodpitchvalue, setHollywoodpitchvalue] = useState('');
  const [hollywoodscreen, setHollywoodscreen] = useState(false);
  const [hollywoodscreenvalue, setHollywoodscreenvalue] = useState('');
  const [publicity, setPublicity] = useState(false);
  const [publicityvalue, setPublicityvalue] = useState('');
  

  const updateInput = (e:any) => {
    setPackage(e.target.value)
    
  };
    
    useEffect(() => { 


      if(user===""){
        getuser()
      }

              
      if(editorial===true){
        setEditorialvalue("Editorial Assessment <br/>");
      }if(lineediting===true){
        setLineeditingvalue("Line Editing <br/>")
      }
      if(developmental===true){
        setDevelopmentalvalue("Developmental Editing <br/>")
      }
      if(contentedit===true){
        setContenteditvalue("Content Editing <br/>")
      }
      if(copyediting===true){
        setCopyeditingvalue("Copyediting <br/>")
      }
      if(proof===true){
        setProoflvalue("Proofreading <br/>")
      }
      if(indexing===true){
        setIndexingvalue("Indexing <br/>")
      }
      if(dataentry===true){
        setDataentryvalue("Data Entry <br/>")
      }
      if(textformat===true){
        setTextformatvalue("Text and Layout Format <br/>")
      }
      if(illustrations===true){
        setIllustrationsvalue("Illustrations <br/>")
      }
      else if(coverdesign===true){
        setCoverdesignvalue("Book Cover Design <br/>")
      }
      if(interiordesign===true){
        setInteriordesignvalue("Book Interior Design <br/>")
      }
      if(hardback===true){
        setHardbackvalue("Hardback Upgrade <br/>")
      }
      if(bookdesc===true){
        setBookdescvalue("Book Description <br/>")
      }
      if(printbook===true){
        setPrintbookvalue("Print Book Distribution <br/>")
      }
      if(ebookdist===true){
        setEbookdistvalue("Ebook Distribution <br/>")
      }
      if(copyright===true){
        setCopyrightvalue("Copyright Registration <br/>")
      }
      if(isbn===true){
        setIsbnvalue("ISBN <br/>")
      }
      if(website===true){
        setWebsitevalue("Author Website <br/>")
      }
      if(audiobook===true){
        setAudiobookvalue("Audio Book <br/>")
      }
      if(videobook===true){
        setVideobookvalue("Book Video <br/>")
      }
      if(pressrelease===true){
        setPressreleasevalue("Press Release Campaign <br/>")
      }
      if(authorevents===true){
        setAuthoreventsvalue("Author Events <br/>")
      }
      if(printads===true){
        setPrintadsvalue("Print Advertisement <br/>")
      }
  
      if(royaltyprog===true){
        setRoyaltyprogvalue("Royalty Program <br/>")
      }
      if(salesheets===true){
        setSalesheetsvalue("Sale Sheets <br/>")
      }
      if(adrecop===true){
        setAdrecopvalue("Advanced Reader Copies <br/>")
      }
      if(socialmedia===true){
        setSocialmediavalue("Social Media Marketing <br/>")
      }

      if(socialmedia30===true){
        setSocialmedia30value("Social Media Marketing Plus 30 days  <br/>")
      }

      if(socialmedia90===true){
        setSocialmedia90value("Social Media Marketing Plus 90 days  <br/>")
      }
      if(socialmediaxt===true){
        setSocialmediaxtvalue("Social Media Marketing Extreme  <br/>")
      }
     
      if(inflight===true){
        setInflightvalue("Inflight Magazine  <br/>")
      }
      if(publishers===true){
        setPublishersvalue("Publisher’s Weekly  <br/>")
      }
      
      if(exhibit===true){
        setExhibitvalue("Book Exhibit Extreme (BEE)  <br/>")
      }

      if(bookvideoprem===true){
        setBookvideopremvalue("Book Video Advertising Premium  <br/>")
      }
      if(bookreview===true){
        setBookreviewvalue("Book Review  <br/>")
      }

      if(hollywoodpitch===true){
        setHollywoodpitchvalue("Hollywood Pitch  <br/>")
      }

      if(hollywoodscreen===true){
        setHollywoodscreenvalue("Hollywood Book-to-Screen  <br/>")
      }
      if(publicity===true){
        setPublicityvalue("Publicity Campaign  <br/>")
      }
    });
    const handleSubmit = (e:any) => { 
      e.preventDefault()
      console.log('Sending')   
     setIsloading(true)  
    let data = {
        user,
        email, 
        package1,      
        booktitle,
        booksynopsis,
        editorialvalue,
        lineeditingvalue,
        copyeditingvalue,
        prooflvalue,
        indexingvalue,
        dataentryvalue,
        textformatvalue,
        illustrationsvalue,
        coverdesignvalue,
        interiordesignvalue,
        hardbackvalue,
        printbookvalue,
        ebookdistvalue,
        copyrightvalue,
        isbnvalue,
        websitevalue,
        audiobookvalue,     
        videobookvalue,
        pressreleasevalue,
        authoreventsvalue,
        printadsvalue,
        developmentalvalue,
        contenteditvalue,
        bookdescvalue,
        royaltyprogvalue,
        salesheetsvalue,
        adrecopvalue,
        socialmediavalue,
        boreprogvalue,
        imageUrl,
        socialmedia30value,
        socialmedia90value,
        socialmediaxtvalue,
        inflightvalue,
        publishersvalue,
        exhibitvalue,
        bookvideopremvalue,
        bookreviewvalue,
        hollywoodpitchvalue,
        hollywoodscreenvalue,
        publicityvalue
  
      }
    fetch('/api/printbookandebook', {
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
          swal("Sent!", "Thank You!", "success");
          setIsloading(false)
          setIsattached(false)
          window.location.href = "/dashboard/servicesdashboard"
        }else{
          swal("not sent!", "Try again!", "error"); 
          setIsloading(false)
        }
       })
    }
    let [imageUrl, setImageUrl] = useState("");
    let {FileInput,uploadToS3,openFileDialog} = useS3Upload();
    const axios = require('axios');    
    
    let handleFileChange = async (file:any) => {
      let { url } = await uploadToS3(file);
      setImageUrl(url); 
      swal("File Attached!", "", "success").then((success)=>{
        setIsattached(true)  
      })
       
    };
    async function getuser () {
      

      let webApiUrl = 'https://account.thepublishing.com/auth/info';

      let tokenStr = localStorage.getItem("AccessToken");
      
      try {
        const response = await axios.get(webApiUrl, 
          { headers: {"Authorization" : `Bearer ${tokenStr}`} 
         
        });
       
        setUser(response.data.object.contact_name)
        setEmail(response.data.object.email)
      } catch (error) {
        console.error(error);
        swal("not loggin!", "Try again!", "error"); 
      }
      };
    
  function Mypopupmessage(props:any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton  onClick={handleSubmit} >
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
               <Form.Control className={styleIn.accountinput} type="text" defaultValue="BOOK TITLE" onChange={(e)=>{setBooktitle(e.target.value)}}/>
               <span className={styles.spannotes}>If you do not yet have a title for your work, please put in Untitled</span> 
               </Col>
               </Row>
               <Row>
                <Col className={styles.indentcheckbox}>
               <Form.Group>
            <br/>
           <div className={styleIn.fileinputs}> 
          <div className={styleIn.fakefile}><Row><Col className={styleIn.formcolbutton1}><Image src="/img/services/upload-manuscript.png" width="auto" height="auto"  onClick={openFileDialog}/></Col><Col className={styleIn.formcolbutton2}>{isattached?<Button onClick={()=>{swal("Attached Already!")}} className={styleIn.submitbuttondashboard} >Attach Manuscript</Button>:<Button className={styleIn.submitbuttondashboard} >Attach Manuscript</Button>}</Col></Row></div>
          <FileInput className={styleIn.formfile} onChange={handleFileChange} accept=".jpg,.jpeg,.psd,.pdf,.docx,.doc"/>
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
            <Form.Control  as="textarea" rows={15} defaultValue="Book Synopsis"  onChange={(e)=>{setBooksynopsis(e.target.value)}}/>
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
              type="radio"
              label="Beginner"
              name="pkg"
              id="Beginnerpkg"
              value="Beginner Package"                           
              onChange={updateInput}
            /> 
            <Form.Check
              type="radio"
              label="Intermediate"
              name="pkg"
              id="Intermediatepkg"
              value="Intermediate Package"                           
              onChange={updateInput}
            /> 
            <Form.Check
              type="radio"
              label="Pro"
              name="pkg"
              id="propkg"
              value="Advanced Package"
              onChange={updateInput}
            /> 
                <Form.Check
              type="radio"
              label="Expert"
              name="pkg"
              id="Expertpkg"
              value="Expert Package"
              onChange={updateInput}
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
              name="editorialass"
              id="editorial"
              checked={editorial}                
              onChange={(e)=>{setEditorial(e.target.checked)}} 
            /> 
                <Form.Check
              type="checkbox"
              label="Line Editing"
              name="lineediting"
              id="linediting"
              checked={lineediting}                
              onChange={(e)=>{setLineediting(e.target.checked)}}
            /> 
            <Form.Check
              type="checkbox"
              label="Developmental Editing"
              name="devediting"
              id="developmentalediting"
              checked={developmental}                
                onChange={(e)=>{setDevelopmental(e.target.checked)}}
            /> 
            <Form.Check
              type="checkbox"
              label="Content Editing"
              name="contentediting"
              id="contentediting"
              checked={contentedit}                
                onChange={(e)=>{setContentedit(e.target.checked)}}
            /> 
                <Form.Check
              type="checkbox"
              label="Copy Editing"
              name="copyediting"
              id="copyediting"
              checked={copyediting}                
              onChange={(e)=>{setCopyediting(e.target.checked)}}
            /> 
                <Form.Check
              type="checkbox"
              label="Proofreading"
              name="proofediting"
              id="proofreading"
              checked={proof}                
              onChange={(e)=>{setProof(e.target.checked)}}
            /> 
                <Form.Check
              type="checkbox"
              label="Indexing"
              name="indexediting"
              id="indexing"
              checked={indexing}                
              onChange={(e)=>{setIndexing(e.target.checked)}}
            />   
             <Form.Check
              type="checkbox"
              label="Data Entry"
              name="dataentry"
              id="dataentry"
              checked={dataentry}                
              onChange={(e)=>{setDataentry(e.target.checked)}}
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
              name="illustrations"
              id="illustration"
              checked={illustrations}                
              onChange={(e)=>{setIllustrations(e.target.checked)}} 
            />  
                <Form.Check
              type="checkbox"
              label="Book Cover Design"
              name="bookcoverdesign"
              id="bookcoverid"
              checked={coverdesign}                
              onChange={(e)=>{setCoverdesign(e.target.checked)}}
            /> 
                <Form.Check
              type="checkbox"
              label="Book Interior Design"
              name="bookinteriordesign"
              id="interiordesign"
              checked={interiordesign}                
              onChange={(e)=>{setInteriordesign(e.target.checked)}}
            /> 
             
                <Form.Check
              type="checkbox"
              label="Hardback Upgrade"
              name="harbackdesign"
              id="hardbackupgrade"
              checked={hardback}                
              onChange={(e)=>{setHardback(e.target.checked)}} 
            /> 
             <Form.Check
              type="checkbox"
              label="Book Description"
              name="additonalservices10"               
              checked={bookdesc}                
              onChange={(e)=>{setBookdesc(e.target.checked)}} 
              className={styles.checkboxline}
            />      
             <Form.Check
              type="checkbox"
              label="Text and Layout Format"
              name="textlayoutediting"
              id="textandlayout"
              checked={textformat}                
              onChange={(e)=>{setTextformat(e.target.checked)}}
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
              name="printbookdistribution"
              id="printbook"
              checked={printbook}                
              onChange={(e)=>{setPrintbook(e.target.checked)}}
            />  
                <Form.Check
              type="checkbox"
              label="Ebook Distribution"
              name="ebookdistribution"
              id="ebookdistribution"
              checked={ebookdist}                
              onChange={(e)=>{setEbookdist(e.target.checked)}}
              
            /> 
                <Form.Check
              type="checkbox"
              label="Copyright Registration"
              name="copyrightdistribution"
              id="copyrightdistribution"
              checked={copyright}                
              onChange={(e)=>{setCopyright(e.target.checked)}}
            /> 
                <Form.Check
              type="checkbox"
              label="Print Book Sales"
              name="printsalesdistribution"
              id="isbn"
              checked={isbn}
              onChange={(e)=>{setIsbn(e.target.checked)}}

            /> 
                         
                </Col> 
                </Row>
   {/* MARKETING-- */}
                <Row>
               <Col className={styles.servicescontainer}>             
                <h4 className={styles.servicesheaderlabel}>Marketing</h4>                        
               </Col>      
               </Row>
               
               <Row>
                <Col className={styles.indentcheckbox}>
                <h5>Digital Marketing Services</h5>
                
               <Form.Check
              type="checkbox"
              label="Social Media Marketing"
              name="socialmediamarketing"
              id="socialmediawebsite"
              checked={website}                
              onChange={(e)=>{setSocialmedia(e.target.checked)}} 
            />  
            <Form.Check
              type="checkbox"
              label="Social Media Marketing Plus 30 days"
              name="socialmedia30marketing"
              id="socialmedia30marketing"
              checked={website}                
              onChange={(e)=>{setSocialmedia30(e.target.checked)}} 
            />  
             <Form.Check
              type="checkbox"
              label="Social Media Marketing Plus 90 days"
              name="socialmedia90marketing"
              id="socialmedia90marketing"
              checked={website}                
              onChange={(e)=>{setSocialmedia90(e.target.checked)}} 
            />  
             <Form.Check
              type="checkbox"
              label="Social Media Marketing Extreme "
              name="socialmediaxtmarketing"
              id="socialmediaxtmarketing"
              checked={website}                
              onChange={(e)=>{setSocialmediaxt(e.target.checked)}} 
            />  
             <Form.Check
              type="checkbox"
              label="Author Website"
              name="authormarketing"
              id="authorwebsite"
              checked={website}                
              onChange={(e)=>{setWebsite(e.target.checked)}} 
            /> 
            <br/> 
            <h5>Print Advertisement</h5>
              <Form.Check
              type="checkbox"
              label="Inflight Magazine"
              name="Inflightmarketing"
              id="Inflight"
              onChange={(e)=>{setInflight(e.target.checked)}}
            /> 
             <Form.Check
              type="checkbox"
              label="Publisher’s Weekly"
              name="Publishermarketing"
              id="Publisher"
              onChange={(e)=>{setPublishers(e.target.checked)}}
            /> 
             <Form.Check
              type="checkbox"
              label="Press Release Compaign"
              name="pressreleasemarketing"
              id="pressrelease"
              checked={pressrelease}                
              onChange={(e)=>{setPressrelease(e.target.checked)}}
            /> 
             <br/>
            <h5>Book Exhibit Extreme</h5>
            <Form.Check
              type="checkbox"
              label="Book Exhibit Extreme (BEE)"
              name="BookExhibitmarketing"
              id="BookExhibit"
              onChange={(e)=>{setExhibit(e.target.checked)}}
            /> 
             <br/>
            <h5>Book Video</h5>
            <Form.Check
              type="checkbox"
              label="Book Video Advertising Premium"
              name="BookVideomarketing"
              id="BookVideoprem"
              onChange={(e)=>{setBookvideoprem(e.target.checked)}}
            /> 
            <Form.Check
              type="checkbox"
              label="Book Video"
              name="videobookmarketing"
              id="videobook"
              checked={videobook}                
              onChange={(e)=>{setVideobook(e.target.checked)}}
            />             
            <Form.Check
              type="checkbox"
              label="Bookstore Returnability Program"
              name="BookstoreReturnabilitymarketing"
              id="BookstoreReturnability"              
              onChange={(e)=>{setBoreprog(e.target.checked)}} 
            /> 
          <br/>
           <h5>Audio Book</h5>

             <Form.Check
              type="checkbox"
              label="Audio Book"
              name="audiobookmarketing"
              id="audiobook"
              onChange={(e)=>{setAudiobook(e.target.checked)}}
            />                                         
               
             <Form.Check
              type="checkbox"
              label="Book Review"
              name="BookReviewmarketing"
              id="BookReview"
              checked={royaltyprog}                
              onChange={(e)=>{setBookreview(e.target.checked)}}
            /> 
             <br/>
           <h5>Hollywood World</h5>
           <Form.Check
              type="checkbox"
              label="Hollywood Pitch"
              name="HollywoodPitchmarketing"
              id="HollywoodPitch"
              checked={salesheets}                
              onChange={(e)=>{setHollywoodpitch(e.target.checked)}} 
            />  
            <Form.Check
              type="checkbox"
              label="Hollywood Book-to-Screen"
              name="HollywoodBook-to-Screenmarketing"
              id="HollywoodBook-to-Screen"
              checked={salesheets}                
              onChange={(e)=>{setHollywoodscreen(e.target.checked)}} 
            />  
            <br/>
              <Form.Check
              type="checkbox"
              label="Publicity Campaign"
              name="PublicityCampaignmarketing"
              id="PublicityCampaign"
              checked={salesheets}                
              onChange={(e)=>{setPublicity(e.target.checked)}} 
            />     
             <Form.Check
              type="checkbox"
              label="Sales Sheets"
              name="salessheetsmarketing"
              id="salesheets"
              checked={salesheets}                
              onChange={(e)=>{setSalesheets(e.target.checked)}} 
            />     
             <Form.Check
              type="checkbox"
              label="Advanced Reader Copies"
              name="advancedmarketing"
              id="advreader"
              checked={adrecop}                
              onChange={(e)=>{setAdrecop(e.target.checked)}} 
            />                  
            
             <Form.Check
              type="checkbox"
              label="Author Interview"
              name="AuthorInterview"
              disabled            

            />                              
                </Col> 
                </Row>
                <br/> <br/> <br/>  <br/> <br/> <br/> 

<Row className="form-group text-right">
<Col md={5} className={styles.indentbutton}><Button onClick={() => setModalShow(true)} className={styleIn.commonbutton}>Submit Request</Button></Col> <Col md={3}></Col><Col md={5}></Col>
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
export default withAuth(servicesdashboard);