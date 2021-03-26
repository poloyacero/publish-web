import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';

import styles from '../styles/Home.module.css'
import Item from '../components/Item';
import { Col, Container, Row } from 'react-bootstrap';

export default function MarketingPage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Add-On Services</title>
          <link rel="icon" href="/thepublishing.svg" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid>
            <Container className="container">
              <Row className={styles.heading}>
                <h1>Add-On Services</h1>
              </Row>
            </Container>
          </Container>
          <Item width={6} img="/img/services/52.png" title="Illustrations" subtitle="$300 - 1600" unit="/ 5 illustration">
            <p>
              Let your imagination run wild and bring it to life, even if you’re not an experienced artist. Illustration Service has a team comprised of brilliant and skillful artists who can pick up and interpret your pictures for you.
            </p>
          </Item>
          <Item width={6} img="/img/services/63.png" title="Book Cover Design" subtitle="$300 - 600" unit="/ design">
            <p>
              Capture your audience with the book cover first, and then with your story! Find out what all readers have in mind when they search for a book. Book Cover Design gives you the freedom of choosing your preferred cover theme where you can coordinate with our design team to help you entice your readers with an exciting and inspiring book cover.
            </p>
          </Item>
          <Item width={6} img="/img/services/53.png" title="Hardback Upgrade" subtitle="$500" unit="/ book">
            <p>
              Glam up your book with our gloss or matte dust jackets or textile covers by signing up to our Hardback Upgrade Service. An elegant wrapping will make your book cover look far more elegant.
            </p>
          </Item>
          <Item width={6} img="/img/services/54.png" title="Interior Graphic Design" subtitle="$40 - 100" unit="/ graphics">
            <p>
              Enhance your book with more visual trappings that can aid in expressing your content further such as graphs, charts, tables, and other images. Use the Interior Graphics Service to gain access to images that would suit your book’s needs.
            </p>
          </Item>
          <Item width={6} img="/img/services/56.png" title="Copyediting" subtitle="$0.13" unit="/ word">
            <p>
              Copyediting a manuscript is valued with great significance when it comes to publishing. A book’s credibility can be ranked based on its professionalism and refining works. Copyediting specialists are more than willing to offer you a quality output that will convey professionalism amongst your readers.
            </p>
          </Item>
          <Item width={6} img="/img/services/55.png" title="Indexing" subtitle="$0.18" unit="/ word">
            <p>
              Make your book even more accessible by providing your readers easier access to relevant terms and topics through Indexing Services.
            </p>
          </Item>
          <Item width={6} img="/img/services/51.png" title="Cover & Interior Proofs" subtitle="$200" unit="/ book">
            <p>
              By sending you the physical copy of cover and interior proofs. Simply ask us via email: there’s need to complete or navigate through a complicated online form.
            </p>
          </Item>
          <Item width={6} img="/img/services/57.png" title="Formatting & Layout" subtitle="$100 - 299" unit="/ book">
            <p>
              For aesthetic purposes, it is important to format your book. A well-formatted and well-organized book makes for smooth, neat reading.
            </p>
          </Item>
          <Item width={6} img="/img/services/58.png" title="Data Entry" subtitle="$15" unit="/ hour">
            <p>
              Data Entry service frees you from the burden of manually typing your manuscript. Let our team do it for you! Send in your manuscript material to have it converted into its digital format.
            </p>
          </Item>
          <Item width={6} img="/img/services/59.png" title="Copyright Registration" subtitle="$100" unit="/ book">
            <p>
              We value your work’s copyright welfare.  Copyright registration is included in our add-on services to ensure you retain all the rights to your content once it’s published. This service allows security against any possible copyright breach.
            </p>
          </Item>
          <Item width={6} img="/img/services/61.png" title="Proofreading" subtitle="$0.032" unit="/ word">
            <p>
              Delve into your stories further by exploring its potential. This services will help your stories can go deep enough to surprise even you.
            </p>
          </Item>
          <Item width={6} img="/img/services/60.png" title="Royalty Program" subtitle="$2800" unit="/ 3 years">
            <p>
              A royalty is the percent or money you make for every book you sell. Royalty Program guarantees you a full 100 percent royalties from your book sales within three years!
            </p>
          </Item>
          <Item width={6} img="/img/services/50.png" title="Book Return Program" subtitle="$900" unit="/ year">
            <p>
              Book Returns Program allows bookshops or retailers to return copies of your book that were not sold. Give your local bookshops the chance to hoard your literary work for book display and the returnability option if ever the book remains unsold.
            </p>
          </Item>
          <Item width={6} img="/img/services/62.png" title="EBook Distribution" subtitle="$130" unit="/ Title">
            <p>
              In this generation where everything runs digitally, it’s only more practical to expand your book’s marketability by tapping into the innovation of eBook publishing services. With its convenience, accessibility, interactive functionality, and large audience reach, the eBook industry is constantly on the loop of developing breakthroughs. Boost your audience reach and exposure with eBook services.
            </p>
          </Item>
        </PageLayout>
        <Footer />
    </div>
  );
}