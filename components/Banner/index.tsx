import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import styles from './Banner.module.css';

interface BannerProps {
  title: string;
  img: string;
  img_width?: string;
  children: any;
  variant?: 'left' | 'center' | 'right';
  bg?: string;
}

const Banner = ({ children, ...props }: BannerProps) => {
  console.log(props);
  return (
    <Container fluid style={{ background: props.bg }}>
      <Container className="container">
        <Row className={styles.banner + ' ' + `${props.variant === 'center' ? styles.bannerCenter : styles.bannerLeft}`}>
          <Col md={12}><h1>{props.title}</h1></Col>
          <Col md={(props.variant === 'center' ? 12 : 6)}>{children}</Col>
          <Col md={(props.variant === 'center' ? 12 : 6)}><Image src={props.img} style={{ width: props.img_width }}/></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;