import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './Item.module.css'

interface ItemProps {
  width: number;
  img: string;
  title?: string;
  subtitle?: string;
  children?: any;
  unit?: string;
  orientation?: 'left' | 'center' | 'right';
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <Col className={styles.item} md={props.width}>
      <div className={styles.itemPad}>
        <Image src={props.img} />
        <h3 className={(props.subtitle) ? '' : styles.mgBottom}>{props.title}</h3>
        {(props.subtitle) ? <p> {props.subtitle} {(props.unit) ? <span>{props.unit}</span> : ''} </p> : ''  }
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Col>
  );
}

export default Item;