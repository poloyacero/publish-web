import Head from 'next/head';
import React from 'react';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import ProductsLayout from '../components/ProductsLayout';

import styles from '../styles/Home.module.css'

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <ProductsLayout />
      <Footer />
    </div>
  );
}