import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

// Layout
import { Container, Row, Col } from "../LayoutBlocks/LayoutBlocks";
// Icons
import { FaLinkedin } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";
// Plugins
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Components
import Button from "../Button/Button";
// CSS
import './mobileMenu.css'

// ProjectPageContainer Component
export default function ProjectPageContainer({ children }) {
  // State for page loading status
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Effect to set page as loaded once component mounts
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <Container >
      <Row>
        <Col>
          <div className="pt-40 flex flex-col justify-center items-center">
            <div className="border-white border-4 text-white font-robcon mx-8 flex mb-10 relative">
              {isPageLoaded && <ProjectPageNavigation />}
              <div>{children}</div>
            </div>
            <Button route="/projects" label="See other projects" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

/* -------------------------------------------------------------------------- */
/*                     // ProjectPageNavigation Component                     */
/* -------------------------------------------------------------------------- */
function ProjectPageNavigation() {
  // Find all h2 elements in the component, only look at h2 elements with an id
  const h2Elements = Array.from(document.querySelectorAll("h2")).filter(
    (h2) => h2.id
  );

  // Create anchor links based on h2 elements
  const anchorLinks = h2Elements.map((h2, index) => (
    <li key={index} className="hover:text-highlight ">
      <ScrollLink
        to={`${h2.id}`}
        className=" w-full inline-block lg:inline  border-white border-2 p-2 lg:border-0 lg:p-0 cursor-pointer"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {h2.textContent}
      </ScrollLink>
    </li>
  ));

  // Mobile Menu Functionality
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    console.log('ahoy')
    setMenuOpen(!isMenuOpen);
  };

  // Render the navigation component
  return (
    <>
      <div className={`mobile-menu ${isMenuOpen ? 'show' : ''} fixed inset-0 h-screen lg:h-auto lg:relative bg-[#000] items-center md:items-start flex px-4 z-20`}>
        <nav className="w-full lg:w-fit sticky overflow-visible pb-24 top-0 h-4/5 mt-20 overflow-y-auto lg:h-screen lg:pt-24 lg:pb-8 flex flex-col justify-between items-center">
          <div className="mb-4 lg:hidden">
            <h2 className="text-4xl text-white font-oswald ">
              Table of Contents
            </h2>
            <div className="h-2 bg-highlight  "></div>
          </div>
          <ul className="text-white font-oswald text-xl flex flex-col gap-8">
            {anchorLinks}
          </ul>
          <Link
            to="/projects"
            className="font-oswald text-xl flex justify-center items-center lg:block px-4 py-2 mt-12  lg:bg-transparent lg:text-white bg-white text-black border-2 p-2 lg:border-0 lg:p-0 cursor-pointer"
          >
            Return to projects
            <IoReturnDownBack className="" />
          </Link>
        </nav>
      </div>
      <div className="fixed w-10 h-10 bg-highlight z-40 right-0 bottom-50" onClick={toggleMenu}></div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                        // SectionContainer Component                       */
/* -------------------------------------------------------------------------- */
export function SectionContainer({ children }) {
  return (
    <section className="my-16 text-lg lg:text-xl">
      <Container className={"lg:px-4 2xl:px-10"}>
        <Row>{children}</Row>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                         // SectionHeading Component                        */
/* -------------------------------------------------------------------------- */
export function SectionHeading({ title, level = 2 }) {
  // Generate a unique id based on the title
  const Heading = `h${level}`;
  const id = title.replace(/\s+/g, "-").toLowerCase();

  // Render heading and a divider
  return (
    <>
      <Heading id={id} className="font-oswald text-2xl lg:text-4xl mb-3">
        {title}
      </Heading>
      <div className="h-1 mb-3 bg-highlight"></div>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                           // SkillsList Component                          */
/* -------------------------------------------------------------------------- */
export function SkillsList({ list }) {
  return (
    <div className="lg:mr-12  whitespace-nowrap my-8 lg:my-0">
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

/* -------------------------------------------------------------------------- */
/*                           // RolesList Component                           */
/* -------------------------------------------------------------------------- */
export function RolesList({ list }) {
  return (
    <div className="my-8 lg:my-0">
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

/* -------------------------------------------------------------------------- */
/*                     // ProjectImageContainer Component                     */
/* -------------------------------------------------------------------------- */
export function ProjectImageContainer({ className, image, alt = "" }) {
  // State for lightbox open/close
  const [open, setOpen] = React.useState(false);

  // Render image container with lightbox
  return (
    <div
      className={`lg:w-1/2 lg:ml-8 h-fit flex justify-center items-center p-4 border-white border-2${
        className ? " " + className : ""
      }`}
    >
      <img
        src={image}
        className="w-full cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <Lightbox
        onClick={() => setOpen(true)}
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: image, alt: alt }]}
        controller={{ closeOnBackdropClick: true }}
        render={{
          buttonPrev: () => null, // This will hide the Prev button
          buttonNext: () => null,
        }}
      />
    </div>
  );
}
