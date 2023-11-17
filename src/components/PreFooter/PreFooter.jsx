import React from "react";



export default function PreFooter() {
  return (
    <Container className="text-bg-primary py-3" fluid>
      <Container>
        <Row className="text-center">
          <Col className="h4">Ready to join?</Col>
        </Row>
        <Row className="text-center justify-content-center mt-2">
          <Col xs="auto">
            <Button>Login To Checklist</Button>
          </Col>
          <Col xs="auto">
            <Button>Register Account</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
