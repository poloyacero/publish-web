import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';

import styles from '../styles/Home.module.css'
import Item from '../components/Item';
import { Container, Row } from 'react-bootstrap';

export default function MarketingPage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Marketing Services</title>
          <link rel="icon" href="/thepublishing.svg" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid>
            <Container className="container">
              <Row className={styles.heading}>
                <h1>Marketing Services</h1>
              </Row>
            </Container>
          </Container>
          <Item width={6} img="/img/72.png" title="Web Design" subtitle="€1000" unit="/ 5 pages">
            <p>
            Bring you imagination to life. A team of professional book illustrators can provide gorgeous, eye-catching artwork to instantly set your title apart from the crowd!
            </p>
          </Item>
          <Item width={6} img="/img/73.png" title="Book Events Program">
            <p>
            A book cover design captures the essence of your words and displays them to your audience. Our design team will work with you to create an interesting and imaginative book cover that will excite your readers. Best of all, Book Cover Design allows you to choose your favorite cover theme.
            </p>
          </Item>
          <Item width={6} img="/img/71.png" title="Audio Book" subtitle="€2500" unit="/ 10,000 words">
            <p>
              If you can’t capture your audience visually then Audiobook Premium is the perfect alternative! Audiobook, by all means, provides a quality convenience in absorbing your story while your audience are in the middle of doing something. This is also the best format to reach the visually challenged audience who are interested in discovering the world you have created through words. In the event that your potential audience don’t have the ample time to read your work, then find a way to make it to your audience through audio recordings!
            </p>
          </Item>
          <Item width={6} img="/img/video.png" title="Video Book" subtitle="€2800" unit="/ per minute">
            <p>
              Book Video caters to your needs by showing your viewers a glimpse of your book on screen. It allows you to show a trailer of your book plot based on the option you chose. Take part of the social media noise through creative media.
            </p>
          </Item>
        </PageLayout>
        <Footer />
    </div>
  );
}