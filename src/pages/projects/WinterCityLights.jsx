import React from "react";
// Components
import { Col } from "../../components/LayoutBlocks/LayoutBlocks";
import {
  ProjectImageContainer,
  RolesList,
  SectionContainer,
  SectionHeading,
  SkillsList,
} from "../../components/ProjectPageContainer/ProjectPageContainer";
import ProjectPageContainer from "../../components/ProjectPageContainer/ProjectPageContainer";
// Images
import bannerLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-banner(low-res).webp";
import banner from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-banner.webp";
import carousel from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-carousel.webp";
import checkoutLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-checkout(low-res).webp";
import checkout from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-checkout.webp";
import componentsLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-components(low-res).webp";
import components from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-components.webp";
import homepageLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-homepage(low-res).webp";
import homepage from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-homepage.webp";
import mobileLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mobile(low-res).webp";
import mobile from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mobile.webp";
import mockup from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mockup.webp";
import thankyouLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-thankyou(low-res).webp";
import thankyou from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-thankyou.webp";
import ticketSelectionLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-ticketSelection(low-res).webp";
import ticketSelection from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-ticketSelection.webp";

export default function WinterCityLights() {
  const projectDetails = {
    "project-title": "Winter City Lights Event Festival",
    "project-status": "Finished",
    "github-link": "https://github.com/JerrelLustre/Winter-City-Lights",
    "live-site-link": "https://winter-city-lights.jerrellustre.com/public/",
  };
  const techAndSkills = [
    "HTML",
    "Tailwind CSS",
    "Javascript",
    "Flickity plugin",
    "Lazyload plugin",
  ];

  const team = [
    {
      type: "me",
      member: "Jerrel Lustre - Site Developer - Project Lead",
    },
    {
      type: "team-member",
      member: "Mattias Bellan – Site Mockup Designer",
      link: "https://www.linkedin.com/in/mattias-bellan-5a3381239/",
    },
    {
      type: "team-member",
      member: "Nikola Aleksic - Site Mockup Designer",
      link: "https://www.linkedin.com/in/nikola-aleksic-597208259/",
    },
    {
      type: "team-member",
      member: "Kylie Chan – Designer for Campaign Graphics and Style Guide",
      link: "https://www.linkedin.com/in/kyliechan731/",
    },
    {
      type: "team-member",
      member: "Michael Cheung – Social Media Posts Copywriter",
      link: "https://www.linkedin.com/in/michael-cheung-uiux/",
    },
    {
      type: "team-member",
      member: "Aaron Qiu – Website Copywriter",
      link: "https://www.linkedin.com/in/aaron-qiu-498bb9116/",
    },
  ];

  return (
    <>
      <ProjectPageContainer>
        {/* For each section create a navigation button */}
        <SectionContainer>
          {/* Banner */}
          <Col className={"w-full"}>
            <SectionHeading title={projectDetails["project-title"]} level={1} />
            <img src={banner} alt="Winter City Lights mock website" />
          </Col>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Intro" />
              <p>
                This project was initially intended as a mock ad campaign for a
                fictional Vancouver Winter festival called “Winter City Light”.
                Besides organizing the work direction as the project lead, I
                also helped design and prototype the event website. I would
                later develop the design into a real website for this portfolio.
              </p>
              <div className="md:flex mt-10">
                <SkillsList list={techAndSkills} />
                <RolesList list={team} />
              </div>
            </div>
            <ProjectImageContainer image={mockup} alt='Mockups for the mobile and desktop versions of the site'/>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
            <SectionHeading title="Design Additions & Revisions" />
              <p>
              During the original project design, the website only had a desktop
              viewport and suffered from design flaws such as a lack of
              consistency and poor hierarchy. Remaking it now, I decided to
              incorporate important elements that a real event site would have
              such as a banner with a call to action placed above the fold, a
              section dedicated to describing the event's features or ,in other
              words, its value proposition, and I also added an image gallery of
              fictional "past events." For responsiveness, I created additional
              mobile designs for the pages and added a hamburger menu for easier
              mobile navigation. Since the fictional event took place in Canada,
              I used a mobile viewport of 390 x 884 and a desktop viewport of
              1920 x 1080 as I found that these were the most common viewports
              for Canadians. At the end, I came up with new designs and planned
              to develop pages for the homepage and a set of three pages for the
              "event pass selection" process.
              </p>
            </div>
            <ProjectImageContainer image={components} alt="Components made for the Winter City Lights prototype. It includes the header, footer, carousel, and 'cards' used in the event pass selection"/>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
            <SectionHeading title="Development & Workflow" />
              <p>
              To start, I first coded the mobile layout of the pages as it would
              make it easier to later develop the desktop design. I coded my
              HTML within php so that I had the option to create and reuse
              partials such as the header and footer. I used Tailwind CSS to
              better organize and create components and for easier
              implementation of breakpoints. To ease the workflow, I made sure
              to define commonly reused styles such as the site's colors and
              fonts in the Tailwind config. This was to better organize things
              as well as allow me to easily change such styles if I ever needed
              to in the future. For site optimization, I also made sure every
              vital image loaded in with a lazyload plugin ensuring they load
              only when necessary.
              </p>
            </div>
            <ProjectImageContainer image={homepage} alt='Homepage for the website'/>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
            <SectionHeading title="Making the Carousel" />
              <p>
              On the homepage, I used the Flickity plugin to create a carousel
              that talked about different parts of the event. I also used PHP to
              populate the content for each carousel cell dynamically. In order
              to match the mockup design, I used Javascript as well as edited
              the plugin's CSS to move the carousel navigation into its own
              container which allowed me to better position it and add things
              such as giving each section a thumbnail on the carousel's nav bar.
              </p>
            </div>
            <ProjectImageContainer image={carousel} alt="Demonstration of the event info carouse"/>
          </Col>
        </SectionContainer>
      </ProjectPageContainer>
    </>
  );
}
