import React from "react";
// Layout
import { Container, Row, Col } from '../LayoutBlocks/LayoutBlocks';
// Img
import logo from "../../assets/svg/mascotLogo-trail-left-faded.svg";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// Components
import Button from "../Button/Button";


export default function Footer() {
  // Copyright Year
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <Container fluid className="bg-white text-center mt-8 border-t-8 border-highlight ">
        <Row>
          <Col className="w-full flex flex-col justify-center items-center py-5">
            <h2 className="font-oswald text-4xl">Contact Me</h2>
            <div className="border-b-4 border-black relative max-w-2xl px-20 opacity-75">
              <p className="font-robcon text-xl mb-2 mt-4">
                Lets work together to make something great
              </p>
              <img
                src={logo}
                aria-hidden="true"
                className="w-16 absolute right-0 bottom-0"
              ></img>
            </div>
            <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4 mt-4">
              <div className="">
                <p className="flex items-center font-oswald text-xl">
                  <IoIosMail color="#565656" className="w-8 h-auto mr-6" />
                  Jerrellustre@gmail.com
                </p>
              </div>
              <div>
                <a
                  href="#"
                  target="_blank"
                  className="flex items-center underline font-oswald text-xl"
                >
                  <FaLinkedin color="#565656" className="w-8 h-auto mr-6" /> View LinkedIn
                  Profile
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className={'pb-24 lg:pb-0'}>
        <Row>
          <Col className='justify-between items-center flex w-full '>
            <div className="pt-5 pb-4">
                <a href="#" title="See my Github Profile" target="_blank" className=" mr-7 p-2"><FaGithub color="white" className="w-8 h-auto inline-block"/></a>
                <a href="#" title="See my LinkedIn Profile" target="_blank" className="p-2"><FaLinkedin color="white" className="w-8 h-auto inline-block" /></a>
                <p className="font-robcon text-white text-base lg:text-xl mt-3">Copyright {currentYear} &copy; Jerrel Lustre</p>

            </div>
            <div>
              <Button anchor route='#top' label='Scroll to top'/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
