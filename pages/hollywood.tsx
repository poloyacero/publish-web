import Head from "next/head";
import NavMenu from "../components/Nav";
import PageLayout from '../components/PageLayout';

import styles from '../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from "../components/Footer";

export default function Hollywood() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hollywood World</title>
        <link rel="icon" href="/thepublishing.svg" />
      </Head>
      <NavMenu />
      <PageLayout>
        <Container fluid>
          <Container className="container">
            <Row className={styles.heading}>
              <h4><b>Hollywood Pitch</b></h4>
              <h5>€2,190</h5>
            </Row>
          </Container>
        </Container>
        <Container fluid>
          <Container className="container">
            <Row>
              <Col className={styles.privacy}>
             
              <ul style={{listStyleType:"circle"}}>
              <li>Do you want to draw your book closer to Hollywood and be the next big thing in the movie industry? This is your chance.</li>
              <li>A thorough synopsis will be created for your book in three to four weeks. We will then pitch this to producers, directors, and movie executives.</li>
              <li>A guaranteed response in four weeks after submissions, and then you are set to go.<br/><br/></li>
              </ul>

              <div className={styles.title}>
              <h4><b>Hollywood Book-to-Screen</b></h4>
              <h5>€14,200</h5>
              </div>

              <ul style={{listStyleType:"circle"}}>
              <li>Do you want your book to be adapted into a movie? If this is a yes, then this marketing strategy is for you.</li>
              <li>A team of professional screenplay writers, actors, and directors will create a five-minute short movie clip of your book. The screenplay—or what we call the treatment—will be submitted to Hollywood producers, directors, and movie executives. The movie clip will be uploaded on YouTube and your social media accounts. You will have all the rights to the movie clip. </li>
              <li>Reach your dream by adapting your book into a movie. </li>
              </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </PageLayout>
      <Footer />
    </div>
  )
}