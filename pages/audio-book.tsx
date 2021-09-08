import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function AudioBook() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Audio Book</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>Audio Book</h1>
              <h5>€2500 per book (10,000 words)</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

              <p>If you can’t capture your audience visually then Audiobook Premium is the perfect alternative! Audiobook, by all means, provides a quality convenience in absorbing your story while your audience are in the middle of doing something. This is also the best format to reach the visually challenged audience who are interested in discovering the world you have created through words. In the event that your potential audience don’t have the ample time to read your work, then find a way to make it to your audience through audio recordings!</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}