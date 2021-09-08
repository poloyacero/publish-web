import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function BookVideo() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book Video</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Book Video Advertising Premium</b></h4>
              <h5>€4,900</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

<ul style={{listStyleType:"circle"}}>
<li>More than half of the population is on the internet. Hooked to social media, this marketing service is a must for any book—which includes creating a fifteen-second eye-catching video about your book and putting it on YouTube, the number 1 video-streaming site in the world. We will not just upload it but also create an ad. Every time viewers in your niche will view videos on YouTube, they will instantly see an ad about your book, which is unskippable.</li> 
<li>Considering the trillion number of YouTube subscribers on the daily, even just .01% of that number are potentially your book buyers, which is a great number to start with and will lead you to your dream.</li> 
<li>We need to create awareness and curiosity on what your book is all about.<br/><br/></li> 
</ul>
<div className={styles.title}>
<h4><b>Book Video</b></h4>
<h5>€2800 per minute</h5>
</div>
<p>
Book Video provide to your needs by showing your viewers a glimpse of your book on screen. It allows you to show a trailer of your book plot based on the option you chose. Take part of the social media noise through creative media.
</p>

              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}