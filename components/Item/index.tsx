import React from 'react';
import Link from 'next/link';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './Item.module.css'

interface ItemProps {
  width: number; 
  img: string; 
  title?: string;
  subtitle?: string;
  children?: any;
  unit?: string;
  mlink?:string;
  orientation?: 'left' | 'center' | 'right';
  className?: string;
  }

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <Col className={styles.item} md={props.width}>
      <div className={styles.itemPad}>
      <Link href={""+props.mlink}><Image src={props.img} className={props.className}/></Link> 
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