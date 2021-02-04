import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import PricingForm from '../components/PricingForm';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <PricingForm />
      <Footer />
    </div>
  );
}