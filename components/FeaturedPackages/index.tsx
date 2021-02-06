import Link from 'next/link';
import React from 'react';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';

import styles from './FeaturedPackages.module.css';

interface FeaturedPackagesProps {}

const FeaturedPackages = ({ ...props }: FeaturedPackagesProps) => {
  return (
    <div className={styles.featuredPackages}>
      <h2>Packages</h2>
      <div className={styles.featuredPackage}>
        <Container className="container">
          <Row>
            <Col className={styles.featuredPrice} md={3}>
              <div>
                <h3>Starter</h3><br/>
                <span>$900</span>
              </div>
            </Col>
            <Col className={styles.description} md={4}>
              <p>If you are looking for a basic deal for your book, our Starter package is just what you need. It can be a good avenue for you to try our services.</p>
              <Link href="/" passHref><Nav.Link className={styles.link}>View Packages</Nav.Link></Link>
            </Col>
            <Col className="image" md={5}><Image src="/img/package1.png" /></Col>
          </Row>
        </Container>
      </div>

      <div className={styles.featuredPackage} style={{background: '#faf6f2'}}>
        <Container className="container">
          <Row>
            <Col className="image" md={5}><Image src="/img/package2.png" /></Col>
            <Col className={styles.description} md={4}>
              <p>If you want more than a basic then opt for this package. A great way for you to maximize your online presence.</p>
              <Link href="/" passHref><Nav.Link className={styles.link}>View Packages</Nav.Link></Link>
            </Col>
            <Col className={styles.featuredPrice + ' ' + styles.featuredPriceRight} md={3}>
              <div>
                <h3>Deluxe</h3><br/>
                <span>$1500</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.featuredPackage}>
        <Container className="container">
          <Row>
            <Col className={styles.featuredPrice} md={3}>
              <div>
                <h3>Pro</h3><br/>
                <span>$4000</span>
              </div>
            </Col>
            <Col className={styles.description} md={4}>
              <p>Would you like to take your book to the next level? Take advantage of a better deal with our Pro package.</p>
              <Link href="/" passHref><Nav.Link className={styles.link}>View Packages</Nav.Link></Link>
            </Col>
            <Col className="image" md={5}><Image src="/img/package3.png" /></Col>
          </Row>
        </Container>
      </div>
        
      <div className={styles.featuredPackage} style={{background: '#faf6f2'}}>
        <Container className="container">
          <Row>
            <Col className="image" md={5}><Image src="/img/package4.png" /></Col>
            <Col className={styles.description} md={4}>
              <p>Let your readers easily find your book! Grab the best deal and try our Elite package.</p>
              <Link href="/" passHref><Nav.Link className={styles.link}>View Packages</Nav.Link></Link>
            </Col>
            <Col className={styles.featuredPrice + ' ' + styles.featuredPriceRight} md={3}>
              <div>
                <h3>Elite</h3><br/>
                <span>$16000</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FeaturedPackages;