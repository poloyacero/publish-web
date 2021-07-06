
import React,{useState} from 'react';
import { Row, Col, Button,Form} from 'react-bootstrap';
import styles from './Forms.module.css';
import styleIn from '../../../styles/inputstyle.module.css'

export default function Printbookebook() {
  const [interiorcolor,setInteriorcolor]=React.useState("");
  const [papertype, setPapertype] = useState('')

  const handleChange=(e:any) =>{
    setInteriorcolor(e.target.value);
    console.log(interiorcolor);
  }

  return (
    <>
    <Form.Group as={Row}>
          <Col sm={10}>
            <br/>
            <h3 className={styles.formheaderlabel}>EDITING</h3>
            <br/>
          </Col>
         
         <Col sm={10}>     
          <p className={styles.formlabel}>Is your manuscript ready?</p>
           <Col className={styles.formindent}>
            <Form.Check
              type="radio"
              label="Yes"
              name="manuscriptready"
              id="manuyes"
            />
            <Form.Check
              type="radio"
              label="No"
              name="manuscriptready"
              id="manuno"
            />
            </Col>       
          </Col>
      
      
      <Col sm={12}>
         <br></br>
        <p className={styles.formlabel}>Is your manuscript professionally edited?</p>
        <Col className={styles.formindent}>
        <Form.Check
          type="radio"
          label="Yes"
          name="profmanu"
          id="profmanuyes"
        />
        <Form.Check
          type="radio"
          label="No"
          name="profmanu"
          id="profmanuno"
        />  
          <Form.Group>
            <br/>
            <div className="input-group mb-3">
          <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
          <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Manuscript</label>
          </div>  
          </Form.Group>
        </Col>     
       </Col>
     </Form.Group>
    
    

  <Form.Group as={Row}>
    
    <Col sm={12}>
      <br/>
    <p className={styles.formlabel}>Ebook submission</p>
    <Col className={styles.formindent}>
    <div className="input-group mb-3">
      <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
      <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Ebook Interior</label>
   </div> 
      <div className="input-group mb-3">
      <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
      <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Ebook Cover &nbsp;&nbsp;</label>
   </div>
   </Col>
    </Col>
  </Form.Group>
   
  <Form.Group as={Row}>    
       <Col sm={12}>
         <br></br>
      <p className={styles.formlabel}>Epub Conversion</p>
      <Col className={styles.formindent}>
        <Form.Check
          type="radio"
          label="Yes"
          name="epubconversion"
          id="epubyes"
        />
         <Form.Check
          type="radio"
          label="No"
          name="epubconversion"
          id="epubno"
        />
      </Col>
      </Col>
        </Form.Group>
        <Form.Group as={Row}>
            <Col sm={10}>
            <br></br>
      <p className={styles.formlabel}>Get Editing Services</p>
      <Col className={styles.formindent}>
              <Form.Check
                type="checkbox"
                label="Editorial Assessment" 
                name="additonalservices1"
                            
              />
              <Form.Check
                type="checkbox"
                label="Line Editing"
                name="additonalservices2"               
               
              />
              <Form.Check
                type="checkbox"
                label="Copyediting"
                name="additonalservices3"               
               
              />
              <Form.Check
                type="checkbox"
                label="Proofreading"
                name="additonalservices3"               
                
              />
              <Form.Check
                type="checkbox"
                label="Indexing"
                name="additonalservices4"               
               
              />
              <Form.Check
                type="checkbox"
                label="Data Entry"
                name="additonalservices5"               
               
              />
              <Form.Check
                type="checkbox"
                label="Text and Layout Format"
                name="additonalservices6"               
                
              />  
              </Col>        
            </Col>
          </Form.Group>
          <br></br><br></br>
          <h3 className={styles.formheaderlabel}>DESIGN</h3>
      <Form.Group as={Row}>    
       <Col sm={12}>
         <br></br>
      <p className={styles.formlabel}>Do you have a Book Design?</p>
      <Col className={styles.formindent}>
        <Form.Check
          type="radio"
          label="Yes"
          name="bookdesign"
          id="bookdesignyes"
        />
         <Form.Check
          type="radio"
          label="No"
          name="bookdesign"
          id="bookdesignno"
        />
           <br/>
          <Form.Group>    
        <div className="input-group mb-3">
          <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
          <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload File</label>
        </div>
         </Form.Group>
          </Col>
         </Col>
        </Form.Group>
       
     <Form.Group as={Row}>
            <Col sm={10}>
            <br></br>
      <p className={styles.formlabel}>Get a Book Designer</p>
      <Col className={styles.formindent}>
              <Form.Check
                type="checkbox"
                label="Illustrations" 
                name="bookdesigner"
                            
              />
              <Form.Check
                type="checkbox"
                label="Book Cover Design"
                name="bookdesigner"               
               
              />
              <Form.Check
                type="checkbox"
                label="Book Interior Design"
                name="bookdesigner"               
               
              /> 
              </Col> 
               <br></br><br></br>
          <Row className={"form-group "+styleIn.textalignright}>    
          <Col md={4}>Trim Size</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
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
          </Col>
          </Row>
          
          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Interior Color</Col> 
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue={interiorcolor} onChange={ handleChange }>
          <option></option>
              <option>Black and White</option>
              <option>Color</option> 
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Paper Type</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
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
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Binding Type</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>
              <option>Paperback</option>
              <option>Hardback</option>
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Laminate</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
          <option> </option>
              <option>Gloss</option>
              <option>Matte</option>
              <option>Texture</option>
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Page Count</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
          <option> </option>
              <option>22</option>
              <option>28</option>
              <option>200</option>  
          </Form.Control>
          </Col>
          </Row>         
          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Quantity</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputtext}  type="text" />
          </Col>
          </Row>                
        </Col>
           
          </Form.Group>
          <br></br><br></br>
          <h3 className={styles.formheaderlabel}>DISTRIBUTION</h3>
          <br/>
          <p className={styles.formlabel}>13 Digit ISBN</p>
          <Col className={styles.formindent}>
          <Form.Group>
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/> 
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/>
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/>
          </Form.Group>
          </Col>
          <br></br><br></br>
      <p className={styles.formlabel}>Get Distribution Services</p>
      <Col className={styles.formindent}>
              <Form.Check
                type="checkbox"
                label="ISBN" 
                name="distribution1"
                            
              />
              <Form.Check
                type="checkbox"
                label="Ebook Distribution"
                name="distribution2"               
               
              />
              <Form.Check
                type="checkbox"
                label="Copyright Registration"
                name="distribution3"               
               
              />  
               <Form.Check
                type="checkbox"
                label="Print Book Distribution"
                name="distribution4"               
               
              />  
              </Col>
              <br></br><br></br>
          <h3 className={styles.formheaderlabel}>MARKETING</h3>
          <br></br>     

      <p className={styles.formlabel}>Get Marketing Services</p>
      <Col className={styles.formindent}>
              <Form.Check
                type="checkbox"
                label="Author Website" 
                name="marketing1"
                            
              />
              <Form.Check
                type="checkbox"
                label="Audio Book"
                name="marketing2"               
               
              />
              <Form.Check
                type="checkbox"
                label="Video Book"
                name="marketing3"               
               
              />  
               <Form.Check
                type="checkbox"
                label="Press Release Campaign"
                name="marketing4"               
               
              />  
               <Form.Check
                type="checkbox"
                label="Author Events"
                name="marketing5"               
               
              />  
               <Form.Check
                type="checkbox"
                label="Print Advertisment"
                name="marketing6"               
               
              />  
               <br/> <br/> <br/> 
              <Button className={styles.submitbuttondashboard}>Submit Request</Button>
              <br/> <br/> <br/>
              </Col>    
              
              </>
  )
}




