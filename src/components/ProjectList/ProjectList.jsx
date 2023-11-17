import React from "react";
// Layout
import Container from "../LayoutBlocks/Container/Container";
import Col from "../LayoutBlocks/Col/Col";
import Row from "../LayoutBlocks/Row/Row";
// Components
import HeadingBox from "../HeadingBox/HeadingBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import Button from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectList() {
  return (
    <Container>
      <Row className="justify-center">
        <Col className="w-full lg::w-8/12 max-w-4xl">
          <HeadingBox text="Here are some of my featured projects. Feel free to look around!" />
          <ContentContainer className="flex-col items-center justify-center">
            <div className="flex flex-wrap gap-y-4">
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </div>

            <Button route="#" label="See All Projects" />
          </ContentContainer>
        </Col>
      </Row>
    </Container>
  );
}
