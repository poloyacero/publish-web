import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Steps from '../components/Steps';

import styles from '../styles/Home.module.css'
import stepStyle from '../components/Steps/Steps.module.css'
import PageHeading from '../components/PageHeading';

export default function SelfPublish() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How to Self-publish</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <Banner title="How To Self-publish a Book" img="/img/package3.png">
        <p>
          The book industry is thriving,<br/> and self-publishing is on the rise!<br/> 
          If you want to learn more about<br/> how to self-publish a book,<br/>
          you’ve come to the right place.
        </p>
      </Banner>
      <PageHeading number="7" title="Steps to Self-Publish a Book" />
      <Steps variant="left" number={1} title="Writing" img="/img/1.png">
        <p>Writing a book is a huge accomplishment. If you’ve made it that far, we hope you take a moment to stop and congratulate yourself on a job well done. Now, let’s get ready to share it with the world!</p>
      </Steps>
      <Steps variant="right" number={2} title="Book Editing" img="/img/2.png">
        <span className={stepStyle.subtitle}>Copyediting</span>
        <p>A copyedit is often confused with a line edit, but they’re very different steps in the editing process. A copyedit reviews technical flaws—issues with spelling, grammar, and punctuation—and looks for internal inconsistencies throughout the text.</p>
        <span className={stepStyle.subtitle}>Proof reading</span>
        <p>This is the final step in the editing process. A proofreader examines the final copy of the manuscript (usually after typesetting) for any awkward page breaks, and he or she might perform some light copyediting.</p>
      </Steps>
      <Steps variant="left" number={3} title="Book Design" img="/img/3.png">
        <span className={stepStyle.subtitle}>Interior Book Design</span>
        <p>To create a professionally published book. Typesetting, commonly referred to as book formatting, has “rules” for widows, orphans, hyphens, and various other elements within a book to make it more readable, ensuring a pleasant reading experience for your audience.</p>
        <span className={stepStyle.subtitle}>Book Cover Design</span>
        <p>Your book cover design is the first impression readers have of your book. While it’s important to be unique, it’s equally important to pay attention to what comparable covers in your genre look like. A professional book cover designer can help steer the creative direction—but you know your book best, and it’s important for you to bring your own ideas to help create a cover that brings your book to life.</p>
      </Steps>
      <Steps variant="right" number={4} title="Book Metadata" img="/img/4.png">
        <p>Book Metadata consists of all the information that describes your book, including your title, subtitle, price, trim size, author name, book description, ISBN, Bisac Codes and more.</p>
      </Steps>
      <Steps variant="left" number={5} title="Publishing" img="/img/5.png">
        <p>Offers indie authors and publishers the ability to create professional print books (paperback and hardcover) and ebooks. You can self-publish a book and make it available to 40,000+ retailers and libraries—in stores and online—through our global distribution network.</p>
      </Steps>
      <Steps variant="right" number={6} title="Distribution" img="/img/6.png">
        <p>Publishers can receive the same book distribution channels available to major traditional publishers. IngramSpark makes titles available to 40,000+ retailers, libraries, schools, and e-commerce companies including Amazon, Barnes & Noble, Indigo, Foyles, Waterstones, and more across the globe.</p>
      </Steps>
      <Steps variant="left" number={7} title="Marketing" img="/img/7.png">
        <p>Steps in our self-publishing process, we highly suggest that you begin thinking about your marketing strategy during the writing process. Building an author platform doesn’t happen overnight.</p>
      </Steps>
      <Footer />
    </div>
  );
}