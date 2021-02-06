import Link from 'next/link';
import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './FeaturedProducts.module.css';

interface FeaturedProductsProps {}

const FeaturedProducts = ({ ...props }: FeaturedProductsProps) => {
  return (
    <Container fluid>
      <Container className="container">
        <Row className={styles.featuredProducts}>
          <h2>Products</h2>
          <Col md={3}>
            <Link href="/products" passHref><Nav.Link><Image className={styles.featuredProductImage} src="/img/print-book.png" /></Nav.Link></Link>
            <p>Print Book</p>
          </Col>
          <Col md={3}>
            <Link href="/products" passHref><Nav.Link><Image style={{ marginBottom: '6px' }} className={styles.featuredProductImage} src="/img/photo-book.png" /></Nav.Link></Link>
            <p>Photo Book</p>
          </Col>
          <Col md={3}>
            <Link href="/products" passHref><Nav.Link><Image className={styles.featuredProductImage} src="/img/magazine.png" /></Nav.Link></Link>
            <p>Magazine</p>
          </Col>
          <Col md={3}>
            <Link href="/products" passHref><Nav.Link><Image className={styles.featuredProductImage} src="/img/comic-book.png" /></Nav.Link></Link>
            <p>Comic Book</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FeaturedProducts;