import React from "react";
import "./MissingPgMessage.css";
import { Col, Container, Row } from "../LayoutBlocks/LayoutBlocks";
import Button from "../Button/Button";

export default function MissingPgMessage() {
  return (
    <Container className="fillPage">
      <Row>
        <Col className="text-center">
          <p className="errorCode" style={{ marginBottom: 16 }}>
            404
          </p>
          <p className="body" style={{ marginBottom: 32 }}>
            Page Not Found
          </p>
          <p className="body" style={{ marginBottom: 32 }}>
            The page you are looking for is not available or doesn't exist
          </p>
          <Button href="/" className="text-uppercase">
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
