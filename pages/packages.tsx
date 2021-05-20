import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Package from '../components/Package';

import styles from '../styles/Home.module.css'

export default function PackagesPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Packages</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <Banner title="Packages" img="/img/8.png" variant="center" bg="#faf6f2">
        <p>All-inclusive Self-Publishing Packages At A Great Deal!</p>
      </Banner>
      <PageLayout>
        <Package title="Starter" price={900} width={3} currency="€">
          <p>
            <b>Editorial and Design</b><br/>
            25 Images Alloted<br/>
            5  Image Enhancement<br/>
            Standard Text and Layout Formatting<br/>
            <b>Production features:</b><br/>
            Paperback Format<br/>
            E-book Format<br/>
            Track Book Production Progress<br/>
            Electronic & Paper Galley<br/>
            1 Round of Alterations & 25 Corrections<br/>
            <b>Post-publication features:</b><br/>
            3 Paperback Copies<br/>
            Barnes and Noble Read Instantly<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Registration with Books In Print<br/>
            Assignment of International Standard Book Number (ISBN)<br/>
            Worldwide Online Book Distribution<br/>
            Book and Author featured in the Publishing Webpage<br/>
            Online Book Sales and Royalty Accounting<br/>
            Royalty Payments<br/>
            <b>Marketing services:</b><br/>
            20 Bookmarks
            20 Business Cards
            50 Postcards<br/>
          </p>
        </Package>
        <Package title="Deluxe" price={1500} width={3} currency="€">
          <p>
            <b>Editorial and Design</b><br/>
            50 Images Alloted<br/>
            25 Image Enhancement<br/>
            Standard Text and Layout Formatting<br/>
            <b>Production features:</b><br/>
            Paperback Format<br/>
            E-Book Format<br/>
            Track Book Production Progress<br/>
            Electronic & Paper Galley<br/>
            1 Round of Alterations & 25 Corrections <br/>
            <b>Post-publication features:</b><br/>
            5 Paperback Copies<br/>
            Barnes and Noble Read Instantly<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Registration with Books In Print<br/>
            Assignment of International Standard Book Number (ISBN)<br/>
            Worldwide Online Book Distribution<br/>
            Book and Author featured in the Publishing Webpage<br/>
            Online Book Sales and Royalty Accounting<br/>
            Royalty Payments<br/>
            <b>Marketing services:</b><br/>
            30 Bookmarks<br/>
            30 Business Cards<br/>
            30 Postcards<br/>
            3Posters<br/>

          </p>
        </Package>
        <Package title="Pro" price={4000} width={3} currency="€">
          <p>
            <b>Editorial and Design</b><br/>
            100  Images Alloted<br/>
            50 Image Enhancement<br/>
            Custom Text & Layout Formatting<br/>
            Basic Cover Design<br/>
            <b>Production features:</b><br/>
            Paperback Format<br/>
            Hardcover Format<br/>
            E-Book Format<br/>
            Design Consultation<br/>
            Data Entry<br/>
            Track Book Production Progress<br/>
            Electronic & Paper Galley<br/>
            2 Round of Alterations & 25 Corrections<br/>
            Post-publication features:<br/>
            15 Paperback Copies<br/>
            3 Hardback Copies<br/>
            10 BookStub Cards<br/>
            Barnes and Noble Read Instantly<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Registration with Books In Print<br/>
            International Standard Book Number (ISBN)<br/>
            Worldwide Online Book Distribution<br/>
            Book and Author featured in the Publishing Webpage<br/>
            Online Book Sales and Royalty Accounting<br/>
            Royalty Payments<br/>
            Copyright Registration<br/>
            Bookstore Returnability - 12 Months<br/>
            <b>Marketing services:</b><br/>
            50 Bookmarks<br/>
            50 Business Cards<br/>
            50 Postcards<br/>
            5 Posters<br/>
            Basic Web Design<br/>
            Press Release Campaign<br/>

          </p>
        </Package>
        <Package title="Elite" price={16000} width={3} currency="€">
          <p>
            <b>Editorial and Design</b><br/>
            300 Images Alloted<br/>
            150 Image Enhancement<br/>
            Custom Text & Layout Formatting<br/>
            Advance Cover Design<br/>
            <b>Production features:</b><br/>
            Availability of Your Book in Paperback Format<br/>
            Availability of Your Book in Hardcover Format<br/>
            Availability of Your Book in Color E-Book Format<br/>
            Design Consultation<br/>
            Data Entry<br/>
            Copyediting<br/>
            Indexing<br/>
            Citations - Footnotes & Endnotes<br/>
            Track Book Production Progress<br/>
            Electronic & Paper Galley<br/>
            2 Rounds of Alterations & Corrections Service<br/>
            Post-publication features:<br/>
            50 Paperback Copies<br/>
            10Hardback Copies<br/>
            20 BookStub Cards<br/>
            2 Leather-Bound Edition – The Ambassador<br/>
            Barnes and Noble Read Instantly<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Registration with Books In Print<br/>
            International Standard Book Number (ISBN)<br/>
            Worldwide Online Book Distribution<br/>
            Book and Author featured in the Publishing Webpage<br/>
            Online Book Sales and Royalty Accounting<br/>
            Royalty Payments<br/>
            Copyright Registration<br/>
            100% Royalty Program - 3 years<br/>
            Bookstore Returnability - 12 Months<br/>
            <b>Marketing services:</b><br/>
            200 Bookmarks<br/>
            200 Business Cards<br/>
            200 Postcards<br/>
            20 Posters<br/>
            Advance Web Design<br/>
            Press Release Campaign<br/>
            Social Media Setup Guide<br/>
            Book Video with Voice-Over<br/>

          </p>
        </Package>
      </PageLayout>
      <Footer />
    </div>
  );
}