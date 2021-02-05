import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import PageHeading from '../components/PageHeading';
import Steps from '../components/Steps';

import styles from '../styles/Home.module.css'
import stepStyle from '../components/Steps/Steps.module.css'

export default function SelfPublishCost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How to Self-publish</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <Banner title="How much does it cost to Self-publish a Book" img="/img/8.png">
        <p>
          The cost to self-publish a book<br/>
          varies depending on your budget,<br/>
          the type of book you’d like to print,<br/>
          and ultimately, your publishing goals.
        </p>
      </Banner>
      <PageHeading number="6" title="most common areas in which you may spend money to successfully publish a book." />
      <Steps variant="left" number={1} title="Book Editing" img="/img/1.png">
        <p>The cost to edit a book varies widely based on a few factors. Quality of Manuscript: some manuscripts require more work than others to produce a professional, ready-to-publish piece.</p>
        <p><span className={stepStyle.subtitle}>Quality of Manuscript:</span> some manuscripts require more work than others to produce a professional, ready-to-publish piece.</p>
        <p><span className={stepStyle.subtitle}>Genre:</span> some manuscripts require more work than others to produce a professional, ready-to-publish piece.</p>
        <p><span className={stepStyle.subtitle}>Experience:</span> some manuscripts require more work than others to produce a professional, ready-to-publish piece.</p>
        <p>Editorial charge per word, some charge per page,and some charge per hour. Here are some Editorial rough guidelines to give you an idea of common editorial rates.</p>
        <p><span className={stepStyle.subtitle}>Developmental Editing</span> (estimated pace 1-6 ms pgs/hr): $45-65/hr</p>
        <p><span className={stepStyle.subtitle}>Substantive or Line Edit</span> (estimated pace 1-5 ms pgs/hr): $50-60/hr</p>
        <p><span className={stepStyle.subtitle}>Basic Copyediting</span> (estimated pace 5-10 ms pgs/hr): $35-45/hr</p>
        <p><span className={stepStyle.subtitle}>Proofreading</span> (estimated pace 5-10 ms pgs/hr): $35-45/hr</p>
      </Steps>
      <Steps variant="left" number={2} title="Interior Design" img="/img/4.png">
        <p>The typesetting process mainly focuses on readability, such as proper spacing and fonts. The cost to typeset a book will vary depending on length, genre, and whether or not you’d like to package it with a final proofread.</p>
        <p>Common rates in market place for publishing professionals</p>
        <p>$500 - $1500 for book formatting<br/>
          The price of typesetting will increase based on the number of images, graphs, and tables in your book.
        </p>
      </Steps>
      <Steps variant="left" number={3} title="Book Cover Design" img="/img/5.png">
        <p>The typesetting process mainly focuses on readability, such as proper spacing and fonts. The cost to typeset a book will vary depending on length, genre, and whether or not you’d like to package it with a final proofread.</p>
        <p>The price of cover design is directly related to a designer’s experience. If you’re going to publish both print and ebook versions (which we recommend), make sure to look for a cover designer who can design both the print and ebook cover. Ask to see examples of a designer’s work before signing a contract and expect to spend at least $500 for a professional cover design.</p>
      </Steps>
      <Steps variant="left" number={4} title="Publishing" img="/img/3.png">
        <p>The cost to upload a print and ebook at the same time is $60. If you don’t want to upload both formats, a print book costs $60 to upload alone, and an ebook is $40 when uploaded alone.</p>
        <p>Another publishing expense you’ll incur is purchasing an ISBN, if you choose not to use a free ISBN. This is necessary if you’d like to enable your book for distribution, and each format of each book you publish must have its own unique ISBN.</p>
        <p>ISBNs are sold by country: In the U.S., ISBNs can be purchased from Bowker directly through your IngramSpark account for $100 each. You can also buy a block of ten ISBNs from Bowker for $300. In the UK, you can buy them from Nielsen Book, while Canadian publishers get ISBNs for free. A full list of ISBN distributors can be found on the International ISBN Agency's Website.</p>
        <p>If you want your book to be available in brick-and-mortar bookstores, you’ll need a barcode in addition to your ISBN. Some ISBN services sell barcodes, as well as ISBNs.</p>
      </Steps>
      <Steps variant="left" number={5} title="Printing and Shipping" img="/img/6.png">
        <p>The cost to print and ship a book depends on the following:</p>
        <p>Trim Size<br/>
          Interior Color and Paper<br/>
          Binding Type (paperback or hardback)<br/>
          Laminate Type (gloss, matte, or textured)<br/>
          Page Count<br/>
          Quantity<br/>
          Ship-To Address<br/>
        </p>
      </Steps>
      <Steps variant="left" number={6} title="Book Marketing" img="/img/7.png">
        <p>Determine your overall publishing budget, make sure that you factor in a portion for marketing.</p>
        <p>Investing in marketing initiatives with which you can track dollars directly to sales is a good tactic for those with a smaller budget and less freedom to experiment. Whether you’re putting in the work yourself or hiring a book marketing expert, it requires careful planning to successfully execute a marketing campaign.</p>
      </Steps>
      <Footer />
    </div>
  );
}