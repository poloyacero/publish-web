import React from 'react';
import Link from 'next/link';
import { Col, Container, Image, Row ,Button} from 'react-bootstrap';

import styles from './ProductsLayout.module.css';

interface PageLayoutProps {
}

const ProductsLayout = ({ ...props }: PageLayoutProps) => {
  return (
    <Container fluid>
      <Container className="container">
        <Row className={styles.products}>
          <h2>Product Types</h2>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-print-book-img.png" />
            <span>Print Book</span>
            <p>Hardcover or paperback book using a wide range of paper, color, and binding options. The most common print-on-demand book, perfect for a variety of projects.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-photo-book-img.png" />
            <span>Photo Book</span>
            <p>Preserve memories or create a lookbook of your work with a hardcover photo book. Featuring the highest quality paper and rich color ink, our photo book products highlight the best of print options.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-magazine-img.png" />
            <span>Magazine</span>
            <p>Create beautiful magazines in full color. Features paper stock designed for magazines, paperback binding and printing on the inside covers.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-comic-img.png" />
            <span>Comic Book</span>
            <p>Traditional comic book size with paperback binding. Bring your art to life with printing in black & white or rich color, including on the inside of the cover.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-year-book-img.png" />
            <span>Yearbook</span>
            <p>For schools and institutions, a print-on-demand yearbook means flexibility and customization while saving money. Enjoy the best printing and binding at a fraction of the cost.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-calendar-img.png" />
            <span>Calendar</span>
            <p>Create a 12 or 18 month calendar with our calendar tool. Upload images and create events to build your calendar or upload an original calendar design.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-e-book-img.png" />
            <span>Ebook</span>
            <p>Create an ebook from your PDF, DOCX, or EPUB file ready for viewing on an ereader, tablet, or smartphone.</p>
          </Col>
          <Col className={styles.product} md={3}>
            <Image src="/img/product-catalogue-img.png" />
            <span>Advertising</span>
            <p>The industry term for traditional paperback binding, perfect bound is the most cost-efficient and popular way to bind on-demand products. Suitable for most projects.</p>
          </Col>
          <Col className="d-flex justify-content-center" md={{span:12,offset:0}}><Link href="/services" passHref><Button className={styles.sendButton}>Learn more</Button></Link></Col>
        </Row>
     
        
      
      </Container>
    </Container>
  );
}

export default ProductsLayout;