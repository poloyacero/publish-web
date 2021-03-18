import Link from 'next/link';
import React from 'react';
import { Carousel, Col, Container, Image, Nav, Row, Form } from 'react-bootstrap';
import EnquiryModal from '../EnquiryModal';

import styles from './Carousel.module.css' 

interface CarouselProps {}

const CarouselSlider = ({ ...props }: CarouselProps) => {
  const [enquiryModalShow, setEnquiryModalShow] = React.useState(false);

  return (
    <Container fluid style={{ background: '#f0e3d5' }}>
      <Container className={styles.carouselWrapper}>
        <Carousel>
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
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setEnquiryModalShow(true)}>Get Started</Nav.Link></Link>
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
              <p>Print a book, magazine, novel,<br/> advertising material or any kind of book<br/> you can imagine.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setEnquiryModalShow(true)}>Get Started</Nav.Link></Link>
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
              <p>Sell your book on your own website<br/> and around the world.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink} onClick={() => setEnquiryModalShow(true)}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} src="/img/stock.png" />
          </Carousel.Item>
        </Carousel>
      </Container>
      <EnquiryModal 
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
      </EnquiryModal>
    </Container>
  );
}

export default CarouselSlider;