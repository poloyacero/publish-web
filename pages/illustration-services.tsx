import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Link from 'next/link';
import styles2 from '../components/FeaturedPackages/FeaturedPackages.module.css';
import styles from '../components/illustrations/Illustrations.module.css';
import { Col, Container, Row ,Form,Image,Nav,Button} from 'react-bootstrap';



export default function IllustrationServices() {

    return (
      <div className={styles.container}>
        <Head>
          <title>Illustration Services</title>
          <link rel="icon" href="/thepublishing.svg" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid>
            <Container className="container">
              <Row className={styles.heading}>
                <h1>Illustration Services</h1>
              </Row>
              <Row><Col><br/></Col></Row>
              <Row><Col><br/></Col></Row>
              <Row className={styles.heading}>
                <h3>Style Selection </h3>
              </Row>
              <Form>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
           
           <Row className="row-fluid">  
              <Col className={styles.illustrationpadding} md={3}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="radio" label="Cartoon" name="selectstyles"  id="styles1"/>
                <Form.Check type="radio" label="Realistic" name="selectstyles" id="styles2"/>
                <Form.Check type="radio" label="Comic" name="selectstyles" id="styles3"/>
                <Form.Check type="radio" label="Caricature" name="selectstyles" id="styles4"/>
                <Form.Check type="radio" label="Sketch" name="selectstyles" id="styles16"/>
              </Form.Group>
              
                </Col>
                <Col className={styles.illustrationpadding} md={3}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="radio" label="Line Art" name="selectstyles" id="styles5"/>
                <Form.Check type="radio" label="Victor" name="selectstyles" id="styles6"/>
                <Form.Check type="radio" label="Isometric" name="selectstyles" id="styles7"/>
                <Form.Check type="radio" label="Fantasy" name="selectstyles" id="styles8"/>
                <Form.Check type="radio" label="Charcoal" name="selectstyles" id="styles15"/>
              </Form.Group>
              
                </Col>
                <Col className={styles.illustrationpadding} md={3}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="radio" label="3D Render" name="selectstyles" id="styles9"/>
                <Form.Check type="radio" label="Low Poly"name="selectstyles"  id="styles10"/>
                <Form.Check type="radio" label="Pop Art" name="selectstyles" id="styles11"/>
                <Form.Check type="radio" label="Vintage" name="selectstyles" id="styles12"/>
                <Form.Check type="radio" label="Watercolor" name="selectstyles" id="styles14"/>
              </Form.Group>
                </Col>       
              <Col className={styles.illustrationpadding} md={"auto"}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="radio" label="Abstract" name="selectstyles" id="styles17"/>
                <Form.Check type="radio" label="Mixed Media" name="selectstyles" id="styles18"/>
                <Form.Check type="radio" label="Collage" name="selectstyles" id="styles19"/>
                <Form.Check type="radio" label="Graffiti" name="selectstyles" id="styles20"/>
                <Form.Check type="radio" label="Painting" name="selectstyles" id="styles13"/>
              </Form.Group>              
                </Col>
            </Row>
            </Form.Group>
            </Form>
            <Row><Col><br/></Col></Row>
            <Row><Col><br/></Col></Row>
            <Row className={styles.heading}>
                <h3>Standard Packages</h3>
              </Row>
              <Row className={styles.ctext}>
        <Col md={3} className={styles.product+("justify-md-center")}>
          <Col className={styles.product} md={12}>
                    
            <Row className={styles.container1}>
              <Row>
              <Col  className={styles.thelevel}><h3 className="text-left">Level 1</h3></Col>
              </Row>

            <Row className={styles.container2}>
            <Row className={styles.myl2}>
               <Col className={styles.myl2}>
              <Col>1&nbsp;&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustration&nbsp;&nbsp;</Col>
              <Col>€250&nbsp;&nbsp;</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
               <Col className={styles.myl2}>
              <Col>5&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€1000</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
               <Col className={styles.myl2}>
              <Col>10&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€1800</Col>
              </Col>
               </Row>
               <Row className={styles.myl2}>
               <Col className={styles.myl2}>
              <Col>20</Col>
              <Col>Illustrations</Col>
              <Col>€3000</Col>
              </Col>
              </Row>              
              </Row>
            </Row>
            
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <Row className={styles.myl2}><Col>
            <Image src="/img/services/leveling1.png" width="220px" height="auto" />
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <p className={styles.mylpsize}>Level 1 is the simplest coloring style. 
                It has solid flat colors. Because of its 
                simplicity it has the shortest working 
                time which usually takes 3-4 working 
                days depending on the number 
                of illustrations.
                <br/><br/>
                Inclusions:<br/>
                1 Figure<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            </Col>
            </Row>
          </Col>
          </Col>
          <Col md={3}>
          <Col className={styles.product} md={12}>         
         
            <Row className={styles.container1}>
              <Row>
              <Col  className={styles.thelevel}><h3 className="text-left">Level 2</h3></Col>
              </Row>

              <Row className={styles.container2}> 
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>1&nbsp;&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustration&nbsp;&nbsp;</Col>
              <Col>€350</Col>
              </Col>
            </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>5&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€1500</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>10&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€2800</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>20</Col>
              <Col>Illustrations</Col>
              <Col>€4000</Col>
              </Col>
              </Row>
              </Row>
            </Row>

              <Row className={styles.myl2}><Col><br/></Col></Row>
              <Row className={styles.myl2}>
              <Col>
              <Image src="/img/services/leveling2.png" width="220px" height="auto" />
              <Row className={styles.myl2}><Col><br/></Col></Row>
              <p className={styles.mylpsize}>Level 2 color is a coloring style 
                that gives your illustration shadows and 
                highlights. A working period of 1 week 
                is given to this coloring style depending 
                on the number of illustrations.
                <br/><br/><br/>
                Inclusions:<br/>
                2 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
              </Col>       
             </Row>            
          </Col>
          </Col>

          <Col md={3}>
          <Col className={styles.product} md={12}>           
            
          <Row className={styles.container1}>
              <Row>
              <Col  className={styles.thelevel}><h3 className="text-left">Level 3</h3></Col>
              </Row>
              <Row className={styles.container2}>
            <Row className={styles.myl2}>
            <Col className={styles.myl2}>
              <Col>1&nbsp;&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustration&nbsp;&nbsp;</Col>
              <Col>€450</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>5&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€2000</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>10&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€3800</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>20</Col>
              <Col>Illustrations</Col>
              <Col>€7000</Col>
              </Col>
              </Row>
              </Row>
            </Row>
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <Row className={styles.myl2}>
                <Col>
            <Image src="/img/services/leveling3.png" width="220px" height="auto" />
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <p className={styles.mylpsize}>Level 3 has a 3D-ish effect, an ideal
                coloring style for a realistic illustrations. 
                This coloring style consumes almost a 
                day to finish a single illustration 
                depending on the details and number 
                of characters in an illustration.
                <br/><br/>
                Inclusions:<br/>
                3 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            </Col>
            </Row>
          </Col>
          </Col>
          <Col md={3}>
          <Col className={styles.product} md={12}>          
            
          <Row className={styles.container1}>
              <Row>
              <Col  className={styles.thelevel}><h3 className="text-left">Level 4</h3></Col>
              </Row>
              <Row className={styles.container2}>
            <Row className={styles.myl2}>
            <Col className={styles.myl2}>
              <Col>1&nbsp;&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustration&nbsp;&nbsp;</Col>
              <Col>€1000</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>5&nbsp;&nbsp;&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€4500</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>10&nbsp;</Col>
              <Col>Illustrations</Col>
              <Col>€8000</Col>
              </Col>
              </Row>
              <Row className={styles.myl2}>
              <Col className={styles.myl2}>
              <Col>20</Col>
              <Col>Illustrations</Col>
              <Col>€14000</Col>
              </Col>
              </Row>
              </Row>
            </Row>
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <Row className={styles.myl2}><Col>
            <Image src="/img/services/Layer83.png" width="220px" height="auto" />
            <Row className={styles.myl2}><Col><br/></Col></Row>
            <p className={styles.mylpsize}>Level 4 is a 3D render and is the most 
                complex of all art style due to its 
                intricacy and depth. A working period of 
                9 days is given to this type of colorization 
                depending on the number of illustrations.
                <br/><br/>
                Inclusions:<br/>
                4 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            </Col>
            </Row>
          </Col>
          </Col>
          </Row>
          <Row><Col><br/></Col></Row>
          <Row><Col><br/><br/></Col></Row>
          < Row className={styles.heading}>
                <h3>The Publishing Artist</h3>
              </Row>
              <Row className={styles.ctext}>  
                <Col md={{ span: 2, offset: 1 }}>
                <Link href="/packages" passHref><Nav.Link className={styles2.link2}>Cleoward</Nav.Link></Link>
                </Col>
                <Col md={2}>
                <Link href="/packages" passHref><Nav.Link className={styles2.link2}>Charlo</Nav.Link></Link>
                </Col>
                <Col md={2}>             
                <Link href="/packages" passHref><Nav.Link className={styles2.link2}>Mark</Nav.Link></Link>
                </Col>
                <Col md={2}>
                <Link href="/packages" passHref><Nav.Link className={styles2.link2}>Joel</Nav.Link></Link>
                </Col>
                <Col md={2}>
                <Link href="/packages" passHref><Nav.Link className={styles2.link2}>Floyd</Nav.Link></Link>
                </Col>
            </Row>     

            </Container>           
          </Container>    
          <Container fluid>
            <Row className="justify-content-md-center">
              <Col md={9}>
                <Row>
                    <Col className={styles.imgpadding} md={4}>
                    <span ><Image src="/img/services/Layer79new.png" width="250px" height="auto"/></span>
                    </Col>
                    <Col  className={styles.imgpadding} md={4}>
                    <Image src="/img/services/Layer77.png" width="250px" height="auto" />
                    </Col>
                    <Col  className={styles.imgpadding}md={4}>
                    <Image src="/img/services/Layer87.png" width="250px" height="auto" />
                    </Col>
                </Row>               
                <Row>
                <Col  className={styles.imgpadding} md={4}>
                <Image src="/img/services/Layer94.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}  md={4}>
                <Image src="/img/services/Layer71.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}  md={4}>
                <Image src="/img/services/Layer78.png" width="250px" height="auto" />
                </Col>
                </Row>
                <Row>
                <Col  className={styles.imgpadding} md={4}>
                <Image src="/img/services/Layer86.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding} md={4}>
                <Image src="/img/services/pandas80.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding} md={4}>
                <Image src="/img/services/Layer92.png" width="250px" height="auto" />
                </Col>
                </Row>
                <Row>
                <Col   className={styles.imgpadding} md={4}>
                <Image src="/img/services/Layer83.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}   md={4}>
                <Image src="/img/services/Layer90.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}   md={4}>
                <Image src="/img/services/Layer89.png" width="250px" height="auto" />
                </Col>
                </Row>
                <Row>
                <Col  className={styles.imgpadding}   md={4}>
                <Image src="/img/services/Layer85.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}  md={4}  >
                <Image src="/img/services/Layer84.png" width="250px" height="auto" />
                </Col>
                <Col  className={styles.imgpadding}   md={4}>
                <Image src="/img/services/Layer91.png" width="250px" height="auto" />
                </Col>
                </Row>
                <Col> 
                <Link href="/pricing" passHref><Button className={styles.illustrationbutton}>Get Started</Button></Link></Col>
                </Col>
                </Row>               
              
                
                 </Container>
        </PageLayout>
        <Footer />
    </div>
  );
}