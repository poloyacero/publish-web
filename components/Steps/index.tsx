import { prependOnceListener } from 'cluster';
import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

import styles from './Steps.module.css';

interface StepsProps {
  variant?: 'left' | 'right';
  number?: number;
  title?: string;
  img: string;
  children: any;
}

const Steps = ({ children, ...props }: StepsProps) => {
  if(props.variant === 'left') {
    return (
      <Container className="container">
        <Row className={styles.steps}>
          <Col md={{ span: 5, offset: 1 }}>
            {(props.title) ? <h3>{(props.number) ? <span>{props.number}</span> : ''} {props.title} </h3> : '' }
            {children}
          </Col>
          <Col md={5}>
            <Image src={props.img} />
          </Col>
        </Row>
      </Container>
    );
  }else{
    return (
      <Container className="container">
        <Row className={styles.steps}>
          <Col md={{ span: 5, offset: 1 }}>
            <Image src={props.img} />
          </Col>
          <Col md={5}>
            {(props.title) ? <h3>{(props.number) ? <span>{props.number}</span> : ''} {props.title} </h3> : '' }
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Steps;