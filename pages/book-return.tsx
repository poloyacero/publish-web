import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function BookReturn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Return and Royalty Program</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Bookstore Returnability Program</b></h4>
              <h5>€500</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

              <p>Let us put your book in bookstores. This marketing strategy will allow bookstore owners to order your books in Ingram because your books are tagged as “returnable.” Pairing this service to your solid marketing plan will boost your presence with your book buyers because they can see your work on shelves.</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}