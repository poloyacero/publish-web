import React from 'react';
import Link from 'next/link';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './Itemmarketing.module.css'

interface ItemProps {
  width: number;  
  title?: string;  
  children?: any;
  unit?: string;
  mlink?:string;
  orientation?: 'left' | 'center' | 'right';
  className?: string;
  }

const ItemMarketing = ({ children, ...props }: ItemProps) => {
  return (
    <Col className={styles.item} md={props.width}>
      <div className={styles.itemPad}>
      <Link href={""+props.mlink}> 
      <h6>{props.title}</h6></Link>
               <div className={styles.content}>
      {children}
         </div>
      </div>
    </Col>
  );
}

export default ItemMarketing;