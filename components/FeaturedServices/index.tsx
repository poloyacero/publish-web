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
          <Col md={4}>
            <Link href="/products" passHref><Nav.Link><Image src="/img/publish.png" /></Nav.Link></Link>
            <p>Publish</p>
            <span>A wide variety of publishing alternatives<br/> that offer a simpler or more flexible<br/> approach depending on your needs.</span>
          </Col>
          <Col md={4}>
            <Link href="/pricing" passHref><Nav.Link><Image style={{ marginBottom: '7px' }} src="/img/print.png" /></Nav.Link></Link>
            <p>Print</p>
            <span>Easy, fast and <br/>cost-effective printing.	
</span>
          </Col>
          <Col md={4}>
            <Link href="/marketing" passHref><Nav.Link><Image src="/img/sell.png" /></Nav.Link></Link>
            <p>Marketing</p>
            <span>Save time and potentially money,<br/> by benefiting from our years of<br/> expert marketing experience.</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedServices;