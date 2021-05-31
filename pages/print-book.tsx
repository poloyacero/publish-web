import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';

import styles from '../styles/Home.module.css'
import PageFooting from '../components/PageFooting';
import Link from 'next/link';
import { Button, Col, Container, Row } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import Item from '../components/Item';

export default function PrintBook() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Self-Publish an Ebook</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <Banner title="Printbook" img="/img/printbook.png" img_width="50%" bg="#faf6f2">
        <p>
          Freedom & flexibility to professionally<br/>
          publish the book you want with the<br/>
          quality you need.
        </p>
      </Banner>
      <PageLayout>
      <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h2>Inside the Book</h2>
            </Row>
          </Container>
        </Container>
        <Item width={6} img="/img/inside-book-1.png"></Item>
        <Col md={6} className={styles.brown}>
          <h3 className={styles.descriptionHeading}>Ink Qualities</h3>
          <p>
            <b>Black-and-White Printing</b><br/>
            Most economical, printed on 50 lb / 74 gms paper in crème or white.
          </p>
          <p>
            <b>Standard Color Printing</b><br/>
            Standard color quality, printed on 50 lb / 74 gms or 70 lb / 104 gms white paper.
          </p>
          <p>
            <b>Premium Color Printing</b><br/>
            Highest color quality with more vivid color, printed on 70 lb / 104 gms white paper.
          </p>
        </Col>
        <Item width={6} img="/img/inside-book-2.png"></Item>
        <Col md={6} className={styles.brown}>
          <h3 className={styles.descriptionHeading}>Paper Color and Weights</h3>
          <p>
            <b>Groundwood 38 lb / 56 gms</b><br/>
            Available in black-and-white printing and select, small-format trim sizes in the U.S. and U.K.
          </p>
          <p>
            <b>Crème 50 lb / 74 gms</b><br/>
            Available in black-and-white printing.
          </p>
          <p>
            <b>White 50 lb / 74 gms</b><br/>
            Available in black-and-white printing and standard color printing.
          </p>
          <p>
            <b>White 70 lb / 104 gms</b><br/>
            Available in standard and premium color printing options.
          </p>
        </Col>
      </PageLayout>
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h2>Outside the Book</h2>
            </Row>
          </Container>
        </Container>
        <Item width={4} img="/img/Layer 42.png" title="Book Cover Options">
          <p>
            <b>Paperback Full</b><br/>
            Color laminated cover with perfect-bound binding
          </p>
          <p>
            <b>Handcover</b><br/>
            Available with or without dusk jacket
          </p>
        </Item>
        <Item width={4} img="/img/Author copy 6.png" title="Book Textures">
        <p>
            <b>Matte Cover</b><br/>
            Soft feel, no glare, polished
          </p>
          <p>
            <b>Gloss Cover</b><br/>
            High shine, smooth finish
          </p>
          <p>
            <b>Digital Cloth Cover</b><br/>
            Subtle, cloth-like look (available with or without dust jacket. Textured feel available for hardcover books printed in the U.S. and U.K. only)
          </p>
        </Item>
        <Item width={4} img="/img/Layer 34.png" title="Book Binding">
          <p>
            <b>Perfect Bound</b><br/>
            Pages and paperback cover glued together at spine.
          </p>
          <p>
            <b>Case Laminate</b><br/>
            Pages glued to hardcover at ends.
          </p>
          <p>
            <b>Jacketed Case Laminate</b><br/>
            Pages glued to hardcover at ends with the option to design what prints on the cover beneath the jacket.
          </p>
        </Item>
      </PageLayout>
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h2>Book Sizes Options</h2>
            </Row>
          </Container>
        </Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
        <Item width={10} img="/img/paperback.png" title="Paperback Books">
          <p>
            Also known as Softcover books,<br/> bound in a flexible paper cover.
          </p>
          <p>
            4 x 6" (154 x 102mm) <br/>
            4 x 7" (178 x 102mm) <br/>
            5 x 7" (178 x 127mm) <br/>
            5 x 8" (203 x 152mm) <br/>
            6 x 9" (229 x 102mm) <br/>
            7 x 10" (254 x 178mm) <br/>
            8 x 8" (203 x 203mm) <br/>
            8 x 10" (254 x 203mm) <br/>
            8.5 x 8.5" (216 x 216mm) <br/>
            8.5 x 11" (280 x 216mm) <br/>
          </p>
        </Item>
        </Col>
        <Col md={6}>
        <Item width={10} img="/img/hardcover.png" title="Hardcover Books">
          <p>
            Available in case laminate, cloth, or dust jacket.
          </p>
          <p>
            5 x 8" (203 x 127mm) Case Lam/Cloth/Dust Jacket<br/>
            6 x 9" (229 x 152mm) Case Lam/Cloth/Dust Jacket<br/>
            5 x 7" (254 x 178mm) Case Lam<br/>
            5 x 8" (203 x 203mm) Case Lam<br/>
            6 x 9" (254 x 203mm) Case Lam<br/>
            7 x 10" (216 x 216mm) Case Lam<br/>
            8.5 x 11" (280 x 216mm) Case Lam<br/>
          </p>
        </Item>
        </Col>
        <Col md={6}>
        <Item width={10} img="/img/standardcolor.png" title="Standard Color Books">
          <p>
            An economical option for publishers <br/>who do not require the high-quality <br/>of Premium Color books.
          </p>
          <p>
            4 x 6" (102 x 154mm)<br/>
            4 x 7" (178 x 102mm)<br/>
            5 x 7" (178 x 127mm)<br/>
            5 x 8" (203 x 127mm)<br/>
            6 x 9" (229 x 152mm)<br/>
            7 x 10" (254 x 178mm)<br/>
            8 x 8" (203 x 203mm)<br/>
            8 x 10" (254 x 203mm)<br/>
            8.5 x 8.5" (216 x 216mm)<br/>
            8.5 x 11" (280 x 216mm)<br/>
          </p>
        </Item>
        </Col>
        <Col md={6}>
        <Item width={10} img="/img/premiumcolor.png" title="Premium Color Books">
          <p>
            Perfect for images, illustrations and photo books.
          </p>
          <p>
            4 x 7" (178 x 102mm)<br/>
            5 x 8" (203 x 127mm)<br/>
            6 x 9" (229 x 152mm)<br/>
            6.5 x 6.5" (165 x 165mm)<br/>
            7 x 10" (254 x 178mm)<br/>
            8 x 8" (203 x 203mm)<br/>
            8 x 10" (254 x 203mm)<br/>
            8.5 x 8.5" (216 x 216mm)<br/>
            8.5 x 11" (280 x 216mm)<br/>
            11 x 8.5" (216 x 280mm)<br/>
          </p>
        </Item>
        </Col></Row>
      </PageLayout>
      <PageFooting title="Ready and See Your Book in Print!">
        <Link href="/pricing" passHref><Button className={styles.getStartedButton}>Get Started</Button></Link>
      </PageFooting>
      <Footer />
    </div>
  );
}