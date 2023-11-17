import React from "react";
// Grid
import Container from "../LayoutBlocks/Container/Container";
import Col from "../LayoutBlocks/Col/Col";
import Row from "../LayoutBlocks/Row/Row";

// React Router
import { Link, useLocation } from "react-router-dom";

// Icons
import logo from "../../assets/svg/JerrelLustre-portfolio-logo-noText.svg";
import { IoIosMail } from "react-icons/io";

// CSS
import "./Navigation.css";

export default function Navigation() {
  const location = useLocation();

  const menuItems = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "My Projects", path: "/projects" },
  ];

  return (
    <Container className="bg-black bg-opacity-75 h-12 flex items-center my-4 justify-between" fluid>
      <Container className="flex justify-between w-full">
        <Row className="justify-between font-oswald text-lg text-white">
          <Col>
            <div className="flex w-full">
              <img src={logo} alt="Site Logo" className="w-16 h-16" />
              <ul className="ml-6 flex gap-6  items-center">
                {/* Generate Menu links based on menuItems array */}
                {menuItems.map((item) => (
                  <li
                    key={item.id}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    <Link to={item.path} className="p-2">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col className="align-self-end flex items-center">
            <div className="flex">
              <a href="#" className="w-full flex items-center">
                <IoIosMail className="w-12 h-12" />
                <span className="ml-3">Contact Me</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    
  );
}
