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
        The eBook market is growing at a rapid pace. If you don’t have an ebook version, you’re missing out on a chunk of readers. Using our platform, quickly publish your eBook to a wide variety of online stores in no time.

        </p>
      </Banner>
      <Steps variant="right" title="Ebook Self-Publishing" img="/img/ebook1.png">
        <p>Realize and Materialize your authorial dreams using our exclusive platform. The platform will do the rest for you and will come out in the right format in a matter of seconds. It shouldn't take too long to get your book out into the world
</p>
        
      </Steps>
      <Steps variant="right" title="Publishing an Ebook" img="/img/ebook2.png">
        <h5>EPUB Interior and Conversion</h5>
        <p>ePubs adapt and fit whatever type of screen they are displaying on. It is programmed to do this automatically. This helps authors create eBooks that flow exactly as they intended. ePubs are the standard file format for eBooks now.
</p>
        <h5>Cover</h5>
        <p>Our book cover artists are professional cover graphic designers, with the largest selection of original cover art in the world.
</p>
      </Steps>
      <PageFooting title="Your Ebook Could Be Sold in Amazon, Apple, Kobo, Barnes & Noble, and More">
        <Link href="/pricing" passHref><Button className={styles.getStartedButton}>Get Started</Button></Link>
      </PageFooting>
      <Footer />
    </div>
  );
}