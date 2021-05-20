import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About The Company</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>About The Publishing</h1>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
              <p>The publishing is a dedicated partner and specialist in print to digital book publishing and self-publishing. </p>													
<p>We work for a vision of a world where everyone, no matter where they are, has easy access to produce and publish the books they want based on our basic values; trust, freedom and knowledge. </p>													
<p>Book publishing based on our values will get benefit from print-on-demand technology and its possibilities (print from one copy and up), as well as sales in various online book retailers and various bookstores, which means book production and distribution of books and e-books internationally. </p>													
<p>The publishing offers publishing options for everyone globally. </p>													
<p>The publishing and print-on-demand enable publishers without any financial risk to always keep their titles available and also publish new titles without the need for a minimum edition. </p>													
<p>In this way, new titles can be easily introduced to the book market and expired titles can be made available to readers again. </p>													
<p>With the publishing, authors publish their books as self-publishers in the bookstore without being dependent on a publisher  and freely decide the book's content, book design and price of their works. </p>													
<p>We provide professional and personal support, if desired, and follows the authors through all phases of the book project; from idea to implementation, publishing and marketing.	</p>
               
              
              </Col>
            </Row>
          </Container>
        </Container>
        </PageLayout>
      <Footer />
    </div>
  )
}