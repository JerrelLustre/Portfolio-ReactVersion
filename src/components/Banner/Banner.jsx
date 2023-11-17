import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Banner.css";
import efgLogo from "../../assets/logo.svg"

export default function Banner() {
  return (
    <Container fluid className="text-bg-dark banner" style={{paddingTop: 80, paddingBottom: 80}}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto" className="text-center">
            <Row className="justify-content-center mb-5">
              <Col
                xs="8"
                className="text-center text-bg-dark p-4 bg-opacity-75 rounded"
              >
                <img src={efgLogo} alt="EFGSteps"/>
                <h1 className="h4 mt-2">
                  Curriculum checklist for new recruits' training and
                  achievemenets
                </h1>
              </Col>
            </Row>
            <Button>Login To Checklist</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
