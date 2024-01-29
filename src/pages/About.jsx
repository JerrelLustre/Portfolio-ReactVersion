import SubPageBanner from "../components/SubPageBanner/SubPageBanner";
// Layout
import { Container, Row, Col } from "../components/LayoutBlocks/LayoutBlocks";
// Components
import ContentContainer from "../components/ContentContainer/ContentContainer";
import HeadingBox from "../components/HeadingBox/HeadingBox";
import ImageLoadingContainer from "../components/ImageLoadingContainer/ImageLoadingContainer";
// Image
import Profile from "../assets/img/JerrelLustre-profile-lg.webp";
import volunteer1 from "../assets/img/service-1.webp";
import volunteer2 from "../assets/img/service-2.webp";
import SkillsContainer from "../components/SkillsContainer/SkillsContainer";

export default function About() {
  return (
    <>
      <SubPageBanner text="About Me" />
      <Container className={"my-24"}>
        <Row className={"items-center flex-col-reverse lg:flex-row"}>
          <Col className={"w-full lg:w-6/12"}>
            <HeadingBox text="I want my work to inspire people" />
            <ContentContainer className={"font-robcon leading-10 "}>
              <p>
                "Why did I decide to pursue web development?" It's simple: I
                enjoy the satisfaction of problem-solving, and seeing the
                fruition of my code finally working is immensely gratifying.
                Moreover, it allows me to combine technical expertise with my
                creative side, enabling me to design and build interactive and
                visually appealing websites that leave a lasting impact on
                users.
              </p>
              <p className="mt-6">
                I hope to use my work in order to help inspire others. With my
                responsive websites and designs, I want to allow companies to
                reach as many people as possible in order to promote their
                message.
              </p>
            </ContentContainer>
          </Col>
          <Col className={"w-full lg:w-6/12 flex  justify-center  my-4"}>
            <ImageLoadingContainer>
              <img
                src={Profile}
                alt="Jerrel Lustre profile shot"
                className="border-2 border-white"
              />
            </ImageLoadingContainer>
          </Col>
        </Row>
      </Container>
      <Container className={"my-24"}>
        <Row className={"items-center"}>
          <Col className={"w-full lg:w-6/12"}>
            <HeadingBox text="I want to always be of help for others" />
            <ContentContainer className={"font-robcon leading-10 my-4"}>
              <p>
                I’m always looking for the next opportunity to help others,
                whether it be participating in an operation to collect, manage
                and distribute supplies to the needy or traveling all the way to
                rural Panama to help build a church. I’m always there to help.
              </p>
              <p className="mt-6">
                In my free time, I enjoy expressing myself creatively whether
                that be drawing on my computer or going out to take pictures of
                beautiful pictures.
              </p>
            </ContentContainer>
          </Col>
          <Col
            className={
              "w-full lg:w-6/12"
            }
          >
            <div className="w-full lg:ml-8  gap-2 flex justify-evenly lg:justify-center items-center">
              <ImageLoadingContainer>
                <img
                  src={volunteer1}
                  alt="Jerrel Lustre digging around on a construction site, surrounded by other workers"
                  className="border-2 border-white w-full h-full  object-cover"
                />
              </ImageLoadingContainer>
              <ImageLoadingContainer>
                <img
                  src={volunteer2}
                  alt="Jerrel Lustre clearing rocks from the construction site"
                  className="border-2 border-white w-full h-full object-cover"
                />
              </ImageLoadingContainer>
            </div>
          </Col>
        </Row>
      </Container>
      <SkillsContainer />
    </>
  );
}
