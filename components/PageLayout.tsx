import React from 'react';
import { Container, Row } from 'react-bootstrap';

interface PageLayoutProps {
  children: any;
}

const PageLayout = ({ children, ...props }: PageLayoutProps) => {
  return (
    <Container fluid>
      <Container className="container">
        <Row style={{ marginTop: '40px', marginBottom: '40px' }}>
          {children}
        </Row>
      </Container>
    </Container>
  );
}

export default PageLayout;