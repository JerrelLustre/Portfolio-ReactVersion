import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// Layout
import { Container, Row, Col } from "../LayoutBlocks/LayoutBlocks";
// Icons
import { FaLinkedin } from "react-icons/fa";

export default function ProjectPageContainer({ children }) {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Makes sure the page is loaded before obtaining all h2 ids and then passing it into the ProjectPageNavigation component
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <div className="pt-40">
            <div className="border-white border-4 text-white font-robcon mx-8 flex">
              {isPageLoaded && <ProjectPageNavigation />}
              <div>{children}</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

// TODO: Add functionality to hide and unhide mobile

function ProjectPageNavigation() {
  // Find all h2 elements in the component, only look at h2 elements with an id
  const h2Elements = Array.from(document.querySelectorAll("h2")).filter(
    (h2) => h2.id
  );

  const anchorLinks = h2Elements.map((h2, index) => (
    <li key={index} className="hover:text-highlight ">
      <Link
        to={`${h2.id}`}
        className=" w-full inline-block md:inline  border-white border-2 p-2 md:border-0 md:p-0 cursor-pointer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {h2.textContent}
      </Link>
    </li>
  ));

  return (
    <div className=" fixed inset-0 md:relative bg-[#000] flex px-4">
      <nav className="w-full md:w-fit sticky top-0 h-screen flex flex-col justify-center items-center">
        <div className="mb-4 md:hidden">
          <h2 className="text-4xl text-white font-oswald ">Table of Contents</h2>
          <div className="h-2 bg-highlight  "></div>
        </div>

        <ul className="text-white font-oswald text-xl flex flex-col gap-8">
          {anchorLinks}
        </ul>
      </nav>
    </div>
  );
}

export function SectionContainer({ children }) {
  return (
    <section className="my-16 text-lg md:text-xl">
      <Container className={"lg:px-8 2xl:px-12"}>
        <Row>{children}</Row>
      </Container>
    </section>
  );
}

export function SectionHeading({ title, level = 2 }) {
  const Heading = `h${level}`;
  const id = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <Heading id={id} className="font-oswald text-2xl md:text-4xl mb-3">
        {title}
      </Heading>
      <div className="h-1 mb-3 bg-highlight"></div>
    </>
  );
}

export function SkillsList({ list }) {
  return (
    <div className="md:mr-12  whitespace-nowrap my-8 md:my-0">
      <h3 className="font-oswald font-extralighttext-2xl">
        Technology & Skills
      </h3>
      <div className="h-1 mb-3 bg-highlight"></div>
      <ul className="list-disc list-inside flex flex-col gap-2">
        {list.map((item, index) => (
          <li key={index} className="">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function RolesList({ list }) {
  return (
    <div className="my-8 md:my-0">
      <h3 className="font-oswald font-extralighttext-2xl">Project Roles</h3>
      <div className="h-1 mb-3 bg-highlight"></div>
      <ul className="font-normal flex flex-col gap-2">
        {/* Check if the team member is provided with a link. If not, simply print out their name */}
        {list.map((item, index) => (
          <li key={index} className="">
            {item.link ? (
              <a
                href={item.link}
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="inline mr-2" />
                {item.member}
              </a>
            ) : (
              item.member
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
