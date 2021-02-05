import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout col={3}>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
      </PageLayout>
      <NavMenu />
      <Footer />
    </div>
  );
}