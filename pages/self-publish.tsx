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
        In today’s publishing marketplace, self-published authors are leading the pack. Embark on an incredible journey with us and get maximum results.

        </p>
      </Banner>
      <PageHeading number="7" title="Steps to Self-Publish a Book" />
      <Steps variant="left" number={1} title="Writing" img="/img/1.png">
        <p>Now that you know how to avoid the pitfalls after you write a book, let’s talk about what you should do next.
</p>
      </Steps>
      <Steps variant="right" number={2} title="Book Editing" img="/img/2.png">
        <span className={stepStyle.subtitle}>Copyediting</span>
        <p>"Copyediting refers to making your copy easy to read and understand and ensure that your content smoothly flows from the beginning to the end. Your text should be correct,
consistent, clear, concise and comprehensible. Copyeditors catch all the mistakes the author missed."
</p>
        <span className={stepStyle.subtitle}>Proof reading</span>
        <p>"Proofreading is the last line of defense against errors. It is not just looking for typos and misplaced punctuation but also searches for layout issues like page numbering, consistency with headings, placement of tables of figures in the text, bad line or page breaks, and more.
Proofreaders catch all the mistakes the copyeditor missed."
</p>
      </Steps>
      <Steps variant="left" number={3} title="Book Design" img="/img/3.png">
        <span className={stepStyle.subtitle}>Interior Book Design</span>
        <p>The art of designing a book's interior layout, known as book layout design, is also known as "typesetting." It includes all of the decisions that affect how readers interact with the content of your printed book, such as fonts, spacing, chapter heading styling, margins, and so on. A book layout designer will take care of all of this for you and create a print format that meets the needs of your readers.
</p>
        <span className={stepStyle.subtitle}>Book Cover Design</span>
        <p>A good cover design should not only look good on the shelf, but it should also clearly communicate the title, indicate the genre, and attract the right audience for the book. A professional cover designer understands what works in the market and has developed their own distinct style to make your book stand out. They'll collaborate with you to produce a cover that reflects your vision while also incorporating their understanding of genre tropes and publishing patterns to give your book that much-desired mass appeal.
</p>
      </Steps>
      <Steps variant="right" number={4} title="Book Metadata" img="/img/4.png">
        <p>Whether you’re selling digital content or physical copies, book metadata is how potential readers find your work online. It tells websites simple facts about your book, like title, price, and author, but it can also find you new readers.
</p>
      </Steps>
      <Steps variant="left" number={5} title="Publishing" img="/img/5.png">
        <p>Offers book publishing and production services but not limited to book editing, formatting, cover design, illustration  to authors and publishers. Different platforms available that distribute your book to several online retailers.
</p>
      </Steps>
      <Steps variant="right" number={6} title="Distribution" img="/img/6.png">
        <p>Publishers are offered an opportunity to make their print books available at various online retailers and physical bookstores, libraries, academic institutions and e-commerce companies around the world . Your book will be listed in the catalogs of distributors and can be ordered by sellers and libraries connected to the distributors’ ordering systems.
</p>
      </Steps>
      <Steps variant="left" number={7} title="Marketing" img="/img/7.png">
        <p>During the writing stage of our self-publishing process, we strongly advise you to start thinking about your marketing plan. Building an author site is a long process.
</p>
      </Steps>
      <Footer />
    </div>
  );
}