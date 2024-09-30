import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start mt-5">
      <Container className="p-4 text-light">
        <Row>
          <Col lg="6" md="12" className="mb-4">
            <h5 className="text-uppercase ">About Us</h5>
            <p>This is a book sales platform.</p>
          </Col>
          <div className="text-center p-3" style={{ color: "#fff" }}>
            © 2024 Copyright BookStore
          </div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
