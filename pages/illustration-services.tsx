import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';

import styles from '../styles/Home.module.css'
import { Col, Container, Row ,Form,Image} from 'react-bootstrap';

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
              <Row className={styles.heading}>
                <h3>Style Selection </h3>
              </Row>
              <Form>
              <Form.Group className={styles.formGroup} controlId="formBasicEmail">
           
           <Row  className={styles.products}>  
              <Col className={styles.product} md={{ span: 2, offset: 1 }}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="checkbox" label="Cartoon" />
                <Form.Check type="checkbox" label="Realistic" />
                <Form.Check type="checkbox" label="Comic" />
                <Form.Check type="checkbox" label="Caricature" />
              </Form.Group>
              
                </Col>
                <Col className={styles.product} md={2}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="checkbox" label="Line Art" />
                <Form.Check type="checkbox" label="Victor" />
                <Form.Check type="checkbox" label="Isometric" />
                <Form.Check type="checkbox" label="Fantasy" />
              </Form.Group>
              
                </Col>
                <Col className={styles.product} md={2}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="checkbox" label="3D Render" />
                <Form.Check type="checkbox" label="Low Poly" />
                <Form.Check type="checkbox" label="Pop Art" />
                <Form.Check type="checkbox" label="Vintage" />
              </Form.Group>
              
                </Col>
                <Col className={styles.product} md={2}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="checkbox" label="Painting" />
                <Form.Check type="checkbox" label="Watercolor" />
                <Form.Check type="checkbox" label="Charcoal" />
                <Form.Check type="checkbox" label="Sketch" />
              </Form.Group>
              
                </Col>
                <Col className={styles.product} md={2}>
              <Form.Group controlId="formBasicCheckbox" className={styles.ctext}>
                <Form.Check type="checkbox" label="Abstract" />
                <Form.Check type="checkbox" label="Mixed Media" />
                <Form.Check type="checkbox" label="Collage" />
                <Form.Check type="checkbox" label="Grafiti" />
              </Form.Group>              
                </Col>
            </Row>
            </Form.Group>
            </Form>

            <Row className={styles.heading}>
                <h3>Standard Packages</h3>
              </Row>
              <Row className={(styles.products,styles.ctext)}>
        
          <Col className={styles.product} md={3}>
           
         <h3 className="text-center">Level 1</h3>
            <Row>
              <Col md={2}>1</Col>
              <Col md={6}>Illustration</Col>
              <Col md={4}>€250</Col>

              <Col md={2}>5</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€1000</Col>

              <Col md={2}>10</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€1800</Col>

              <Col md={2}>20</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€3000</Col>
              
              
            </Row>
            <Row><Col><br/></Col></Row>
            <Image src="/img/services/leveling1.png" width="250px" height="auto" />
            <Row><Col><br/></Col></Row>
            <p>Level 1 is the simplest coloring style. 
                It has solid flat colors. Because of its 
                simplicity it has the shortest working 
                time which usually takes 3-4 working 
                days depending on the number 
                of illustrations.
                <br/>
                Inclusions:<br/>
                1 Figure<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            
          </Col>
          <Col className={styles.product} md={3}>
           
         <h3 className="text-center">Level 2</h3>
            <Row>
              <Col md={2}>1</Col>
              <Col md={6}>Illustration</Col>
              <Col md={4}>€350</Col>

              <Col md={2}>5</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€1500</Col>

              <Col md={2}>10</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€2800</Col>

              <Col md={2}>20</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€4000</Col>
              
              
            </Row>
            <Row><Col><br/></Col></Row>
            <Image src="/img/services/leveling2.png" width="250px" height="auto" />
            <Row><Col><br/></Col></Row>
            <p>Level 2 color is a coloring style 
                that gives your illustration shadows and 
                highlights. A working period of 1 week 
                is given to this coloring style depending 
                on the number of illustrations.
                <br/>
                Inclusions:<br/>
                2 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            
          </Col>
          <Col className={styles.product} md={3}>
           
            <h3 className="text-center">Level 3</h3>
            <Row>
              <Col md={2}>1</Col>
              <Col md={6}>Illustration</Col>
              <Col md={4}>€450</Col>

              <Col md={2}>5</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€2000</Col>

              <Col md={2}>10</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€3800</Col>

              <Col md={2}>20</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€7000</Col>
              
              
            </Row>
            <Row><Col><br/></Col></Row>
            <Image src="/img/services/leveling3.png" width="250px" height="auto" />
            <Row><Col><br/></Col></Row>
            <p>Level 3 has a 3D-ish effect, an ideal
                coloring style for a realistic illustrations. 
                This coloring style consumes almost a 
                day to finish a single illustration 
                depending on the details and number 
                of characters in an illustration.
                <br/>
                Inclusions:<br/>
                3 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            
          </Col>
          <Col className={styles.product} md={3}>
           
            <h3 className="text-center">Level 4</h3>
            <Row>
              <Col md={2}>1</Col>
              <Col md={6}>Illustration</Col>
              <Col md={4}>€1000</Col>

              <Col md={2}>5</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€4500</Col>

              <Col md={2}>10</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€8000</Col>

              <Col md={2}>20</Col>
              <Col md={6}>Illustrations</Col>
              <Col md={4}>€14000</Col>
              
              
            </Row>
            <Row><Col><br/></Col></Row>
            <Image src="/img/services/Layer83.png" width="250px" height="auto" />
            <Row><Col><br/></Col></Row>
            <p>Level 4 is a 3D render and is the most 
                complex of all art style due to its 
                intricacy and depth. A working period of 
                9 days is given to this type of colorization 
                depending on the number of illustrations.
                <br/>
                Inclusions:<br/>
                4 Figures<br/>
                Background/ Scene<br/>
                Full Body<br/>
                Color</p>
            
          </Col>
          </Row>

            </Container>           
          </Container>    
              
        </PageLayout>
        <Footer />
    </div>
  );
}