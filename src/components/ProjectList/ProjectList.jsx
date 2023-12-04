import React from "react";
import { Link } from "react-router-dom";
// Layout
import { Container, Row, Col } from '../LayoutBlocks/LayoutBlocks';
// Components
import HeadingBox from "../HeadingBox/HeadingBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import Button from "../Button/Button";

export default function ProjectList({ children }) {
  return (
    <Container>
      <Row className="justify-center">
        <Col className="w-full lg:w-8/12 max-w-4xl">
          <HeadingBox text="Here are some of my featured projects. Feel free to look around!" />
          <ContentContainer className="flex-col items-center flex">
            <div className="flex flex-wrap gap-y-4 justify-center mb-8">{children}</div>
            <Button route="#" label="See All Projects" />
          </ContentContainer>
        </Col>
      </Row>
    </Container>
  );
}

export function ProjectCard({ route, title, desc, tags, img }) {
  return (
    <Link to={route} className="w-5/12 m-3 bg-black p-3 block">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h3 className="lg:w-1/2 font-oswald text-2xl text-highlight">{title}</h3>
        <p className="lg:w-1/2 font-robcon text-base">{desc}</p>
      </div>
      <img src={img} alt={title} className="w-full my-4" />
      <ul className="flex justify-center flex-wrap text-base">
        {tags.map((tag, index) => (
          <li key={index}>
            {tag}
            {/* stop printing the seperator on the last item. Symbol equivalent to " / " */}
            {index < tags.length - 1 && <span>&nbsp;&#47;&nbsp;</span>}
          </li>
        ))}
      </ul>
    </Link>
  );
}
