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
            <Link href="/" passHref><Nav.Link><Image src="/img/publish.png" /></Nav.Link></Link>
            <p>Publish</p>
            <span>Publishing options you<br/> need to create your book<br/> your way</span>
          </Col>
          <Col md={4}>
            <Link href="/" passHref><Nav.Link><Image style={{ marginBottom: '7px' }} src="/img/print.png" /></Nav.Link></Link>
            <p>Print</p>
            <span>Simple and fast printing<br/> with no hidden fees</span>
          </Col>
          <Col md={4}>
            <Link href="/" passHref><Nav.Link><Image src="/img/sell.png" /></Nav.Link></Link>
            <p>Marketing</p>
            <span>From our indie bookstore<br/> to global retailers, sell your<br/> way</span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedServices;