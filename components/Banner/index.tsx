import { prependOnceListener } from 'cluster';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import styles from './Banner.module.css';

interface BannerProps {
  title: string;
  img: string;
  children: any;
}

const Banner = ({ children, ...props }: BannerProps) => {
  console.log(props);
  return (
    <Container fluid>
      <Container className="container">
        <Row className={styles.banner}>
          <Col md={12}><h1>{props.title}</h1></Col>
          <Col md={6}>{children}</Col>
          <Col md={6}><Image src={props.img} /></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;