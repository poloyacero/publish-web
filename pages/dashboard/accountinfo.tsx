import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import NavMenuDashboard from '../../components/Dashboard/Navdashboard'
import NavMenu from '../../components/NavDashboard'
import styles from '../../components/Dashboard/dashboard2.module.css'
import styleIn from '../../styles/inputstyle.module.css'
import { Col, Container, Row ,Form,Button, NavLink} from 'react-bootstrap'
import FooterDashboard from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from "sweetalert"
import withAuth from "../../components/withAuth";
import axios from 'axios'

 const accountinfo=() =>{
  const [loginID, setLogInID] = useState("000000000000");
  const [email, setEmail] = useState("loading...");
  const [businesstype, setBusinesstype] = useState("");
  const [fullname, setFullname] = useState("");
  const [businessname, setBusinessname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateprovince, setStateprovince] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  var QueryString = require('querystring');
  
  // const handleSubmit = (e:any) => { 
  //   e.preventDefault()
  //   console.log('Sending')       
  
  //   let data = {
  //   email, 
  //   loginID,      
  //   businesstype,
  //   fullname,
  //   businessname,
  //   address,
  //   city,
  //   stateprovince,
  //   postalcode,
  //   phonenumber    
      
  //   }
  // fetch('/api/accountinfo', {
  //     method: 'PATCH',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     console.log('Response received')
 
  //     if (res.status === 200) {
  //       console.log('Response succeeded!')                   
  //       swal("Sent!", "Thank You!", "success");
  //       window.location.href = "/dashboard/homedashboard"
  //     }
  //    })
  // }
  useEffect(() => {
    // Getting the error details from URL
  getuser();
  }, [email])
  async function getuser () {
      

      let webApiUrl = 'https://account.thepublishing.com/auth/info';

      let tokenStr = localStorage.getItem("AccessToken");
      
      try {
        const response = await axios.get(webApiUrl, 
          { headers: {"Authorization" : `Bearer ${tokenStr}`} 
         
        });
        
        setLogInID(response.data.object.id)
        setFullname(response.data.object.contact_name)
        setEmail(response.data.object.email)
        setBusinesstype(response.data.object.business)
        setBusinessname(response.data.object.business_name)
        setCity(response.data.object.city)
        setAddress(response.data.object.address)
        setStateprovince(response.data.object.state_province)
        setPostalcode(response.data.object.postal_code)
        setPhonenumber(response.data.object.phone)
      } catch (error) {
        console.error(error);
      }
      };
    
      const handleSubmitUpdate = (event:any) => {
        event.preventDefault();
        handleUpdate();    
      };
      const handleUpdate = () => {
      
        let tokenStr = localStorage.getItem("AccessToken");  
      axios.patch('https://account.thepublishing.com/auth/profile', QueryString.stringify({
        business:businesstype,
        contact_name:fullname,
        business_name:businessname,
        address:address,
        city:city,
        state_province:stateprovince,
        postal_code:postalcode,
        phone:phonenumber 
        
            }), {
                headers: {"Authorization" : `Bearer ${tokenStr}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            }).then(function (response:any) {

              swal("Profile updated successfully!", "Thank you!", "success");                     
            })
            .catch(function (error:any) {
              console.log(error);
              swal("not sent!", "Try again!", "error"); 
            })
            .then(function () {
              // always executed
            });  
         
      };
    return (
        <div>
      <Head>
        <title>Account Information</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <NavMenuDashboard /> 
    
        <Container fluid>
          <Container>
            <Row  className={styles.dropdownmenucontainer}>
             
                <Col>
                <h3 className={styles.dropheaderlabel2}>Account Information</h3>
                <br></br>
                <Row className={"form-group "+styles.textalignment}>
              <Col md={3}>Email</Col><Col md={9}><Form.Control readOnly className={styleIn.accountinput} type="text" value={email}/> </Col>
               </Row>
               {/* <Row className={"form-group "+styles.textalignment}>
                 <Col md={3}>Acount Number</Col><Col md={9}></Col>
               </Row> */}
               <Row className={"form-group "+styles.textalignment}>
               <Col md={3}>Business</Col><Col md={9}> <Form.Control className={styleIn.accountinput}   as="select" value={businesstype}  onChange={(e)=>{setBusinesstype(e.target.value)}}>
              <option></option>                                
              <option value="sole_proprietor">Sole Proprietor</option>
              <option value="company">Company</option>                  
              <option value="government">Government</option>
              <option value="university">Univeristy</option>                  
              <option value="non-profit">Non-Profit</option> 
              <option value="other">Other</option>  
             
              </Form.Control> 
              </Col>
               </Row>
               <br></br>
               <h3 className={styles.dropheaderlabel2}>Legal Information</h3>
               <br></br>
               <Row className={"form-group "+styles.textalignment}>               
               <Col>
               <Form.Group as={Row}>
               <Col className="form-group" md={3}>Full Name</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={fullname} onChange={(e)=>{setFullname(e.target.value)}}/> </Col>
               
               <Col className="form-group" md={3}>Business Name</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={businessname} onChange={(e)=>{setBusinessname(e.target.value)}}/> </Col>
               
               <Col className="form-group" md={3}>Address</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={address} onChange={(e)=>{setAddress(e.target.value)}}/> </Col>
               
               <Col className="form-group" md={3}>City</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}/> </Col>
                  
               <Col className="form-group" md={3}>State/Province</Col><Col className="form-group" md={9}><Form.Control className={styleIn.inputselect2} as="select" value={stateprovince} onChange={(e)=>{setStateprovince(e.target.value)}}>
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
            </Col>
            <Col className="form-group" md={3}>Postal Code</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={postalcode} onChange={(e)=>{setPostalcode(e.target.value)}}/> </Col>
           
            <Col className="form-group" md={3}>Phone</Col><Col className="form-group" md={9}><Form.Control className={styleIn.accountinput} type="text" value={phonenumber} onChange={(e)=>{setPhonenumber(e.target.value)}}/> </Col>
            <Col md={3}></Col><Col className="form-group" md={9}><p className={styles.accountnotes}>The phone number entered above will be shared with the shipping company selected. <br/> 
                              The Publishing shall not be liable for undeliverable shipments where a valid phone number is not provided.</p></Col>
                              <br/> <br/> <br/> 
              <Row>
                <Col  className={styles.dashbuttoncontainer}>
                <Col md={'auto'}><NavLink href="/dashboard/homedashboard"><Button className={styles.dashsavebutton} onClick={handleSubmitUpdate}>Save</Button></NavLink></Col> <Col md={'auto'}><NavLink href="/dashboard/homedashboard"><Button className={styles.dashsavebutton}>Cancel</Button></NavLink></Col>
                </Col>
              </Row>
              <br/> <br/> <br/>
               </Form.Group>
               </Col>
               </Row>
             </Col>
            </Row>
          </Container>   
       
        </Container>
     
      <FooterDashboard />    
        </div>
    )
}
export default withAuth(accountinfo);