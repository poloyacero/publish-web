import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function PrintAdvertisement() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Print Advertisement</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>Print Advertisement</h1>
              <h5>€15,000 (¼ Page), €26,000 (½ Page), €45,000 (Full Page)</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

<ul style={{listStyleType:"circle"}}>
<li>Fast-track your dream of becoming a well-known author with a best-selling book.
<br/>
</li>
<li>This is a proven method to target frequent flyers. Best way to target key people of the traditional publishing companies.
<br/><br/>
</li>
<li>Marketing your book in an Inflight magazine allows you to advertise your book in the international and national airlines across the world to promote your work across the globe.
<br/><br/>
</li>
<li>When it comes to book marketing, the Inflight magazines serve as the most appropriate and impactful solution. The Inflight magazine helps to promote your book rapidly, creating awareness; this advertising method is extremely useful. Attractive magazines are regarded as significant points of promotion in airlines because passengers often prefer to read magazines during the journey. 
  <br/> <br/>
</li>
</ul>
<div className={styles.title}>
  <h4><b>Publisher’s Weekly</b></h4>
<h5>€2,400</h5>
</div>
<ul style={{listStyleType:"circle"}}>
<li>Publishers Weekly is the leading source in the publishing industry on news and data. Its weekly publication of its magazine is targeted to publishers, librarians, booksellers, and literary agents. Their website has more than one million readers.</li>
<li>Services include the following:

<ul style={{listStyleType:"disc"}}>
<li>Single-slot print ad in the Publishers Weekly magazine (one of eight slots).</li>
  <li>Online banner ad campaign on PublishersWeekly.com with ten thousand impressions.</li>
  <li>A listing in PW Select, a monthly supplement that covers indie authors and the self-publishing marketplace, which includes author interviews, book announcements, news, book reviews, and more.</li>
  <li>Your book will be placed on Publishers Weekly’s website dedicated to indie authors for one month.</li>
  <li>Social media promotion.</li>
  <li>Six-month digital subscription to Publishers Weekly.</li>
  <li>One free print copy of the Publishers Weekly issue in which your book’s PW Select listing appears in.</li>
</ul>
<br/>
</li>
</ul>
<div className={styles.title}>
<h4><b>Press Release Campaign</b></h4>
<h5>€400-500 per cover</h5>
</div>

<p>Press release campaign is tapping media outlets and sending them a snippet of your book. Inform the people through them that your book is now available for purchase.</p>


              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}