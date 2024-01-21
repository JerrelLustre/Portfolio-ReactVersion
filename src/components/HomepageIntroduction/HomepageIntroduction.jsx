import React from 'react'
// Layout
import { Container, Row, Col } from '../LayoutBlocks/LayoutBlocks';
// Components
import HeadingBox from "../HeadingBox/HeadingBox";
import ContentContainer from "../ContentContainer/ContentContainer";
import Button from "../Button/Button";
// Images
import gardenBg from "../../assets/bg/garden-bg-long.webp";
import profilePic from "../../assets/img/portrait-jerrel.webp";
import textLogo from "../../assets/svg/JerrelLustre-portfolio-logo.svg";
import mascot from "../../assets/svg/mascotLogo-trail-right.svg"

export default function HomepageIntroduction() {
  return (
    <Container className="my-12">
    <Row className="justify-center">
      <Col className="w-full lg:w-8/12 max-w-4xl">
        <HeadingBox text="But first, let me introduce myself!" />
        <ContentContainer className={"relative"}>
          {/* Background Placed on top of the container */}
          <div className="absolute top-0 left-0 right-0 h-[12rem] bg-red border-b-8">
            <img
              src={gardenBg}
              aria-hidden="true"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Content */}
          <div className=" flex flex-col lg:flex-row-reverse justify-between items-center z-10 relative lg:items-stretch">
            {/* Left Image */}
            <img
              src={profilePic}
              alt="Jerrel Lustre Profile Shot"
              className="w-[17.5rem]  object-contain"
            />
            {/* Right Text */}
            <div className="w-7/12 ">
              <div className=" lg:h-[11rem]">
                <img
                  src={textLogo}
                  alt="Jerrel Lustre"
                  className="w-full lg:w-[20rem]"
                />
                <img
                  src={mascot}
                  aria-hidden="true"
                  className="mt-1 hidden lg:inline"
                />
              </div>
              <div>
                <p className="mb-8 font-robcon text-xl mt-4">
                  I hope to use my work in order to help inspire others.
                  With my responsive websites and designs, I want to allow
                  companies to reach as many people as possible in order to
                  promote their message or brand.
                </p>
                <Button route={"About"} label={"Learn More About Me"} />
              </div>
            </div>
          </div>
        </ContentContainer>
      </Col>
    </Row>
  </Container>
  )
}
