import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "./SubPageBanner.css";

export default function SubPageBanner({text}) {
  return (
    <Container
      fluid
      className="text-bg-dark subPageBanner"
      style={{ paddingTop: 32, paddingBottom: 32 }}
    >
      <Container>
        <Row >
          <Col xs="auto">
            <h1 className="mt-2 h1">
              {text}
            </h1>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
