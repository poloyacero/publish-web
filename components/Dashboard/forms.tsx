import React from 'react';
import { Row, Col, Button,Form} from 'react-bootstrap';
import styles from './NavMenuDashboard.module.css';
import styleIn from '../../styles/inputstyle.module.css'


interface FormProps {
  className?: string;   
}

const Dforms = ({ ...props }: FormProps) => { 

  return (
    <>
    <Form.Group as={Row}>
              <Col sm={10}>
                <br/>
                <h3 className={styles.homeHeaderlabel}>EDITING</h3>
                <br/>
              </Col>
         <Col sm={10}>
      <p className={styles.formlabel}>Is your manuscript ready?</p>
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
      <Col sm={10}>
         <br></br>
      <p className={styles.formlabel}>Is your manuscript professionally edited?</p>
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
       
      </Col>
    </Form.Group>
    <Form.Group>
    
    <div className="input-group mb-3">
  <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
  <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Manuscript</label>
   </div>
  
  </Form.Group>

  <Form.Group>
    <Col><br/><br/></Col>
    <p className={styles.formlabel}>Ebook submission</p>
    <div className="input-group mb-3">
      <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
      <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Ebook Interior</label>
   </div>
  </Form.Group>
  <Form.Group>    
    <div className="input-group mb-3">
      <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
      <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload Ebook Cover &nbsp;&nbsp;</label>
   </div>
  </Form.Group>
  <Form.Group>    
       <Col sm={10}>
         <br></br>
      <p className={styles.formlabel}>Epub Conversion</p>
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
        </Form.Group>
        <Form.Group as={Row}>
            <Col sm={10}>
            <br></br><br></br>
      <p className={styles.formlabel}>Get Editing Services</p>
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
          </Form.Group>
          <br></br><br></br>
          <h3 className={styles.homeHeaderlabel}>DESIGN</h3>
          <Form.Group>    
       <Col sm={10}>
         <br></br>
      <p className={styles.formlabel}>Do you have a Book Design?</p>
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
        </Col>
        </Form.Group>
        <Form.Group>    
    <div className="input-group mb-3">
      <input type="file" className={"form-control "+styleIn.brownborder} id="inputGroupFile02"/>
      <label className={"input-group-text "+ styleIn.brownandwhite} htmlFor="inputGroupFile02">Upload File</label>
   </div>
  </Form.Group>
  <Form.Group as={Row}>
            <Col sm={10}>
            <br></br><br></br>
      <p className={styles.formlabel}>Get a Book Designer</p>
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
               <br></br><br></br>
          <Row className={"form-group "+styleIn.textalignright}>    
          <Col md={4}>Trim Size</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Edisabledbook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>
          
          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Interior Color</Col> 
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Paper Type</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Binding Type</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Laminate</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>

          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Page Count</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control>
          </Col>
          </Row>         
          <Row className={"form-group "+styleIn.textalignright}>  
          <Col md={4}>Quantity</Col>
          <Col md={8}>
          <Form.Control className={styleIn.inputselect2} as="select" defaultValue=" ">
              <option> </option>                                
              <option>Print Book and Ebook € 350</option>
              <option>Print Book Only € 300</option>                  
              <option>Ebook Only € 250</option>  
          </Form.Control> 
          </Col>
          </Row>                
        </Col>
           
          </Form.Group>
          <br></br><br></br>
          <h3 className={styles.homeHeaderlabel}>DISTRIBUTION</h3>
          <br/>
          <p className={styles.formlabel}>13 Digit ISBN</p>
          <Form.Group>
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/> 
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/>
          <Form.Control className={styleIn.createinput} type="text" defaultValue=" "/>
          </Form.Group>

          <br></br><br></br>
      <p className={styles.formlabel}>Get Distribution Services</p>
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
                label="Copywright Registration"
                name="distribution3"               
               
              />  
               <Form.Check
                type="checkbox"
                label="Print Book Distribution"
                name="distribution4"               
               
              />  
              
              <br></br><br></br>
          <h3 className={styles.homeHeaderlabel}>MARKETING</h3>
          <br></br>     

      <p className={styles.formlabel}>Get Marketing Services</p>
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

              <Form.Group>
                <br/> <br/> <br/> 
              <Button>Submit Request</Button>
              <br/> <br/> <br/>
              </Form.Group>
              </>
  );
};

export default Dforms;