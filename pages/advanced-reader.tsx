import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function AdvancedReader() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Advanced Reader Copies</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>Advanced Reader Copies</h1>
              <h5>€500-1500 per book</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

              <p>ARCs are used to get endorsements, which can be added to the final cover of your book before printing. ARCs are copies of your book that are printed in advance to generate buzz for your book.</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}