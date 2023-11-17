import React from "react";
import Container from "../components/LayoutBlocks/Container/Container";
import Col from "../components/LayoutBlocks/Col/Col";
import Row from "../components/LayoutBlocks/Row/Row";
import HeadingBox from "../components/HeadingBox/HeadingBox";
import ContentContainer from "../components/ContentContainer/ContentContainer";
import Button from "../components/Button/Button";

export default function Homepage() {
  const skills = [
    { id: 1, label: "Web Design" },
    { id: 2, label: "HTML/CSS" },
    { id: 3, label: "Tailwind" },
    { id: 4, label: "Bootstrap" },
    { id: 5, label: "Javascript" },
    { id: 6, label: "React" },
    { id: 7, label: "PHP" },
    { id: 8, label: "Laravel" },
    { id: 9, label: "Databases" },
    { id: 10, label: "MySQL" },
    { id: 11, label: "Front-end Development" },
    { id: 12, label: "Responsive Websites" },
  ];

  return (
    <>
      <Container className="bg-black py-8">
        <Row className="justify-center border-2 border-white py-24 px-4">
          <Col className="flex flex-col items-center text-white ">
            <p className="uppercase text-3xl md:text-5xl font-oswald tracking-[0.75rem] mb-4">
              Jerrel Lustre
            </p>
            <HeadingBox text="I want to develop quality experiences worth remembering" />
            <h1 className="text-lg font-robcon font-light mb-2">
              B.C Canada Web Developer
            </h1>
            <div className="w-1/5 h-1 bg-highlight"></div>
            <ul className=" w-4/5 md:w-3/5 text-center my-4">
              {skills.map((item, i) => (
                <li key={item.id} className="inline-block my-1">
                  {item.label} {i < skills.length - 1 && <span> - </span>}
                </li>
              ))}
            </ul>
            <div className="w-1/6 h-1 bg-highlight"></div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <HeadingBox text="But first, let me introduce myself!" />
            <ContentContainer className={"relative"}>
              <div className="absolute top-0 left-0 right-0 h-24 bg-red"></div>
              <div className="flex">
                <img src="" alt="" />
                <div>
                  <img src="" alt="" />
                  <p className="mb-8">
                    I hope to use my work in order to help inspire others. With
                    my responsive websites and designs, I want to allow
                    companies to reach as many people as possible in order to
                    promote their message or brand.
                  </p>
                  <Button route={"About"} label={"Learn More About Me"} />
                </div>
              </div>
            </ContentContainer>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <HeadingBox text="Here are some of my featured projects. Feel free to look around!" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
