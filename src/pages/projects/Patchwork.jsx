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
import Codeblock from "../../components/CodeBlock/CodeBlock";
import AnimationContainer from "../../components/AnimationContainer/AnimationContainer";

// Images
import courses from "../../assets/img/patchwork/JerrelLustre-courses.webp";
import dashboard from "../../assets/img/patchwork/JerrelLustre-dashboard.webp";
import desktopMockup from "../../assets/img/patchwork/JerrelLustre-desktopMockup.webp";
import mobileMockup from "../../assets/img/patchwork/JerrelLustre-mobileMockup.webp";
// import patchworkResearchLowRes from "../../assets/img/patchwork/JerrelLustre-patchworkResearch(low-res).webp";
import patchworkResearch from "../../assets/img/patchwork/JerrelLustre-patchworkResearch.webp";

export default function Patchwork() {
  const githubLink = "https://github.com/JerrelLustre/Patchwork";
  const liveLink = "https://patchwork.jerrellustre.com/public";

  const projectDetails = {
    "project-title": "Patchwork",
    "project-status": "Finished",
    "github-link": githubLink,
    "live-site-link": liveLink,
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

  const phpCode = `// Store user info and create an account
public function store(Request $request){
    $formFields = $request->validate([
        'email' => ['required', 'email'],
        'name' => ['required'],
        'password' => ['required', 'confirmed', 'min:6'],
    ]);

    // hash password before storing it
    $formFields['password'] = bcrypt($formFields['password']);

    // Create user
    $user = User::create($formFields);

    // Login and redirect
    auth()->login($user);
    return redirect('/');
}`;

  return (
    <AnimationContainer>
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
                During my university web development studies, me and my fellow
                peers became familiar with the school's student hub as we used
                it to track info and deadlines regarding our courses.However,
                the UI/UX of the student hub was flawed in several ways.
                <br />
                Over time, frustrations grew and this project's team resolved to
                embark on a mission to create an alternate way for our peers to
                access their courses. This project served as a demonstration of
                of my ability to gather research on a user problem and to then
                design and develop a solution for it.
              </p>
              <div className="lg:flex mt-10 lg:gap-12">
                <SkillsList list={techAndSkills} />
                <RolesList list={team} />
                <LinkList liveLink={liveLink} githubLink={githubLink} />
              </div>
            </div>
          </Col>
        </SectionContainer>

        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="">
              <SectionHeading title="Working Alongside a Designer" />
              <p className="mb-8">
                For this project, I worked alongside a designer to help create a
                solution for our student hub problem. This gave me industry
                insight on good practices when working as a team for a
                developing a web app. Together, we discussed viable solutions
                for each issue gathered during our research. Furthermore, it was
                up to me to clarify when a design decision would be too
                difficult to implement and we worked together to determine which
                parts of the design had a good balance of time cost and user
                value for the app.
              </p>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Working with PHP Laravel" />
              <p className="mb-8">
                For development, I decided to delve into a technology I was not
                familar with, PHP Laravel. Not only was this a learning
                oppurtunity, but, Laravel was a good fit for the project as it
                allowed me to implement our desired solutions more quickly than
                vanilla PHP.
              </p>
              <p className="mb-8">
                PHP Laravel came with several advantages for the project.
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4 mb-8">
                <li>
                  <b>Usage of MVC architecture:</b>
                  <br />
                  This usage of a MVC &#40;Model,View,Controller&#40; allowed
                  the project to be more organized by promotion clear separation
                  of concerns.Furthermore, Laravel is built in such a way that
                  made it easy to create models and controllers
                </li>
                <li>
                  <b>Easier database management:</b>
                  <br />
                  Laravel made it quicker to handle database management as I
                  could develop solutions in fewer lines of code relative to
                  vanilla PHP.
                </li>
                <li>
                  <b>Built-in authentication:</b>
                  <br />
                  Laravel's built in handling for authentication made it easier
                  to implement user accounts for the app
                </li>
              </ul>
              <p className="mb-8">
                Overall, this learning experience served as a great way to
                understand the strengths of developing projects in Laravel over
                vanilla PHP
              </p>
            </div>
            <ProjectImageContainer
              image={mobileMockup}
              alt="Mobile mockups of the create, read, update, and delete functionality of Patchwork"
              className="md:w-1/2 md:ml-8"
            />
          </Col>
          <Col className={"w-full"}>
            <p>
              Here is an example of how Laravel can make complex features, such
              as user registration, simple to develop.
            </p>
            <div className="flex flex-col mt-6 items-center md:items-start overflow-hidden">
              <div className="max-w-xs sm:max-w-sm md:max-w-full lg:max-w-full">
                <Codeblock code={phpCode} />
              </div>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="User Research and Finding Issues" />
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
                  <b>Urgent Info was not immediately accesible:</b>
                  <br />
                  The front page lacked any reminders or display of due dates,
                  making it challenging for students to stay updated on upcoming
                  deadlines.
                </li>
                <li>
                  <b>Navigation was cumbersome:</b>
                  <br />
                  Navigating through the original system required too many
                  clicks to access the desired page or information.
                </li>
                <li>
                  <b>Lack of personalization and customization:</b>
                  <br />
                  Students desired customization options to align the system
                  with their preferences, including features like dark mode and
                  custom banners for each course.
                </li>
                <li>
                  <b>Course Labels were confusing:</b>
                  <br />
                  The labeling of the courses in the original hub was confusing
                  and contained unnecessary data for students (i.e.,
                  "MDIA-1234-0 - App Development Strategy 2 - 12345 - Lab"). In
                  the provided example, the most important info is the exact
                  name of the course, "App Development Strategy 2", yet its
                  coupled with other unnecessary info in the same label that is
                  not only prone to being cut off due to the label's long length
                  but is also overwhelming for the users when paired with 9
                  other courses on the screen.
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
              <SectionHeading title="Functionality of Patchwork & Solutions" />
              <p className="mb-8">
                After conducting user research, our team set out to create a
                better hub for our classmates for all of their courses and
                assignments. Outlined below are some of the features implemented
                into Patchwork
              </p>
              <ul className="list-disc list-inside flex flex-col gap-4">
                <li>
                  Students can now manually list assignments and exams on the
                  site dashboard functioning similarly to a "notice" list.
                </li>
                <li>
                  Additionally, they can filter between assignments and exams,
                  and the dashboard will automatically have a notification if
                  any of them are upcoming within the next 5 days.
                </li>
                <li>
                  Courses are now listed in a static order for consistency. The
                  old student hub would order your courses based on the ones
                  most recently visited. However, this caused the list to
                  seemingly appear randomly ordered as they opened their courses
                  throughout the school day.
                </li>
                <li>
                  The pages for course content and assignments now have
                  dedicated buttons on the student's dashboard, making them one
                  click away. Most students felt that these were the most
                  commonly checked pieces of info for each course, so making
                  them more readily accesible felt appropriate.
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
                real-world use. Furthermore, it gave me an oppurtunity to learn
                about and work in Laravel PHP, expanding my skillset. Overall, I
                believe that Patchwork was a valuable learning experience as
                students and we were glad to be a part of something that was of
                benefit to our peers as well.
              </p>
              <p className="mb-8">
                Although I have since graduated from the program if I had more
                time to develop this project during my studies, I would being
                work on these tasks:
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
    </AnimationContainer>
  );
}
