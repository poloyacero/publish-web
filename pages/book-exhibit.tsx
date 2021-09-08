import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function BookExhibit() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Exhibit</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Book Exhibit Extreme (BEE)</b></h4>
              <h5>€2,600</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

<ul style={{listStyleType:"circle"}}>
<li>Combined book exhibit [book fairs schedule will be sent on a different email].</li>
<li>BEE offers you the chance to get your book in front of international rights agents and publishers and a worldwide audience of potential readers. Not only will your book be exhibited in major international book shows, but you will also have the opportunity to connect with publishers, authors, and agents online through your PubMatch.com profile.</li>
<li>Exhibits included are the following:

<ul style={{listStyleType:"disc"}}>
<li>Single-slot print ad in the Publishers Weekly magazine (one of eight slots).</li>
  <li>Frankfurt Book Fair</li>
  <li>London Book Fair</li>
  <li>US Book Show</li>
  <li>Guadalajara Book Fair</li>
  <li>Beijing International Book Fair</li>
  
</ul>
<br/>
</li>
</ul>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}