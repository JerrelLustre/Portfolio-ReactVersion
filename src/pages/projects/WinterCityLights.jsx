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
import ImageLoadingContainer from "../../components/ImageLoadingContainer/ImageLoadingContainer";
import { LinkList } from "../../components/ProjectPageContainer/ProjectPageContainer";
import AnimationContainer from "../../components/AnimationContainer/AnimationContainer";

// Images
// import bannerLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-banner(low-res).webp";
import banner from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-banner.webp";
import carousel from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-carousel.webp";
// import checkoutLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-checkout(low-res).webp";
import checkout from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-checkout.webp";
// import componentsLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-components(low-res).webp";
import components from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-components.webp";
// import homepageLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-homepage(low-res).webp";
import homepage from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-homepage.webp";
// import mobileLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mobile(low-res).webp";
// import mobile from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mobile.webp";
import mockup from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-mockup.webp";
// import thankyouLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-thankyou(low-res).webp";
import thankyou from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-thankyou.webp";
// import ticketSelectionLowRes from "../../assets/img/winter_city_lights/JerrelLustre-winterCityLights-ticketSelection(low-res).webp";
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
      member: "Mattias Bellan – Original Site Mockup Designer",
      link: "https://www.linkedin.com/in/mattias-bellan-5a3381239/",
    },
    {
      type: "team-member",
      member: "Nikola Aleksic - Original Site Mockup Designer",
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
  const githubLink = "https://github.com/JerrelLustre/Winter-City-Lights";
  const liveLink = "https://winter-city-lights.jerrellustre.com/public/";

  return (
    <AnimationContainer>
      <ProjectPageContainer>
        <SectionContainer>
          {/* Banner */}
          <Col className={"w-full"}>
            <SectionHeading title={projectDetails["project-title"]} level={1} />
            <ImageLoadingContainer>
              <img src={banner} alt="Winter City Lights mock website" />
            </ImageLoadingContainer>
          </Col>
          <Col className={"w-full mt-12 xl:flex"}>
            <div className="xl:w-1/2">
              <SectionHeading title="Intro" />
              <p>
                Initially, this project's website was a mockup used in a
                previous project where my group and I created advertising for a
                fictional Vancouver winter festival called "Winter City Lights."
                In that previous project, I worked as the project leader while
                also helping to design and prototype the website mockup. This
                mockup would later be redesigned and developed by myself into a
                real website as a demonstration of my skills as a web developer.
                To note, most of the design elements, layout, and development of
                the website were done solely by me. However, I have credited my
                previous group members below because they played a large part in
                the original branding of the website.
              </p>
            </div>
            <ProjectImageContainer
              className={"my-4 xl:my-0 xl:ml-8 xl:w-1/2"}
              image={mockup}
              alt="Mockups for the mobile and desktop versions of the site"
            />
          </Col>
          <Col>
            <div className="lg:flex mt-10 lg:gap-12">
              <SkillsList list={techAndSkills} />
              <RolesList list={team} />
              <LinkList liveLink={liveLink} githubLink={githubLink} />
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 xl:flex"}>
            <div className="xl:w-1/2">
              <SectionHeading title="Design Additions & Revisions" />
              <p className="mb-8">
                During the original project design, the website only had a
                desktop viewport and suffered from design flaws such as a lack
                of consistency and poor hierarchy. Remaking it now, I decided to
                make several changes to the original design:
              </p>
              <ul className="mb-8 flex flex-col gap-6 list-inside list-disc">
                <li>
                  In the homepage, I added a banner with a call to action to buy
                  tickets placed above the fold, the first place the user sees
                  when they enter the site
                </li>
                <li>
                  A section was added to describe the festival's value
                  proposition by explaining how the festival "multicultural
                  winter" theme sets it apart from other winter festivals
                </li>
                <li>
                  An image gallery was added to showcase what would've been
                  pictures of the festival from previous years
                </li>
                <li>
                  The original mockup only included a desktop viewport so I made
                  sure to design additional mobile designs for each page. Since
                  the fictional event took place in Canada, I designed based on
                  a mobile viewport of 390 x 884 and a desktop viewport of 1920
                  x 1080 as I found that these were{" "}
                  <a
                    href="https://gs.statcounter.com/screen-resolution-stats/all/canada"
                    target="_blank"
                    className="underline"
                  >
                    the most common viewports for Canadians.
                  </a>
                </li>
              </ul>
              <p className="mb-8">
                For the newly designed site, I planned to develop a homepage and
                a set of three pages for the "event pass selection" process.
              </p>
            </div>

            <div className={"my-4 xl:my-0 xl:ml-8 xl:w-1/2"}>
              <ProjectImageContainer
                image={components}
                alt="Components made for the Winter City Lights prototype. It includes the header, footer, carousel, and 'cards' used in the event pass selection"
              />

              <ProjectImageContainer
              className={'mt-4'}
                image={homepage}
                alt="Homepage for the website"
              />
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 xl:flex"}>
            <div className="xl:w-1/2">
              <SectionHeading title="Development & Workflow" />
              <h3 className="text-xl font-bold mb-2">Developing in PHP</h3>
              <p className="mb-8">
                To start, I first coded the mobile layout of the pages as it
                would make it easier to later develop it into the desktop
                design. At the time, I was more familiar with PHP than React so
                I coded my HTML within PHP so that I had the option to create
                and reuse partials such as the header and footer.
              </p>
              <h3 className="text-xl font-bold mb-2">Using Tailwind CSS</h3>
              <p className="mb-8">
                I used Tailwind CSS to write the CSS so that I could more easily
                understand which styles belong to which element. I also did this
                for easier implementation of different styles across viewpoints
                breakpoints. To ease the workflow, I made sure to define
                commonly reused styles such as the site's colors and fonts in
                the Tailwind config. This organization allowed me to easily
                change such styles across the site if I ever needed to in the
                future.
              </p>
              <h3 className="text-xl font-bold mb-2">
                Image Loading Optimization
              </h3>
              <p className="mb-8">
                For site optimization, I also made sure every vital image loaded
                in with a lazyload plugin ensuring they load only when they
                scrolled into the user's view.
              </p>
            </div>
            <div className="xl:ml-8 xl:w-1/2 flex-col flex gap-4">
              <ProjectImageContainer
                className={"my-4 xl:my-0 "}
                image={ticketSelection}
                alt="Initial screen of the event pass selection process"
              />
              <ProjectImageContainer
                className={"my-4 xl:my-0 "}
                image={checkout}
                alt="Checkout screen of the event pass selection process"
              />
              <ProjectImageContainer
                className={"my-4 xl:my-0 "}
                image={thankyou}
                alt="Thank you screen once users have purchsed their event pass"
              />
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 xl:flex"}>
            <div className="xl:w-1/2">
              <SectionHeading title="Making the Carousel" />
              <p>
                On the homepage, I used the Flickity plugin to create a carousel
                that talked about different parts of the event. I also used PHP
                to populate the content for each carousel cell dynamically. In
                order to match the mockup design, I used Javascript as well as
                edited the plugin's CSS to move the carousel navigation into its
                own container. This allowed me to better position the carousel's
                navigation and also let me give each section's button a
                thumbnail on the carousel's nav bar.
              </p>
            </div>
            <ProjectImageContainer
              className={"my-4 xl:my-0 xl:ml-8 xl:w-1/2"}
              image={carousel}
              alt="Demonstration of the event info carouse"
            />
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 xl:flex"}>
            <div className="xl:w-1/2">
              <SectionHeading title="Project Takeaways" />
              <p>
                Although I now mainly develop projects using React, I think of
                this project as a good demonstration of my ability to work in
                standard HTML/PHP. Furthermore, it also showcases the
                flexibility in my skillset as I had to also step into the role
                of a web designer in order to create the website's layout.
                Overall, I believe this project was a good stepping stone into
                my more advanced projects that involved technologies such as
                ReactJS or Laravel.
              </p>
            </div>
          </Col>
        </SectionContainer>
      </ProjectPageContainer>
    </AnimationContainer>
  );
}
