import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Package from '../components/Package';
import { Col, Row} from 'react-bootstrap';
import styles from '../styles/Home.module.css'

export default function PackagesPage() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Packages</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
             
      <Banner title="" img="/img/8.png" variant="center" bg="#faf6f2"> 
     
                <h1 className="text-center">Packages</h1>
                       
        <p className={styles.bannerCenter}>All-inclusive Self-Publishing Packages At A Great Deal!</p>
      </Banner>
      <PageLayout>
        <Package title="Starter" price={900} width={3} currency="€">
          <p>
            <b>Edit and Design</b><br/>
            Paperback Format<br/>
            E-Book Format<br/>
            Standard Text and Layout Formatting<br/>
            1 Round Layout Revisions<br/>
            <b>Post-publication features:</b><br/>
            3 Paperback Copies<br/>
            2 ISBN<br/>
            Print Book Registration<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Barnes and Noble Read Instantly<br/>
            Worldwide Online Book Distribution<br/>
            Online Book Sales Account<br/>
            Royalties<br/>
            <b>Marketing services:</b><br/>
            20 Bookmarks<br/>
            20 Business Cards<br/>
            50 Postcards<br/>


          </p>
        </Package>
        <Package title="Deluxe" price={1500} width={3} currency="€">
          <p>
          <b>Edit and Design</b><br/>
            Paperback Format<br/>
            E-Book Format<br/>
            Standard Text and Layout Formatting<br/>
            1 Round Layout Revisions<br/>
            <b>Post-publication features:</b><br/>
            5 Paperback Copies<br/>
            2 ISBN <br/>
            Print Book Registration<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Barnes and Noble Read Instantly<br/>
            Worldwide Online Book Distribution<br/>
            Online Book Sales Account<br/>
            Royalties<br/>
            <b>Marketing services:</b><br/>
            30 Bookmarks<br/>
            30 Business Cards<br/>
            30 Postcards<br/>
            3Posters<br/>

          </p>
        </Package>
        <Package title="Pro" price={4000} width={3} currency="€">
          <p>
          <b>Edit and Design</b><br/>
              Paperback Format<br/>
              Hardcover Format<br/>
              E-Book Format<br/>
              Data Entry<br/>
              Custom Text & Layout Formatting<br/>
              2 Rounds Layout Revisions<br/>
              Design Consultation<br/>
              Basic Cover Design<br/>
              <b>Post-publication features:</b><br/>
              15 Paperback Copies<br/>
              3 Hardback Copies<br/>
              10 BookStub Cards<br/>
              3 ISBN<br/>
              Copyright Registration<br/>
              Print Book Registration<br/>
              Amazon Look Inside<br/>
              Google Books Preview<br/>
              Barnes and Noble Read Instantly<br/>
              Worldwide Online Book Distribution<br/>
              Online Book Sales Account<br/>
              Royalties<br/>
              Book Return Program  12 Months<br/>
              <b>Marketing services:</b><br/>
              50 Bookmarks<br/>
              50 Business Cards<br/>
              50 Postcards<br/>
              5 Posters<br/>
              Basic Web Design<br/>
              Press Release Campaign <br/>

          </p>
        </Package>
        <Package title="Elite" price={16000} width={3} currency="€">
          <p>
          <b>Edit and Design</b><br/>
            Paperback Format<br/>
            Hardcover Format<br/>
            E-Book Format<br/>
            Data Entry<br/>
            Copyediting<br/>
            Indexing<br/>
            Custom Text & Layout Formatting<br/>
            2 Rounds Layout Revisions<br/>
            Design Consultation<br/>
            Advance Cover Design<br/>
            <b>Post-publication features:</b><br/>
            50 Paperback Copies<br/>
            10 Hardback Copies<br/>
            20 BookStub Cards<br/>
            2 Leather-Bound <br/>
            3 ISBN<br/>
            Copyright Registration<br/>
            Print Book Registration<br/>
            Amazon Look Inside<br/>
            Google Books Preview<br/>
            Barnes and Noble Read Instantly<br/>
            Worldwide Online Book Distribution<br/>
            Online Book Sales Account<br/>
            Royalties<br/>
            100% Royalty Program 3 years<br/>
            Book Return Program  12 Months<br/>
            <b>Marketing services:</b><br/>
            200 Bookmarks<br/>
            200 Business Cards<br/>
            200 Postcards<br/>
            20 Posters<br/>
            Advance Website<br/>
            Press Release Campaign <br/>
            Author Events<br/>
            Social Media <br/>
            Audio Book<br/>
            Video Book<br/>

          </p>
        </Package>
      </PageLayout>
      <Footer />
    </div>
  );
}