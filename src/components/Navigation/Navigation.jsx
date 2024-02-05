// Grid
import { Container, Row, Col } from "../LayoutBlocks/LayoutBlocks";
// Plugins
import { Link as ScrollLink } from "react-scroll";

// React Router
import { NavLink, useLocation } from "react-router-dom";

// Icons
import logo from "../../assets/svg/JerrelLustre-portfolio-logo-noText.svg";
import { IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

// CSS
import "./Navigation.css";

export default function Navigation() {
  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Home", path: "/", icon: FaHome },
    { id: 2, label: "About", path: "/about", icon: BsPersonFill },
    { id: 3, label: "My Projects", path: "/projects", icon: FaCodepen },
  ];

  return (
    <Container
      className="bg-black bg-opacity-90 w-screen h-12 py-4 flex items-center my-4 justify-between fixed z-[99]"
      fluid
    >
      <Row className="justify-between w-full  font-oswald text-lg text-white">
        <Col>
          <div className="flex w-full">
          <NavLink
                    to={'/'}
                  >
            <img src={logo} alt="Site Logo" className="w-16 h-16" />
            </NavLink>
            <ul className="lg:ml-6 flex gap-12 lg:gap-8 shadow-xl lg:shadow-none  items-center fixed bg-black lg:bg-transparent py-3 justify-center lg:justify-start lg:py-0 left-0 right-0 bottom-0 lg:relative">
              {/* Generate Menu links based on menuItems array */}
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={` flex justify-center flex-col items-center`}
                >
                  <NavLink
                    to={item.path}
                    className="kg:p-2 text-sm lg:text-lg flex-col flex items-center"
                  >
                    <item.icon className="lg:hidden" size={32} />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col className="align-self-end flex items-center">

            <div className="w-full flex items-center cursor-pointer">
              <IoIosMail className="w-12 h-12" />
              <ScrollLink
                to='bottom-anchor'
                className="ml-3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </ScrollLink>
            </div>

        </Col>
      </Row>
    </Container>
  );
}
