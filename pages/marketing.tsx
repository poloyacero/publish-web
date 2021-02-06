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
          <title>Marketing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid>
            <Container className="container">
              <Row className={styles.heading}>
                <h1>Marketing</h1>
              </Row>
            </Container>
          </Container>
          <Item width={6} img="/img/72.png" title="Web Design" subtitle="$1000" unit="/ 5 pages">
            <p>
              Let your imagination run wild and bring it to life, even if you’re not an experienced artist. Illustration Service has a team comprised of brilliant and skillful artists who can pick up and interpret your pictures for you.
            </p>
          </Item>
          <Item width={6} img="/img/73.png" title="Book Events Program">
            <p>
              Capture your audience with the book cover first, and then with your story! Find out what all readers have in mind when they search for a book. Book Cover Design gives you the freedom of choosing your preferred cover theme where you can coordinate with our design team to help you entice your readers with an exciting and inspiring book cover.
            </p>
          </Item>
          <Item width={6} img="/img/71.png" title="Audio Book" subtitle="$2000" unit="/ 50,000 words">
            <p>
              If you can’t capture your audience visually then Audiobook Premium is the perfect alternative! Audiobook, by all means, provides a quality convenience in absorbing your story while your audience are in the middle of doing something. This is also the best format to reach the visually challenged audience who are interested in discovering the world you have created through words. In the event that your potential audience don’t have the ample time to read your work, then find a way to make it to your audience through audio recordings!
            </p>
          </Item>
          <Item width={6} img="/img/video.png" title="Video Book" subtitle="$2800" unit="/ per minute">
            <p>
              Book Video caters to your needs by showing your viewers a glimpse of your book on screen. It allows you to show a trailer of your book plot based on the option you chose. Take part of the social media noise through creative media.
            </p>
          </Item>
        </PageLayout>
        <Footer />
    </div>
  );
}