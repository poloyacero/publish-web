import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import PageLayout from '../components/Banner/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Package from '../components/Package';
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
      <PageLayout>
        <Package title="Starter" price={900} width={3} currency="$">
          <p>
            Paperback Format<br/>
            E-book Format<br/>
            Trim size: Portrait (8.5"x11") or Square (8.5"x8.5")<br/>
            Number of allotted images<br/>
            Standard Text & Layout Formatting<br/>
            Supply your own Cover<br/>
            ISBN and Books in Print Registration<br/>
            Author Photo and Cover Art<br/>
            Author Homepage and Book Page<br/>
            Online Sales and Royalty Accounting<br/>
            Worldwide Distribution and Online listing<br/>
            Electronic Galleys<br/>
            Paper Galleys<br/>
            2 Paperback Copies<br/>
            Google Books Preview<br/>
            Amazon Look Inside<br/>
            Barnes and Noble Read Instantly<br/>
            50 Business Cards<br/>
            50 Bookmarks<br/>
            50 Postcards<br/>
            5 Posters<br/>
            Professional Interior Templates<br/>
            Professional Cover Templates<br/>
            Consultation with a Designer<br/>
            U.S. Copyright Registrationadd-on available<br/>
          </p>
        </Package>
        <Package title="Deluxe" price={1500} width={3} currency="$">
          <p>
            Paperback Format<br/>
            E-book Format<br/>
            Trim size: Portrait (8.5"x11") or Square (8.5"x8.5")<br/>
            Number of allotted images<br/>
            Standard Text & Layout Formatting<br/>
            Supply your own Cover<br/>
            ISBN and Books in Print Registration<br/>
            Author Photo and Cover Art<br/>
            Author Homepage and Book Page<br/>
            Online Sales and Royalty Accounting<br/>
            Worldwide Distribution and Online listing<br/>
            Electronic Galleys<br/>
            Paper Galleys<br/>
            5 Paperback Copies<br/>
            Google Books Preview<br/>
            Amazon Look Inside<br/>
            Barnes and Noble Read Instantly<br/>
            50 Business Cards<br/>
            50 Bookmarks<br/>
            50 Postcards<br/>
            5 Posters<br/>
            Hardback Format<br/>
            Professional Interior Templates<br/>
            Professional Cover Templates<br/>
            Interior Graphics and Tables<br/>
            Customize Interior Templates<br/>
            Consultation with a Designer<br/>
            BasicAdvancedLibrary of Congress Registration<br/>
            U.S. Copyright Registrationadd-on available<br/>
          </p>
        </Package>
        <Package title="Pro" price={4000} width={3} currency="$">
          <p>
            Paperback Format<br/>
            E-book Format<br/>
            Trim size: Portrait (8.5"x11") or Square (8.5"x8.5")<br/>
            Number of allotted images<br/>
            Standard Text & Layout Formatting<br/>
            Supply your own Cover<br/>
            ISBN and Books in Print Registration<br/>
            Author Photo and Cover Art<br/>
            Author Homepage and Book Page<br/>
            Online Sales and Royalty Accounting<br/>
            Worldwide Distribution and Online listing<br/>
            Electronic Galleys<br/>
            Paper Galleys<br/>
            10 Paperback Copies<br/>
            Google Books Preview<br/>
            Amazon Look Inside<br/>
            Barnes and Noble Read Instantly<br/>
            50 Business Cards<br/>
            50 Bookmarks<br/>
            50 Postcards<br/>
            5 Posters<br/>
            Hardback Format<br/>
            Professional Interior Templates<br/>
            Professional Cover Templates<br/>
            Interior Graphics and Tables<br/>
            Customize Interior Templates<br/>
            Consultation with a Designer<br/>
            BasicAdvancedLibrary of Congress Registration<br/>
            U.S. Copyright Registrationadd-on available<br/>
            Data Entry<br/>
            Copy Editing<br/>
            Indexingadd-on available<br/>
            Citations - Footnotes & Endnotes<br/>
            Author Alterations Service (2 rounds)<br/>
            5 Hardback Copies<br/>
            BookStub™ Cards<br/>
            Bookstore Returnability - 12 months<br/>
            Set Your Own Price (SYOP)<br/>
            Web Design Service<br/>
          </p>
        </Package>
        <Package title="Elite" price={16000} width={3} currency="$">
          <p>
            Paperback Format<br/>
            E-book Format<br/>
            Trim size: Portrait (8.5"x11") or Square (8.5"x8.5")<br/>
            Number of allotted images<br/>
            Standard Text & Layout Formatting<br/>
            Supply your own Cover<br/>
            ISBN and Books in Print Registration<br/>
            Author Photo and Cover Art<br/>
            Author Homepage and Book Page<br/>
            Online Sales and Royalty Accounting<br/>
            Worldwide Distribution and Online listing<br/>
            Electronic Galleys<br/>
            Paper Galleys<br/>
            60 Paperback Copies<br/>
            Google Books Preview<br/>
            Amazon Look Inside<br/>
            Barnes and Noble Read Instantly<br/>
            300 Business Cards<br/>
            300 Bookmarks<br/>
            300 Postcards<br/>
            30 Posters<br/>
            Hardback Format<br/>
            Professional Interior Templates<br/>
            Professional Cover Templates<br/>
            Interior Graphics and Tables<br/>
            Customize Interior Templates<br/>
            Consultation with a Designer<br/>
            Cover Design Service<br/>
            BasicAdvancedLibrary of Congress Registration<br/>
            U.S. Copyright Registrationadd-on available<br/>
            Data Entry<br/>
            Copy Editing<br/>
            Indexingadd-on available<br/>
            Citations - Footnotes & Endnotes<br/>
            Author Alterations Service (2 rounds)<br/>
            Paper Galleys<br/>
            15 Hardback Copies<br/>
            15 BookStub™ Cards<br/>
            2 Leatherbound<br/>
            Bookstore Returnability - 12 months<br/>
            Set Your Own Price (SYOP)<br/>
            100% Royalty Program -3 years<br/>
            Web Design Service<br/>
            Press Release Campaign Essential<br/>
            Book featured on BookMad<br/>
            Social Media Setup Guide<br/>
            Book Video without Voice Over<br/>
            Book Video with Voice Over<br/>
            Book Exhibition Show<br/>
          </p>
        </Package>
      </PageLayout>
      <Footer />
    </div>
  );
}