import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function BookReview() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Review</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Book Review</b></h4>
              <h5>€3,400</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             
              <ul style={{listStyleType:"circle"}}>
              <li>A credible book review is essential to ensure your book’s impact on the market. A reader will always turn to reviews to get some insights if your book is worth buying or reading. This means your work is evaluated by well-respected industry professionals and will ignite the interest of book lovers and readers everywhere</li>
              <li>Book reviews can help build your credibility as a new author.</li>
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