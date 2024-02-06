// Components
import { Col } from "../../components/LayoutBlocks/LayoutBlocks";
import {
  LinkList,
  ProjectImageContainer,
  RolesList,
  SectionContainer,
  SectionHeading,
  SkillsList,
} from "../../components/ProjectPageContainer/ProjectPageContainer";
import ProjectPageContainer from "../../components/ProjectPageContainer/ProjectPageContainer";
import AnimationContainer from "../../components/AnimationContainer/AnimationContainer";
// Images
import vanfilBanner from "../../assets/img/vanfil/JerrelLustre-vanfil-banner.webp";
import vanfilConclusion from "../../assets/img/vanfil/JerrelLustre-vanfil-conclusion.webp";
import vanfilMediaGallery from "../../assets/img/vanfil/JerrelLustre-vanfil-mediaGallery.webp";
import vanfilPageBuilder from "../../assets/img/vanfil/JerrelLustre-vanfil-pagebuilder.webp";
import vanfilStreamArchive from "../../assets/img/vanfil/JerrelLustre-vanfil-streamArchive.webp";

export default function VanFil() {
  const projectDetails = {
    "project-title": "Vancouver Filipino SDA Church Website",
    "project-status": "Finished",
    "github-link": "Null",
    "live-site-link": "https://vanfilsdachurch.ca/",
  };

  const techAndSkills = [
    "Wordpress",
    "Photography",
    "Media Management",
    "Site Design",
    "SEO Management",
  ];

  const team = [
    {
      type: "me",
      member: "Jerrel Lustre - Site Developer - Media Manager",
    },
  ];

  const liveLink = "https://vanfilsdachurch.ca/";

  return (
    <AnimationContainer>
      <ProjectPageContainer>
        <SectionContainer>
          {/* Banner */}
          <Col className={"w-full"}>
            <SectionHeading title={projectDetails["project-title"]} level={1} />
            <img
              src={vanfilBanner}
              alt="Different pages from the new Vanfil website"
            />
          </Col>
          <Col className={"w-full mt-12 lg:flex"}>
            <div className="lg:w-full">
              <SectionHeading title="Intro" />
              <p>
                As my first time developing a Wordpress project for a real
                client I learned how to best take advantage of Wordpress’s
                strengths and work around its weaknesses. For example,
                customization options in Wordpress would sometimes be
                unavailable or be locked behind a paywall but this could be
                circumvented by adding the styles manually through vanilla css.
                However, there would still be times where the desired design
                would be too impractical to implement so there would be times
                where I had to work on thinking up alternative solutions.
              </p>
              <div className="lg:flex mt-10 lg:gap-12">
                <SkillsList list={techAndSkills} />
                <RolesList list={team} />
                <LinkList liveLink={liveLink} />
              </div>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="">
              <SectionHeading title="Managing The Project Solo" />
              <p className="mb-8">
                Since I was the only one working on the project, I had to take
                up multiple roles over the project's timeline:
              </p>
              <ul className="mb-8 flex flex-col gap-6">
                <li>
                  <b>Site Designer:</b> Designing the branding and layout for
                  the site.
                </li>
                <li>
                  <b>Wordpress Developer:</b> Using the page builder to manage
                  how content is displayed on the site, maintaining responsive
                  layout, and fixing bugs.
                </li>
                <li>
                  <b>Media Manager:</b> Collecting, editing, optimizing, and
                  organizing photos and videos relevant to the church. This
                  involved not only personally asking church members and leaders
                  for photos they had on hand but also taking my own photos
                  during church events.
                </li>
                <li>
                  <b>SEO Manager:</b> Optimizing site SEO and analytics.
                </li>
              </ul>
              <p>
                Because of the many roles I had to take up, It helped to
                reinforce the idea that web development is just not about
                coding. It also involves a multifaceted workflow that includes
                design, content creation, and SEO management. This experience
                highlighted the importance of a holistic approach to creating
                websites and gave me greater insight and appreciation for the
                work that goes into each role.
              </p>
            </div>
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Working in Wordpress" />
              <p className="mb-8">
                For this project I used an Astra theme which added easier to
                work with blocks to Wordpress’ Gutenberg page-builder.
                Nevertheless even with the expanded tools, Wordpress’s default
                page-builder can seem unwieldy at first compared to coding pages
                manually, but once I got more used to it and figured out what I
                could and couldn’t do, I realized how easy and quick Wordpress
                made it to generate content-focused pages. As the church website
                primarily focused on displaying info and content over unique
                functionality, this reinforced my idea that Wordpress was the
                perfect fit for this project.
              </p>
            </div>
            <ProjectImageContainer
              image={vanfilPageBuilder}
              alt="WordPress' pagebuilder"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
        <SectionContainer>
          <Col className={"w-full mt-12 lg:flex"}>
            <div className="lg:w-1/2">
              <SectionHeading title="Working with Clients" />

              <div className="mb-8">
                <p className="mb-8">
                  I also gained valuable insights into tailoring solutions for
                  clients based on their unique needs rather than adhering to an
                  exact list of deliverables. For example, I knew that the
                  church wanted to make the website more personalized for them
                  compared to their old website so I suggested and implemented
                  two solutions:
                </p>
                <ul>
                  <li className="mb-8">
                    <b>Live Streaming Integration: </b>
                    <br />
                    Recognizing that the church would often stream their
                    services and archive them on youtube, I introduced a
                    dedicated page featuring an embedded playlist archive.This
                    innovative step evolved further, resulting in the creation
                    of additional pages that incorporated embedded content from
                    religious channels, curated based on the pastor's
                    recommendations.
                  </li>
                  <li className="mb-8">
                    <b>Media Galleries for Ministries: </b>
                    <br />
                    Furthermore, I proposed the addition of media galleries for
                    each ministry within the church. This feature allowed
                    members to share photos and provided a collective space for
                    revisiting cherished memories of past church events.
                  </li>
                </ul>
                <p>
                  Although these features were not initially requested, ideas
                  such as these allowed for a more gratifying final product and
                  satisfied client.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-6">
              <ProjectImageContainer
                image={vanfilStreamArchive}
                alt="Youtube embed for the stream archive component"
                className={" md:ml-8"}
              />
              <ProjectImageContainer
                image={vanfilMediaGallery}
                alt="Media gallery for the children's ministry page"
                className={"md:ml-8"}
              />
            </div>
          </Col>
        </SectionContainer>

        <SectionContainer>
          <Col className={"w-full mt-12 md:flex"}>
            <div className="md:w-1/2">
              <SectionHeading title="Project Takeaways" />
              <p className="mb-8">
                As a key takeaway I found that my previous experience with
                Wordpress was often frustrating due to its restrictions relative
                to coding a site manually. However, this internship opportunity
                gave me the chance to really explore the strengths of building a
                website through Wordpress and also how to better navigate its
                restrictions. This experience has made me more open to
                considering it as a viable solution for future projects where I
                would need to make content-based web solutions quickly
              </p>
            </div>
            <ProjectImageContainer
              image={vanfilConclusion}
              alt="Homepage of Vanfil's website"
              className={"md:w-1/2 md:ml-8"}
            />
          </Col>
        </SectionContainer>
      </ProjectPageContainer>
    </AnimationContainer>
  );
}
