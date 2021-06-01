import Link from 'next/link';
import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './FeaturedServices.module.css'

interface FeaturedServicesProps {}

const FeaturedServices = ({ ...props }: FeaturedServicesProps) => {
  return (
    <Container fluid style={{ background: '#faf6f2' }}>
      <Container className="container">
        <Row className={styles.featuredServices}>
          <h2>Services</h2>
          <Col md={3}>
            <Link href="/products" passHref><Nav.Link><Image src="/img/publish.png" /></Nav.Link></Link>
            <p>Publish</p>
            <span>A wide variety of publishing alternatives that offer a simpler or more flexible approach depending on your needs.</span>
          </Col>
          <Col md={3}>
            <Link href="/pricing" passHref><Nav.Link><Image  src="/img/print.png" /></Nav.Link></Link>
            <p>Print</p>
            <span>Gives your thought a chance to look better. Printing precisely what you need for less.</span>
          </Col>
          <Col md={3}>
            <Link href="/distribution" passHref><Nav.Link><Image src="/img/airplane.png" /></Nav.Link></Link>
            <p>Distribute</p>
            <span>Availability of your book<br/> online, retail stores and<br/> around the world.</span>
          </Col>
          <Col md={3}>
            <Link href="/services" passHref><Nav.Link><Image src="/img/sell.png" /></Nav.Link></Link>
            <p>Marketing</p>
            <span>Save time and potentially money,<br/> by benefiting from our years of<br/> expert marketing experience.</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedServices;