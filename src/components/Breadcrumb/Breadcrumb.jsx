;


export default function BreadcrumbContainer({ children }) {
  return (
    <Container className="mt-2 mb-4">
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}
