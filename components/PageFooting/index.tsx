import { Container, Row } from "react-bootstrap";

import styles from './PageFooting.module.css';

interface PageFootingProps {
  title?: string;
  children: any;
}

const PageFooting = ({ children, ...props }: PageFootingProps) => {
  return (
    <Container fluid style={{background: '#f0e3d5'}}>
      <Container className="container">
        <Row className={styles.pageFooting}>
          <h2>{props.title}</h2>
          {children}
        </Row>
      </Container>
    </Container>
  );
}

export default PageFooting;