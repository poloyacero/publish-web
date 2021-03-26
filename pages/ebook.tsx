import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Steps from '../components/Steps';

import styles from '../styles/Home.module.css'
import PageFooting from '../components/PageFooting';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

export default function EBook() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Self-Publish an Ebook</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <Banner title="Self-Publish an Ebook" img="/img/Ebook-heading.png" bg="#faf6f2">
        <p>
          Don't miss the world of readers<br/> who only read ebooks.<br/>
          Successfully manage your ebook publishing from one platform.
        </p>
      </Banner>
      <Steps variant="right" title="Ebook Self-Publishing" img="/img/ebook1.png">
        <p>One platform to manage all of your ebook files.</p>
        <p>No need to juggle multiple contracts for various individual distributors.</p>
        <p>Book distribution to major ebook retailers around the world.</p>
      </Steps>
      <Steps variant="right" title="Publishing an Ebook" img="/img/ebook2.png">
        <h5>EPUB Interior and Conversion</h5>
        <p>File for your book's interior.<br/> The EPUB format is the official standard of the IDPF(International Digital Publishing Forum) and is designed for reflowable content, meaning an EPUB reader can optimize text for any e-reading device.</p>
        <h5>Cover</h5>
        <p>High-res JPG image for your book cover to be used for display on retailer websites.</p>
      </Steps>
      <PageFooting title="Your Ebook Could Be Sold in Amazon, Apple, Kobo, Barnes & Noble, and More">
        <Link href="/pricing" passHref><Button className={styles.getStartedButton}>Get Started</Button></Link>
      </PageFooting>
      <Footer />
    </div>
  );
}