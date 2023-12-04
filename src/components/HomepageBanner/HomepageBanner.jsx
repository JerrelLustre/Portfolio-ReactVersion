import React from "react";
import { Container, Row, Col } from '../LayoutBlocks/LayoutBlocks';
import HeadingBox from "../HeadingBox/HeadingBox";
import './HomepageBanner.css';

export default function HomepageBanner() {
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
    <Container className="lg:pb-8 lg:pt-20 homepageBanner h-screen flex items-center" >
      <Row className="justify-center border-2 border-white h-[90%] px-4 py-8 items-center ">
        <Col className="flex flex-col items-center text-white ">
          <p className="uppercase text-3xl lg:text-5xl font-oswald tracking-[0.75rem] mb-4">
            Jerrel Lustre
          </p>
          <HeadingBox text="I want to develop quality experiences worth remembering" />
          <h1 className="text-lg font-robcon font-light mb-2">
            B.C Canada Web Developer
          </h1>
          <div className="w-1/5 h-1 bg-highlight"></div>
          <ul className=" w-4/5 lg:w-3/5 text-center my-4">
            {skills.map((item, i) => (
              <li key={item.id} className="inline-block my-1">
                {item.label} {i < skills.length - 1 && <span>&nbsp;-&nbsp;</span>}
              </li>
            ))}
          </ul>
          <div className="w-1/6 h-1 bg-highlight"></div>
        </Col>
      </Row>
    </Container>
  );
}
