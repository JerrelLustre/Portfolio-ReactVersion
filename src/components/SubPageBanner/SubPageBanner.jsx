import React from 'react'
// Layout
import { Container, Row, Col } from '../LayoutBlocks/LayoutBlocks';
// Css
import './SubPageBanner.css'

export default function SubPageBanner({text}) {
  return (
    <Container className="subPageBanner pt-24 pb-12 mb-10" >
    <Row className="">
      <Col className="text-4xl font-oswald text-white">
        <h1>{text}</h1>
        </Col>
      </Row>
    </Container>
  )
}
