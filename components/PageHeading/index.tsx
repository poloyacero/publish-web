import { Container, Row } from "react-bootstrap";

import styles from './PageHeading.module.css';

interface PageHeadingProps {
  number?: number;
  title: string;
}

const PageHeading = ({ ...props }) => {
  return (
    <Container fluid style={{background: '#f0e3d5'}}>
      <Container className="container">
        <Row className={styles.pageHeading}>
          <h2><span>{props.number}</span> {props.title}</h2>
        </Row>
      </Container>
    </Container>
  );
}

export default PageHeading;