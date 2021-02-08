import Link from 'next/link';
import React from 'react';
import { Button, Col } from 'react-bootstrap';

import styles from './Package.module.css';

interface PackageProps {
  title: string;
  price: number;
  children: any;
  width: number;
  currency?: string;
}

const Package = ({ children, ...props }: PackageProps) => {
  return (
    <Col className={styles.package} md={props.width}>
      <div className={styles.bg}>
        <h3>{props.title}</h3>
        <span>{props.currency + ' ' + props.price}</span>
        <div className={styles.packageContent}>{children}</div>
        <Link href="/pricing" passHref><Button className={styles.button}>Get Package</Button></Link>
      </div>
    </Col>
  );
}

export default Package;