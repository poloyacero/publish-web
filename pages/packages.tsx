import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import styles from '../styles/Home.module.css'

export default function PackagesPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Packages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Banner title="Packages" img="/img/8.png" variant="center" bg="#faf6f2">
        <p>All-inclusive Self-Publishing Packages At A Great Deal!</p>
      </Banner>
      <Footer />
    </div>
  );
}