import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const Header = () => {
  return (
    <div className="header">
      <Container fluid>
        <Row>
          <Col> <h5>Super-Admin</h5></Col>
        </Row>
      </Container>
    </div>
  );
};
