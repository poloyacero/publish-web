import Link from 'next/link';
import React from 'react';
import { Carousel, Container, Image, Nav } from 'react-bootstrap';

import styles from './Carousel.module.css' 

interface CarouselProps {}

const CarouselSlider = ({ ...props }: CarouselProps) => {
  return (
    <Container fluid style={{ background: '#f0e3d5' }}>
      <Container className="container">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="First slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Publish</h3>
              <p>Create and publish your<br/> own book in your way.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} style={{ width: '40%' }} src="/img/Slider.png" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="Second slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Print</h3>
              <p>Print a book, magazine, novel,<br/> advertising material or any kind of book<br/> you can imagine.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} src="/img/splash.png" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/img/sliderbg.jpg"
              alt="Third slide"
            />
            <Carousel.Caption className={styles.carouselCaption}>
              <h3>Sell</h3>
              <p>Sell your book on your own website<br/> and around the world.</p>
            </Carousel.Caption>
            <Link href="/pricing"><Nav.Link className={styles.carouselLink}>Get Started</Nav.Link></Link>
            <Image className={styles.carouselImage} src="/img/stock.png" />
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default CarouselSlider;