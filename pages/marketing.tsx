import Head from 'next/head';
import React from 'react';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import NavMenu from '../components/Nav';

import styles from '../styles/Home.module.css'
import Item from '../components/Item/marketingitem';
import { Container, Row } from 'react-bootstrap';

export default function MarketingPage() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Marketing Services</title>
          <link rel="icon" href="/thepublishing.svg" />
        </Head>
        <NavMenu />
        <PageLayout>
          <Container fluid>
            <Container className="container">
              <Row className={styles.heading}>
                <h1>Marketing Services</h1>
              </Row>
            </Container>
          </Container>
          <Item width={6} title="Digital Marketing Services" mlink="/digital-marketing" >
           
          </Item>
          <Item width={6}  title="Print Advertisement" mlink="/print-advertisement" >
          
          </Item>
          <Item width={6}  title="Book Exhibit Extreme" mlink="/book-exhibit" >
          
          </Item>
          <Item width={6}  title="Book Video" mlink="/book-video" >
           
          </Item>

          <Item width={6}  title="Book Return and Royalty Program" mlink="/book-return" >
          
          </Item>
          <Item width={6}  title="Audio Book" mlink="/audio-book" >
         
          </Item>
          <Item width={6}  title="Book Review" mlink="/book-review" >
          
          </Item>
          <Item width={6}  title="Hollywood World" mlink="/hollywood" >
           
          </Item>
          <Item width={6}  title="Publicity Campaign" mlink="/publicity" >
          
          </Item>
          <Item width={6}  title="Sale Sheets" mlink="/sales-sheets" >
        
          </Item>
          <Item width={6}  title="Advanced Reader Copies" mlink="/advanced-reader">
  
          </Item>
        </PageLayout>
        <Footer />
    </div>
  );
}