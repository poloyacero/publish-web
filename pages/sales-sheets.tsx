import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function SalesSheets() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sales Sheets</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Sales Sheets</b></h4>
              <h5>€500-1500 per book</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

              <p>This one-page paper contains high-level, relevant information about your book. A sale sheet is basically, your high-level metadata such as the title, subtitle, publisher, publication date, etc.</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}