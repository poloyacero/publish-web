import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import PageLayout from '../components/PageLayout';
import PricingForm from '../components/PricingForm';

import styles from '../styles/Home.module.css'

export default function Pricing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pricing</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PricingForm />
      <Footer />
    </div>
  );
}