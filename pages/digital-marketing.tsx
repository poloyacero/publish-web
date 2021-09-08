import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function DigitalMarketing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Marketing Services</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h1>Digital Marketing Services</h1>
              <p> [under this category are all marketing services that can be categorized as such]</p>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             

<ol type="A">
<li><b>Social Media Marketing</b>
 <ol type="a">
 <li><b>Social Media Marketing creation (€500)</b><br/>
   - Set up a social media account featuring the author, including Instagram, Facebook, Twitter, TikTok.</li>
</ol>
<br/>
</li>
<li><b>Social Media Marketing Plus 30 days (€2,400)</b><br/>
- Includes social media marketing creation plus a 30-day ad campaign on these platforms. Postings about the author or book twice a week; layouts will be done by us and will be approved by the author.
<br/><br/>
</li>
<li><b>Social Media Marketing Plus 90 days (€5,500)</b><br/>
- Includes social media marketing creation plus a 90-day ad campaign on these platforms. Postings about the author or book twice a week; layouts will be done by us and will be approved by the author.
<br/><br/>
</li>
<li><b>Social Media Marketing Extreme (€10,600)</b><br/>
	- Includes social media marketing creation plus a 6-month ad campaign on these platforms. Postings about the author or book twice a week; layouts will be done by us and will be approved by the author. We will handle all the inquiries about your work on these sites. A social media expert will be exclusively assigned to your account.
  <br/> <br/>
</li>
</ol>
<div className={styles.title}>
  <h4><b>Author Website</b></h4>
<h5>€500-1500 per author (Basic/Advance)</h5>
</div>
<p>If you hope to create an engaged audience over time, a website is the first step. It’s important to have your website when you publish a book. By lending credibility to your name as an author, a website is a great place for readers to go to learn more about you, your book, your events, and more.</p>


              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}