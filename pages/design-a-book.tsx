import Head from 'next/head';
import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';
import Steps from '../components/Steps';

import styles from '../styles/Home.module.css'
import stepStyle from '../components/Steps/Steps.module.css'
import headingStyle from '../components/PageHeading/PageHeading.module.css';
import { Container, Row } from 'react-bootstrap';

export default function DesignABook() {
  return (
    <div className={styles.container}>
      <Head>
      <title>Design A Book</title>
      <link rel="icon" href="/thepublishing.svg" />
    </Head>
    <NavMenu />
    <Banner title="How To Design a Book" img="/img/Slider.png" bg="#faf6f2">
      <p>
        Books are judged by their covers!<br/>
        If you’re ready to learn how to make<br/>
        your book cover design stand out,<br/>
        you’ve come to the right place.<br/>
      </p>
    </Banner>
    <Container fluid>
      <Container className="container">
        <Row style={{ color: '#7b6b5b', marginLeft: '110px', marginTop: '30px' }}>
          <h2>Here, we’ll address everything from<br/>
            high-level basics down to specific<br/>
            details of book cover design, including:
          </h2>
        </Row>
      </Container>
    </Container>
    <Steps variant="right" number={1} title="Printing Options" img="/img/9.png">
      <p>Changes in technology have allowed for self-publishers to have more book printing options today than ever before. Let’s look at the book printing and binding options available.</p>
      <p>Book Cover Options<br/>
        Book Textures<br/>
        Book Bindings<br/>
        Ink Qualities<br/>
        Paper Color<br/>
        Weights<br/>
      </p>
    </Steps>
    <Steps variant="left" number={2} title="Book Formats" img="/img/22.png">
      <p>We highly recommend that you publish in all formats—ebook, paperback, and hardcover. In this section, we’ll talk about print books vs. ebooks, the difference between paperback and hardcover, and the pros of publishing hardcover books.</p>
      <p><span className={stepStyle.subtitle}>Ebook and Printbooks</span><br/>
        One of the best ways to maximize your book’s potential success is to offer it in multiple formats. If a reader exclusively looks for books to read on their Kindle, they won’t find your book if there is no ebook version. On the other hand, if a reader exclusively shops for books in their local independent bookstore, they won’t find your book if there is no print version.
      </p>
      <p>
        Ebooks can be less expensive to produce, so some authors use them as free digital giveaways to build their author platform before producing print copies.
      </p>
    </Steps>
    <Steps variant="right" number={3} title="Book Trim Size" img="/img/12.png">
      <p>Trim size impacts the page count, weight, and overall look and feel of your book—and before you begin your book layout design, you’ll want to choose your book’s trim size.</p>
    </Steps>
    <Steps variant="left" number={4} title="Book Cover Design" img="/img/24.png">
      <p>Book cover design is one of the most fun parts of the publishing process! It’s an opportunity to take your manuscript—the story you’ve poured your heart and soul into—and give the words a visual representation.</p>
      <p>There are three things to consider in book cover design: the front cover, back cover, and spine.</p>
      <p>Tips to Design a Cover<br/>
        Give readers a sneak peek of what’s to come.<br/>
        Indicate the book’s genre.<br/>
        Understand your audience.<br/>
        Set the appropriate tone.<br/>
        Pay attention to the details.<br/>
        Follow the rules of design.<br/>
        Have a distinct style.<br/>
        Consider working with a professional.<br/>
      </p>
    </Steps>
    <Steps variant="right" number={5} title="Cover Design Ideas" img="/img/26.png">
      <p>Book cover design is constantly evolving, but there are several key trends and themes that appear in popular book covers.</p>
      <p><span className={stepStyle.subtitle}>6 Book Cover Design Ideas</span><br/>
        Minimal, Botanical, Intertwining Text
        Real Photos, Double Exposure, Typography
      </p>
    </Steps>
    <Steps variant="left" number={6} title="Hiring A Book Cover Designer" img="/img/25.png">
      <p>Your book cover is a reader’s first impression of your book, and often the best way to design the cover of your dreams is to hire a book cover designer!</p>
      <p>We highly recommend publishing a book in multiple formats (both print and digital), so it’s important to consider your publishing goals before you hire a book cover designer. If you’d like to publish in both formats, you’ll save money by having a designer create the print and ebook cover files at the same time.</p>
    </Steps>
    <Footer />
    </div>
  );
}