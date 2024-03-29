import React from 'react';
import { useState,useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert'
import Link from "next/link"
import TheModal from '../TheModal';
import styles from './PricingForm.module.css';

interface PricingFormProps {
e?:string;
onHide?:any
}


const PricingForm = ({ ...props }: PricingFormProps) => { 
const [modalShowCreate, setModalShowCreate] = React.useState(false);
const [modalShowSignin, setModalShowSignin] = React.useState(false);

const [firstname, setFirstname] = useState('')
const [email, setEmail] = useState('')
const [lastname, setLastname] = useState('')
const [submitted, setSubmitted] = useState(false)

const [trimsize, setTrimsize] = useState('')
const [interiorcolor,setInteriorcolor]=React.useState("");
const [papertype, setPapertype] = useState('')
const [bindingtype, setBindingtype] = useState('')
const [laminate, setLaminate] = useState('')
const [pagecount, setPagecount] = useState('')
const [quantity, setQuantity] = useState('')
const [shipto, setShipto] = useState('')
const [shiptoprovince, setShiptoprovince] = useState('')
const [printinglocation, setPrintinglocation] = useState('')
const [ebook, setEbook] = useState('')
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
const [boreprog, setBoreprog] = useState(false);
const [boreprogvalue, setBoreprogvalue] = useState('');

  
  const handleChange=(e:any) =>{
    setInteriorcolor(e.target.value);
    
  }
  useEffect(() => {
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
      setVideobookvalue("Video Book <br/>")
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
      setSocialmediavalue("Social Media <br/>")
    }
    if(boreprog===true){
      setBoreprogvalue("Book Return Program <br/>")
    }

  
  });
  const handleSubmit = (e:any) => { 
    e.preventDefault()
    console.log('Sending')
    
  let data = {
      firstname,
      lastname,
      email,      
      trimsize,
      interiorcolor,
      papertype,
      bindingtype,
      laminate,
      pagecount,
      quantity,
      shipto,
      shiptoprovince,
      printinglocation,
      ebook,
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
      boreprogvalue

    }
  fetch('/api/pricingMail', {
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
        swal("Sent!", "Thank You!", "success");
      }
      setModalShowSignin(false)
    })
  }
  return (
    <Container fluid>
      <div className={styles.pricingForm + " container"}>
      <h1 className={styles.pricingh1}> Let’s Get Started</h1>
     
      <Row>
        <Col md={{ span: 12, offset: 2 }}>
          <p className={styles.instructionformat}>
          Fill up the data below to generate a guide instructions, estimated cost in production<br/>and distribution of your book and more useful info.
          </p>
          <p className={styles.noteformat}>
            Please note:<br/>
            Sales tax is not displayed. If applicable, sales taxes will be applied at the time an order is placed on your account. <br/> Heavy traffic in requests may cause occasional delays so please allow up to 2 hours before resubmitting a request.
          </p>
        </Col>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Trim Size</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input} as="select" defaultValue={trimsize} onChange={(e)=>{setTrimsize(e.target.value)}}>
              <option value=""></option>
              <option value="4.000&quot; x 6.000&quot; (152mm x 102 mm)">4.000" x 6.000" (152mm x 102 mm)</option>
              <option value="4.000&quot; x 7.000&quot; (178mm x 102 mm)">4.000" x 7.000" (178mm x 102 mm)</option>
              <option value="4.250&quot; x 7.000&quot; (178mm x 108 mm)">4.250" x 7.000" (178mm x 108 mm)</option>
              <option value="4.370&quot; x 7.000&quot; (178mm x 111mm)">4.370" x 7.000" (178mm x 111mm)</option>
              <option value="4.720&quot; x 7.480&quot; (190mm x 120mm)">4.720" x 7.480" (190mm x 120mm)</option>
              <option value="5.000&quot; x 7.000&quot; (178mm x 127mm)">5.000" x 7.000" (178mm x 127mm)</option>
              <option value="5.000&quot; x 8.000&quot; (203mm x 127mm)">5.000" x 8.000" (203mm x 127mm)</option>
              <option value="5.060&quot; x 7.810&quot; (198mm x 129mm)">5.060" x 7.810" (198mm x 129mm)</option>
              <option value="5.250&quot; x 8.000&quot; (203mm x 133mm)">5.250" x 8.000" (203mm x 133mm)</option>
              <option value="5.500&quot; x 8.500&quot; (216mm x 140mm)">5.500" x 8.500" (216mm x 140mm)</option>
              <option value="5.500&quot; x 8.250&quot; (210mm x 140mm)">5.500" x 8.250" (210mm x 140mm)</option>
              <option value="5.500&quot; x 8.380&quot; (213mm x 140mm)">5.500" x 8.380" (213mm x 140mm)</option>
              <option value="5.500&quot; x 7.500&quot; (191mm x 140mm)">5.500" x 7.500" (191mm x 140mm)</option>
              <option value="5.830&quot; x 8.270&quot; (210mm x 148mm) A5">5.830" x 8.270" (210mm x 148mm) A5</option>
              <option value="6.000&quot; x 9.000&quot; (229mm x 152mm)">6.000" x 9.000" (229mm x 152mm)</option>
              <option value="6.140&quot; x 9.210&quot; (234mm x 156mm)">6.140" x 9.210" (234mm x 156mm)</option>
              <option value="6.500&quot; x 6.500&quot; (165mm x 165mm)">6.500" x 6.500" (165mm x 165mm)</option>
              <option value="6.625&quot; x 10.250&quot; (260mm x 168mm)">6.625" x 10.250" (260mm x 168mm)</option>
              <option value="6.690&quot; x 9.610&quot; (244mm x 170mm)">6.690" x 9.610" (244mm x 170mm)</option>
              <option value="7.000&quot; x 10.000&quot; (254mm x 178mm)">7.000" x 10.000" (254mm x 178mm)</option>
              <option value="7.440&quot; x 9.690&quot; (246mm x 189mm)">7.440" x 9.690" (246mm x 189mm)</option>
              <option value="7.500&quot; x 9.250&quot; (235mm x 191mm)">7.500" x 9.250" (235mm x 191mm)</option>
              <option value="8.000&quot; x 10.000&quot; (254mm x 203mm)">8.000" x 10.000" (254mm x 203mm)</option>
              <option value="8.000&quot; x 10.880&quot; (276mm x 203mm)">8.000" x 10.880" (276mm x 203mm)</option>
              <option value="8.000&quot; x 8.000&quot; (203mm x 203mm)">8.000" x 8.000" (203mm x 203mm)</option>
              <option value="8.250&quot; x 11.000&quot; (280mm x 210mm)">8.250" x 11.000" (280mm x 210mm)</option>
              <option value="8.250&quot; x 10.750&quot; (273mm x 210 mm)">8.250" x 10.750" (273mm x 210 mm)</option>
              <option value="8.268&quot; x 11.693&quot; (297mm x 210mm) A4">8.268" x 11.693" (297mm x 210mm) A4</option>
              <option value="8.500&quot; x 8.500&quot; (216mm x 216mm)">8.500" x 8.500" (216mm x 216mm)</option>
              <option value="8.500&quot; x 11.000&quot; (280mm x 216mm)">8.500" x 11.000" (280mm x 216mm)</option>
              <option value="8.500&quot; x 9.000&quot; (229mm x 216mm)">8.500" x 9.000" (229mm x 216mm)</option>
              <option value="11.000&quot; x 8.500&quot; (216mm x 280mm)">11.000" x 8.500" (216mm x 280mm)</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>      
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Interior Color</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input} as="select" defaultValue={interiorcolor} onChange={ handleChange }>
              <option></option>
              <option>Black and White</option>
              <option>Color</option>              
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Paper Type</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input}  as="select" defaultValue={papertype} onChange={(e)=>{setPapertype(e.target.value)}}>
              <option> </option>              
                { interiorcolor==="Black and White"?(
                  <>
              <option>White</option>
              <option>Creme</option>
              <option>Eggshell</option> 
              </> 
                ):(
                  <>
              <option>Standard Color 50 lb</option>
              <option>Standard Color 70 lb</option>
              <option>Premium Color 50 lb</option> 
                  </>
                )}                    
                  
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Binding Type</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input}  as="select" defaultValue={bindingtype} onChange={(e)=>{setBindingtype(e.target.value)}}>
              <option> </option>
              <option>Paperback</option>
              <option>Hardback</option>             
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Laminate</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input}  as="select" defaultValue={laminate} onChange={(e)=>{setLaminate(e.target.value)}}>
              <option> </option>
              <option>Gloss</option>
              <option>Matte</option>
              <option>Texture</option>              
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Page Count</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
         
            <Form.Control className={styles.input} type="text" defaultValue={pagecount} onChange={(e)=>{setPagecount(e.target.value)}}/>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Quantity</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} className={styles.indentcol}>
            <Form.Control className={styles.input}  type="text" defaultValue={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Ship To</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input} as="select" defaultValue={shipto} onChange={(e)=>{setShipto(e.target.value)}}>
              <option value=""></option>
              <option value="USA">United States</option>
              <option value="GBR">United Kingdom</option>
              <option value="AFG">Afghanistan</option>
              <option value="ALA">Åland Islands</option>
              <option value="ALB">Albania</option>
              <option value="DZA">Algeria</option>
              <option value="ASM">American Samoa</option>
              <option value="AND">Andorra</option>
              <option value="AGO">Angola</option>
              <option value="AIA">Anguilla</option>
              <option value="ATA">Antarctica</option>
              <option value="ATG">Antigua And Barbuda</option>
              <option value="ARG">Argentina</option>
              <option value="ARM">Armenia</option>
              <option value="ABW">Aruba</option>
              <option value="AUS">Australia</option>
              <option value="AUT">Austria</option>
              <option value="AZE">Azerbaijan</option>
              <option value="BHS">Bahamas</option>
              <option value="BHR">Bahrain</option>
              <option value="BGD">Bangladesh</option>
              <option value="BRB">Barbados</option>
              <option value="BLR">Belarus</option>
              <option value="BEL">Belgium</option>
              <option value="BLZ">Belize</option>
              <option value="BEN">Benin</option>
              <option value="BMU">Bermuda</option>
              <option value="BTN">Bhutan</option>
              <option value="BOL">Bolivia</option>
              <option value="BIH">Bosnia And Herzegowina</option>
              <option value="BWA">Botswana</option>
              <option value="BVT">Bouvet Island</option>
              <option value="BRA">Brazil</option>
              <option value="IOT">British Indian Ocean Territory</option>
              <option value="BRN">Brunei Darussalam</option>
              <option value="BGR">Bulgaria</option>
              <option value="BFA">Burkina Faso</option>
              <option value="BDI">Burundi</option>
              <option value="KHM">Cambodia</option>
              <option value="CMR">Cameroon</option>
              <option value="CAN">Canada</option>
              <option value="CPV">Cape Verde</option>
              <option value="BES">Caribbean Netherlands</option>
              <option value="CYM">Cayman Islands</option>
              <option value="CAF">Central African Republic</option>
              <option value="TCD">Chad</option>
              <option value="CHL">Chile</option>
              <option value="CHN">China</option>
              <option value="CXR">Christmas Island</option>
              <option value="CCK">Cocos (Keeling) Islands</option>
              <option value="COL">Colombia</option>
              <option value="COM">Comoros</option>
              <option value="COG">Congo</option>
              <option value="COD">Congo, The Democratic Republic Of The</option>
              <option value="COK">Cook Islands</option>
              <option value="CRI">Costa Rica</option>
              <option value="CIV">Cote D'ivoire</option>
              <option value="HRV">Croatia (Local Name: Hrvatska)</option>
              <option value="CUW">Curaçao</option>
              <option value="CYP">Cyprus</option>
              <option value="CZE">Czech Republic</option>
              <option value="DNK">Denmark</option>
              <option value="DJI">Djibouti</option>
              <option value="DMA">Dominica</option>
              <option value="DOM">Dominican Republic</option>
              <option value="TMP">East Timor</option>
              <option value="ECU">Ecuador</option>
              <option value="EGY">Egypt</option>
              <option value="SLV">El Salvador</option>
              <option value="GNQ">Equatorial Guinea</option>
              <option value="ERI">Eritrea</option>
              <option value="EST">Estonia</option>
              <option value="ETH">Ethiopia</option>
              <option value="FLK">Falkland Islands (Malvinas)</option>
              <option value="FRO">Faroe Islands</option>
              <option value="FJI">Fiji</option>
              <option value="FIN">Finland</option>
              <option value="FRA">France</option>
              <option value="GUF">French Guiana</option>
              <option value="PYF">French Polynesia</option>
              <option value="ATF">French Southern Territories</option>
              <option value="GAB">Gabon</option>
              <option value="GMB">Gambia</option>
              <option value="GEO">Georgia</option>
              <option value="DEU">Germany</option>
              <option value="GHA">Ghana</option>
              <option value="GIB">Gibraltar</option>
              <option value="GRC">Greece</option>
              <option value="GRL">Greenland</option>
              <option value="GRD">Grenada</option>
              <option value="GLP">Guadeloupe</option>
              <option value="GUM">Guam</option>
              <option value="GTM">Guatemala</option>
              <option value="GGY">Guernsey</option>
              <option value="GIN">Guinea</option>
              <option value="GNB">Guinea-Bissau</option>
              <option value="GUY">Guyana</option>
              <option value="HTI">Haiti</option>
              <option value="HMD">Heard And Mc Donald Islands</option>
              <option value="VAT">Holy See (Vatican City State)</option>
              <option value="HND">Honduras</option>
              <option value="HKG">Hong Kong</option>
              <option value="HUN">Hungary</option>
              <option value="ISL">Iceland</option>
              <option value="IND">India</option>
              <option value="IDN">Indonesia</option>
              <option value="IRQ">Iraq</option>
              <option value="IRL">Ireland</option>
              <option value="IMN">Isle of Man</option>
              <option value="ISR">Israel</option>
              <option value="ITA">Italy</option>
              <option value="JAM">Jamaica</option>
              <option value="JPN">Japan</option>
              <option value="JEY">Jersey</option>
              <option value="JOR">Jordan</option>
              <option value="KAZ">Kazakhstan</option>
              <option value="KEN">Kenya</option>
              <option value="KIR">Kiribati</option>
              <option value="KOR">Korea, Republic Of</option>
              <option value="KWT">Kuwait</option>
              <option value="KGZ">Kyrgyzstan</option>
              <option value="LAO">Lao People's Democratic Republic</option>
              <option value="LVA">Latvia</option>
              <option value="LBN">Lebanon</option>
              <option value="LSO">Lesotho</option>
              <option value="LBR">Liberia</option>
              <option value="LBY">Libyan Arab Jamahiriya</option>
              <option value="LIE">Liechtenstein</option>
              <option value="LTU">Lithuania</option>
              <option value="LUX">Luxembourg</option>
              <option value="MAC">Macau</option>
              <option value="MKD">Macedonia, The Former Yugoslav Republic Of</option>
              <option value="MDG">Madagascar</option>
              <option value="MWI">Malawi</option>
              <option value="MYS">Malaysia</option>
              <option value="MDV">Maldives</option>
              <option value="MLI">Mali</option>
              <option value="MLT">Malta</option>
              <option value="MHL">Marshall Islands</option>
              <option value="MTQ">Martinique</option>
              <option value="MRT">Mauritania</option>
              <option value="MUS">Mauritius</option>
              <option value="MYT">Mayotte</option>
              <option value="MEX">Mexico</option>
              <option value="FSM">Micronesia, Federated States Of</option>
              <option value="MDA">Moldova, Republic Of</option>
              <option value="MCO">Monaco</option>
              <option value="MNG">Mongolia</option>
              <option value="MNE">Montenegro</option>
              <option value="MSR">Montserrat</option>
              <option value="MAR">Morocco</option>
              <option value="MOZ">Mozambique</option>
              <option value="MMR">Myanmar</option>
              <option value="NAM">Namibia</option>
              <option value="NRU">Nauru</option>
              <option value="NPL">Nepal</option>
              <option value="NLD">Netherlands</option>
              <option value="ANT">Netherlands Antilles</option>
              <option value="NCL">New Caledonia</option>
              <option value="NZL">New Zealand</option>
              <option value="NIC">Nicaragua</option>
              <option value="NER">Niger</option>
              <option value="NGA">Nigeria</option>
              <option value="NIU">Niue</option>
              <option value="NFK">Norfolk Island</option>
              <option value="MNP">Northern Mariana Islands</option>
              <option value="NOR">Norway</option>
              <option value="OMN">Oman</option>
              <option value="PAK">Pakistan</option>
              <option value="PLW">Palau</option>
              <option value="PSE">Palestinian Territory, Occupied</option>
              <option value="PAN">Panama</option>
              <option value="PNG">Papua New Guinea</option>
              <option value="PRY">Paraguay</option>
              <option value="PER">Peru</option>
              <option value="PHL">Philippines</option>
              <option value="PCN">Pitcairn</option>
              <option value="POL">Poland</option>
              <option value="PRT">Portugal</option>
              <option value="PRI">Puerto Rico</option>
              <option value="QAT">Qatar</option>
              <option value="REU">Reunion</option>
              <option value="ROU">Romania</option>
              <option value="RUS">Russian Federation</option>
              <option value="RWA">Rwanda</option>
              <option value="BLM">Saint Barthélemy</option>
              <option value="KNA">Saint Kitts And Nevis</option>
              <option value="LCA">Saint Lucia</option>
              <option value="MAF">Saint Martin</option>
              <option value="VCT">Saint Vincent And The Grenadines</option>
              <option value="WSM">Samoa</option>
              <option value="SMR">San Marino</option>
              <option value="STP">Sao Tome And Principe</option>
              <option value="SAU">Saudi Arabia</option>
              <option value="SEN">Senegal</option>
              <option value="SRB">Serbia</option>
              <option value="SCG">Serbia and Montenegro</option>
              <option value="SYC">Seychelles</option>
              <option value="SLE">Sierra Leone</option>
              <option value="SGP">Singapore</option>
              <option value="SXM">Sint Maarten</option>
              <option value="SVK">Slovakia (Slovak Republic)</option>
              <option value="SVN">Slovenia</option>
              <option value="SLB">Solomon Islands</option>
              <option value="SOM">Somalia</option>
              <option value="ZAF">South Africa</option>
              <option value="SGS">South Georgia And The South Sandwich Islands</option>
              <option value="ESP">Spain</option>
              <option value="LKA">Sri Lanka</option>
              <option value="SHN">St. Helena</option>
              <option value="SPM">St. Pierre And Miquelon</option>
              <option value="SDN">Sudan</option>
              <option value="SUR">Suriname</option>
              <option value="SJM">Svalbard And Jan Mayen Islands</option>
              <option value="SWZ">Swaziland</option>
              <option value="SWE">Sweden</option>
              <option value="CHE">Switzerland</option>
              <option value="TWN">Taiwan, Province Of China</option>
              <option value="TJK">Tajikistan</option>
              <option value="TZA">Tanzania, United Republic Of</option>
              <option value="THA">Thailand</option>
              <option value="TLS">Timor-Leste</option>
              <option value="TGO">Togo</option>
              <option value="TKL">Tokelau</option>
              <option value="TON">Tonga</option>
              <option value="TTO">Trinidad And Tobago</option>
              <option value="TUN">Tunisia</option>
              <option value="TUR">Turkey</option>
              <option value="TKM">Turkmenistan</option>
              <option value="TCA">Turks And Caicos Islands</option>
              <option value="TUV">Tuvalu</option>
              <option value="UGA">Uganda</option>
              <option value="UKR">Ukraine</option>
              <option value="ARE">United Arab Emirates</option>
              <option value="UMI">United States Minor Outlying Islands</option>
              <option value="URY">Uruguay</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="UZB">Uzbekistan</option>
              <option value="VUT">Vanuatu</option>
              <option value="VEN">Venezuela</option>
              <option value="VNM">Viet Nam</option>
              <option value="VGB">Virgin Islands (British)</option>
              <option value="VIR">Virgin Islands (U.S.)</option>
              <option value="WLF">Wallis And Futuna Islands</option>
              <option value="ESH">Western Sahara</option>
              <option value="YEM">Yemen</option>
              <option value="ZMB">Zambia</option>
              <option value="ZWE">Zimbabwe</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Ship To Province</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} className={styles.indentcol}>
            <Form.Control className={styles.input}  type="text" defaultValue={shiptoprovince} onChange={(e)=>{setShiptoprovince(e.target.value)}}/>
          </Form.Group>
        </Col>
      </Row>
     
      <Row>
        <Col className={styles.labelleft} md={{ span: 4, offset: 0 }}><Form.Label className={styles.label}>Printing Location</Form.Label></Col>
        <Col md={{ span: 4, offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input}  as="select" defaultValue={printinglocation} onChange={(e)=>{setPrintinglocation(e.target.value)}}>
              <option> </option>
              <option>LS US - US Dollar</option>
              <option>LS UK - Euros</option>
              <option>LS UK - Pound Sterling</option>
              <option>LS AU - Australian Dollar</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className={styles.labelleft} md={{ span:4, offset: 0 }}><Form.Label className={styles.label}>E-Book</Form.Label></Col>
        <Col md={{ span:4 , offset: 0 }}>
          <Form.Group as={Row} controlId="exampleForm.ControlSelect1" className={styles.indentcol}>
            <Form.Control className={styles.input}  as="select" defaultValue={ebook} onChange={(e)=>{setEbook(e.target.value)}}>
              <option> </option>
              <option>Yes</option>
              <option>No</option>

            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 2 }}>
          <p className={styles.pricinglink}>
          Select Additional Services to let professionals help and create your book.<br/> This options are recommended to enhance and select the services you only wanted.<br/> Check also in <Link href="/packages">packages</Link> to get a full book services.
          </p>
        </Col>
      </Row>
      <Row className={styles.checkboxcontainer}>     
        <Col  md={{ span: 3, offset: 0 }} className={styles.additionals}>
          <Col>
        
          <Form.Group as={Row}>
            <Col>
            <Form.Label className={styles.label}>
          Editing
          </Form.Label>
              <Form.Check
                type="checkbox"
                label="Editorial Assessment" 
                name="additonalservices1"
                checked={editorial}                
                onChange={(e)=>{setEditorial(e.target.checked)}} 
                className={styles.checkboxline}                                                            
              />
              <Form.Check
                type="checkbox"
                label="Line Editing"
                name="additonalservices2"               
                checked={lineediting}                
                onChange={(e)=>{setLineediting(e.target.checked)}}
                className={styles.checkboxline} 
              />
               <Form.Check
                type="checkbox"
                label="Developmental Editing"
                name="additonalservices2"               
                checked={developmental}                
                onChange={(e)=>{setDevelopmental(e.target.checked)}}
                className={styles.checkboxline} 
              />
               <Form.Check
                type="checkbox"
                label="Content Editing"
                name="additonalservices2"               
                checked={contentedit}                
                onChange={(e)=>{setContentedit(e.target.checked)}}
                className={styles.checkboxline} 
              />
              <Form.Check
                type="checkbox"
                label="Copyediting"
                name="additonalservices3"               
                checked={copyediting}                
                onChange={(e)=>{setCopyediting(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Proofreading"
                name="additonalservices3"               
                checked={proof}                
                onChange={(e)=>{setProof(e.target.checked)}}
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Indexing"
                name="additonalservices4"               
                checked={indexing}                
                onChange={(e)=>{setIndexing(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Data Entry"
                name="additonalservices5"               
                checked={dataentry}                
                onChange={(e)=>{setDataentry(e.target.checked)}}
                className={styles.checkboxline} 
              />
                 
            </Col>
          </Form.Group>
        </Col>
        </Col>
        <Col  md={{ span: 3, offset: 0 }} className={styles.additionals}>
        
          <Form.Group as={Row} className={styles.colformat}>
            <Col>
            <Form.Label className={styles.label}>
           Design
          </Form.Label>
              <Form.Check
                type="checkbox"
                label="Illustrations"
                name="additonalservices6"               
                checked={illustrations}                
                onChange={(e)=>{setIllustrations(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Book Cover Design"
                name="additonalservices7"               
                checked={coverdesign}                
                onChange={(e)=>{setCoverdesign(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Book Interior Design"
                name="additonalservices9"               
                checked={interiordesign}                
                onChange={(e)=>{setInteriordesign(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Hardback Upgrade"
                name="additonalservices9"               
                checked={hardback}                
                onChange={(e)=>{setHardback(e.target.checked)}} 
                className={styles.checkboxline}
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
                name="additonalservices11"               
                checked={textformat}                
                onChange={(e)=>{setTextformat(e.target.checked)}} 
                className={styles.checkboxline}
              />       
            </Col>
          </Form.Group>
        </Col>
       
        <Col   md={{ span: 3, offset:0 }} className={styles.additionals}>
        
          <Form.Group as={Row} className={styles.colformat}>
            <Col>
            <Form.Label className={styles.label}>
            Distribution
          </Form.Label>
              <Form.Check
                type="checkbox"
                label="Print Book Distribution"
                name="additonalservices12"               
                checked={printbook}                
                onChange={(e)=>{setPrintbook(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Ebook Distribution"
                name="additonalservices13"               
                checked={ebookdist}                
                onChange={(e)=>{setEbookdist(e.target.checked)}}
                className={styles.checkboxline} 
              />
              <Form.Check
                type="checkbox"
                label="Copyright Registration"
                name="additonalservices14"               
                checked={copyright}                
                onChange={(e)=>{setCopyright(e.target.checked)}}
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="ISBN"
                name="additonalservices15"               
                checked={isbn}                
                onChange={(e)=>{setIsbn(e.target.checked)}}
                className={styles.checkboxline}
              />              
            </Col>
          </Form.Group>
        </Col>
       
        <Col   md={{ span: 3, offset: 0 }} className={styles.additionals}>
       
          <Form.Group as={Row} className={styles.colformat}>
            <Col >
            <Form.Label className={styles.label}>
            Marketing
           </Form.Label>
              <Form.Check
                type="checkbox"
                label="Author Website"
                name="additonalservices16"               
                checked={website}                
                onChange={(e)=>{setWebsite(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Audio Book"
                name="additonalservices17"               
                checked={audiobook}                
                onChange={(e)=>{setAudiobook(e.target.checked)}}
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Video Book"
                name="additonalservices18"               
                checked={videobook}                
                onChange={(e)=>{setVideobook(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Press Release Campaign"
                name="additonalservices19"               
                checked={pressrelease}                
                onChange={(e)=>{setPressrelease(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Author Events"
                name="additonalservices20"               
                checked={authorevents}                
                onChange={(e)=>{setAuthorevents(e.target.checked)}}
                className={styles.checkboxline} 
              />
              {/* <Form.Check
                type="checkbox"
                label="Print Advertisement"
                name="additonalservices20"               
                checked={printads}                
                onChange={(e)=>{setPrintads(e.target.checked)}} 
                className={styles.checkboxline}
              />    */}
              <Form.Check
                type="checkbox"
                label="Royalty Program"
                name="additonalservices21"               
                checked={royaltyprog}                
                onChange={(e)=>{setRoyaltyprog(e.target.checked)}} 
                className={styles.checkboxline}
              />   
               <Form.Check
                type="checkbox"
                label="Sale Sheets"
                name="additonalservices22"               
                checked={salesheets}                
                onChange={(e)=>{setSalesheets(e.target.checked)}} 
                className={styles.checkboxline}
              />      
              <Form.Check
                type="checkbox"
                label="Advanced Reader Copies"
                name="additonalservices23"               
                checked={adrecop}                
                onChange={(e)=>{setAdrecop(e.target.checked)}} 
                className={styles.checkboxline}
              />
              <Form.Check
                type="checkbox"
                label="Social Media"
                name="additonalservices24"               
                checked={socialmedia}                
                onChange={(e)=>{setSocialmedia(e.target.checked)}} 
                className={styles.checkboxline}
              />                      
             <Form.Check
                type="checkbox"
                label="Book Return Program"
                name="additonalservices25"               
                checked={boreprog}                
                onChange={(e)=>{setBoreprog(e.target.checked)}} 
                className={styles.checkboxline}
              />          

            </Col>
          </Form.Group>
        </Col>
       
      </Row>
      <Row className={styles.checkboxbutton}>
        <Col md={{span:4,offset:2}}>
          <Button className={styles.pricingbutton} type="submit" onClick={() => setModalShowSignin(true)}>Submit</Button>
        </Col>
      </Row>
      </div>
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
          <Form.Control className={styles.inputnav} value={firstname}  onChange={(e)=>{setFirstname(e.target.value)}} type="text" name="name"/>
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
          <Form.Control className={styles.inputnav} value={email}  onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email"/>                  
        </Col>
       
      </Form.Group>
    </Col>
    <Col>
      <Form.Group as={Row}>
        <Col md={12}>                                   
          <Button onClick={props.onHide} className={styles.signinButton} onMouseDown={(e)=>{handleSubmit(e)}}>Send</Button>
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
    </Container>


  );
}

export default PricingForm;