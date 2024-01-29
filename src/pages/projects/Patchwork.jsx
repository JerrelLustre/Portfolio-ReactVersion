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

// Images

import courses from "../../assets/img/patchwork/JerrelLustre-courses.webp";
import dashboard from "../../assets/img/patchwork/JerrelLustre-dashboard.webp";
import desktopMockup from "../../assets/img/patchwork/JerrelLustre-desktopMockup.webp";
import mobileMockup from "../../assets/img/patchwork/JerrelLustre-mobileMockup.webp";
import patchworkResearchLowRes from "../../assets/img/patchwork/JerrelLustre-patchworkResearch(low-res).webp";
import patchworkResearch from "../../assets/img/patchwork/JerrelLustre-patchworkResearch.webp";

export default function Patchwork() {
  const projectDetails = {
    "project-title": "Patchwork",
    "project-status": "Finished",
    "github-link": "https://github.com/JerrelLustre/Patchwork",
    "live-site-link": "https://patchwork.jerrellustre.com/public",
  };

  const techAndSkills = [
    "HTML",
    "Tailwind CSS",
    "Javascript",
    "PHP Laravel",
    "SQL & MySQL",
    "Alpine.js",
  ];

  const team = [
    {
      type: "me",
      member: "Jerrel Lustre - Site Developer - Project Lead",
    },
    {
      type: "team-member",
      member: "Kylie Chan – Site Designer",
      link: "https://www.linkedin.com/in/kyliechan731/",
    },
  ];

  return (
    <>
      <ProjectPageContainer>
        <SectionContainer>
          {/* Banner */}
          <Col className={"w-full"}>
            <SectionHeading title={projectDetails["project-title"]} level={1} />

            <ImageLoadingContainer>
            <img
              src={desktopMockup}
              alt="Mockup for desktop version of the site"
            />
            </ImageLoadingContainer>
          </Col>
          <Col className={"w-full mt-12 lg:flex"}>
            <div className="lg:w-full">
              <SectionHeading title="Intro" />
              <p>
                During my web development studies alongside fellow peers,
                we came to be familiar with the student hub and its flaws. Over
                time, frustrations over these issues grew and we resolved to
                embark on a mission to create an alternate way for our peers to
                access their courses. Driven by a shared vision, we set out to
                create a brand new solution that would not only address the
                minor design flaws we had grown increasingly exasperated with
                but also provide a seamless user experience for overseeing both
                assignments and exams in a single, streamlined interface.
              </p>
              <div className="lg:flex mt-10 lg:gap-12">
                <SkillsList list={techAndSkills} />
                <RolesList list={team} />
              </div>
            </div>
            {/* <ProjectImageContainer
              image={desktopMockup}
              alt="Mockup for desktop version of the site"
            /> */}
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Design Additions & Revisions" />
              <p className="mb-8">
                To begin, we gathered user research so we knew what kind of
                features that the first iteration of our project should include.
                We did this by sending surveys to our classmates to use. We also
                personally interviewed some of them, asking for any issues they
                had with the current student hub and what they would like to see
                added. Our findings revealed...
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  The front page lacked any reminders or display of due dates,
                  making it challenging for students to stay updated on upcoming
                  deadlines.
                </li>
                <li>
                  Navigating through the original system required too many
                  clicks to access the desired page or information.
                </li>
                <li>
                  Students desired customization options to align the system
                  with their preferences, including features like dark mode and
                  custom banners for each course.
                </li>
                <li>
                  The labeling of the courses in the original hub was confusing
                  and contained unnecessary data for students (i.e.,
                  "MDIA-1234-0 - App Development Strategy 2 - 12345 - Lab").
                </li>
              </ul>
            </div>
            <ProjectImageContainer
              image={patchworkResearch}
              alt="Survey Results from our User Research"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Working with PHP Laravel" />
              <p className="mb-8">
                During the development of our project, I had the opportunity to
                dive into PHP Laravel, and it proved to be an invaluable
                learning experience. It allowed me to more easily create models
                and controllers. The use of a MVC structure also made the
                project more organized. Althought I had to spend extra time
                learning how to use this framework, the ability to handle tasks
                such as database management and authentication more than made up
                for it. Overall, using PHP Laravel was not only instrumental in
                creating our alternate student hub solution but also served as a
                transformative learning journey that deepened my expertise in
                web development.
              </p>
            </div>
            <ProjectImageContainer
              image={mobileMockup}
              alt="Mobile mockups of the create, read, update, and delete functionality of Patchwork"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Functionality & Solutions" />
              <p className="mb-8">
                The purpose of the project was to provide an alternate solution
                to our classmates who wanted a better hub for all of their
                courses and assignments. Therefore, we implemented functionality
                that aimed to solve issues that students had with the official
                course hub:
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Students can now list assignments and exams on the site
                  dashboard.
                </li>
                <li>
                  Additionally, they can filter between assignments and exams,
                  and the dashboard will automatically have a notification if
                  any of them are upcoming within the next 5 days.
                </li>
                <li>
                  Courses are now listed in a static order for consistency.
                </li>
                <li>
                  The pages for course content and assignments now have
                  dedicated buttons making them one click away.
                </li>
                <li>
                  The site’s CSS has been configured in Tailwind so that the
                  design now switches between a dark and light color palette
                  based on the user’s system preferences.
                </li>
              </ul>
            </div>
            <ProjectImageContainer
              image={courses}
              alt="Patchwork course list, with buttons for easy access to the assignments and courses page"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Project Takeaways" />
              <p className="mb-8">
                For the team, creating “Patchwork” served as a demonstration of
                what to expect when working in the web development industry. It
                included gathering research and feedback from peers to improve
                an existing design, collaboration between designer and
                developer, project management, and deployment of a project for
                real-world use. Overall, we believe that Patchwork was a
                valuable learning experience as students starting out in this
                industry, and we’re glad to be a part of something that is of
                benefit to our peers as well.
              </p>

              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Gather feedback and testing from students in order to create
                  further improvements
                </li>
                <li>
                  Allow users to add assignments and exams to a “completed”
                  category
                </li>
                <li>
                  Allow users to toggle between light and dark mode from within
                  the site
                </li>
                <li>
                  Allow users to customize the site to their own liking (i.e.,
                  custom images for each course).
                </li>
              </ul>
            </div>
            <ProjectImageContainer
              image={dashboard}
              alt="Patchwork dashboard, including a set of upcoming assignments and exams"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
      </ProjectPageContainer>
    </>
  );
}
