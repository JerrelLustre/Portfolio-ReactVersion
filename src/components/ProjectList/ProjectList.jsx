import { Link } from "react-router-dom";
// Layout
import { Container, Row, Col } from "../LayoutBlocks/LayoutBlocks";
// Components
import HeadingBox from "../HeadingBox/HeadingBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import Button from "../Button/Button";
import ImageLoadingContainer from "../ImageLoadingContainer/ImageLoadingContainer";

export default function ProjectList({ children, text, projectLink = false }) {
  if (text == null) {
    text = "Here are some of my featured projects. Feel free to look around!";
  }

  return (
    <Container>
      <Row className="justify-center">
        <Col className="w-full lg:w-8/12 max-w-4xl">
          <HeadingBox text={text} />
          <ContentContainer className="flex-col items-center flex">
            <div className="flex flex-wrap gap-y-4 justify-center mb-8">
              {children}
            </div>
            {projectLink ? <Button route="projects" label="See All Projects" /> : null}
          </ContentContainer>
        </Col>
      </Row>
    </Container>
  );
}

export function ProjectCard({ route, title, desc, tags, img }) {
  return (
    <Link to={route} className="w-5/12 m-3 bg-black p-3 block">
    <Link to={"/projects/" + route} className="w-5/12 m-3 bg-black p-3 block">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <h3 className="lg:w-1/2 font-oswald text-2xl text-highlight">
          {title}
        </h3>
        <p className="lg:w-1/2 font-robcon text-base">{desc}</p>
      </div>
      <ImageLoadingContainer>
        <img
          src={img}
          alt={title}
          className="w-full my-4 object-container aspect-square"
        />
      </ImageLoadingContainer>

      <ul className="flex justify-center flex-wrap text-base font-bold">
        {tags.map((tag, index) => (
          <li key={index}>
            {tag}
            {/* stop printing the seperator on the last item. Symbol equivalent to " / " */}
            {index < tags.length - 1 && (
              <span className="text-highlight">&nbsp;&#47;&nbsp;</span>
            )}
          </li>
        ))}
      </ul>
    </Link>
  );
}
