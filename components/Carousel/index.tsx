import Link from 'next/link';
import React from 'react';
import { Carousel, Col, Container, Image, Nav, Row, Form ,Button} from 'react-bootstrap';
import EnquiryModal from '../EnquiryModal';
import TheModal from '../TheModal';
import styles from './Carousel.module.css' 

interface CarouselProps {
  onHide?:any;
}

const CarouselSlider = ({ ...props }: CarouselProps) => {
  const [enquiryModalShow, setEnquiryModalShow] = React.useState(false);
  const [modalShowCreate, setModalShowCreate] = React.useState(false);

  return (
    <Container fluid style={{ background: '#f0e3d5' }}>
      <Container>
        <Carousel  className={styles.carouselWrapper}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="First slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Publish</h3>
              <p>Create and publish your<br/> own book in your way.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setModalShowCreate(true)}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} style={{ width: '40%' }} src="/img/Slider.png" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Print</h3>
              <p>Your thought. Our ink.<br/>Printing made easier.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setModalShowCreate(true)}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} src="/img/splash.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Sell</h3>
              <p>Sell your book on your <br/>own website and around the world.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setModalShowCreate(true)}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} src="/img/stock.png" />
          </Carousel.Item>
        </Carousel>
      </Container>
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
      {/* <EnquiryModal 
        title="Fill out the form to get the guides"
        show={enquiryModalShow}
        onHide={() => setEnquiryModalShow(false)}
      >
        <Container>
          <Row>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6} sm={12}>
                  <Form.Label className={styles.label}>First Name</Form.Label>
                  <Form.Control type="text" name="first-name"/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6} sm={12}>
                  <Form.Label className={styles.label}>Last Name</Form.Label>
                  <Form.Control type="text" name="last-name"/>
                </Col>
              </Form.Group>
            </Col>
            <Col md={{ span: 12, offset: 0 }}>
              <Form.Group as={Row}>
                <Col md={6} sm={12}>
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control type="email" name="email"/>
                </Col>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </EnquiryModal> */}
    </Container>
  );
}

export default CarouselSlider;