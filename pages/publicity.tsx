import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function Publicity() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Publicity Campaign</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Publicity Campaign</b></h4>
              <h5>€26,000</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

              <p>You will have your own publicist who will be assigned exclusively to you. You will create a strategy that is best suited to your book—five marketing services, both yours and your publicist’s choice: marketing services that are effective to your kind of book and your target audience.</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}