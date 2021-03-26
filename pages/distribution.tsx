import Head from "next/head";
import Footer from "../components/Footer";
import NavMenu from "../components/Nav";
import Banner from '../components/Banner';
import Steps from '../components/Steps';
import { Container, Row } from "react-bootstrap";

import styles from '../styles/Home.module.css'
import stepStyles from '../components/Steps/Steps.module.css';

export default function Distribution() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Packages</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <Banner title="Global Book Distribution" img="/img/42.png" variant="left" bg="#faf6f2">
        <p>Reliable print book and ebook distribution from one self-publishing service</p>
      </Banner>
      <Container fluid>
        <Container className="container">
          <Row style={{ color: '#7b6b5b', marginLeft: '110px', marginTop: '30px' }}>
            <h2>Your Book Online, In Stores, and Around the World</h2>
          </Row>
        </Container>
      </Container>
      <Steps variant="left" img="/img/41.png">
        <p>When you self-publish with our publishing, you are plugged in to one of the publishing industry’s largest global book distribution networks, including access to over 40,000...</p>
        <p>
          <span className={stepStyles.subtitle}>Independent bookstores</span><br/>
          <span className={stepStyles.subtitle}>Online stores</span><br/>
          <span className={stepStyles.subtitle}>Chain stores</span><br/>
          <span className={stepStyles.subtitle}>Ebook retailers</span><br/>
          <span className={stepStyles.subtitle}>Libraries</span><br/>
          <span className={stepStyles.subtitle}>Universities</span><br/>
        </p>
      </Steps>
      <Footer />
    </div>
  );
}