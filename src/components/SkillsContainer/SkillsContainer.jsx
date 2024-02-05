;
// Layout
import { Container, Row, Col } from "../LayoutBlocks/LayoutBlocks";
// Components
import ContentContainer from "../ContentContainer/ContentContainer";
import HeadingBox from "../HeadingBox/HeadingBox";

// Icons
// Web Dev Icons
import { FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
// UIUX Icons
import { FaFigma } from "react-icons/fa";
// Media Management
import { CiPen } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
// Adobe Creative Cloud
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";

export default function SkillsContainer() {
  return (
    <Container>
      <Row className={"justify-center"}>
        <Col>
          <HeadingBox text="Here are my notable skills" />
          <ContentContainer className={"px-12 py-8 flex flex-wrap gap-y-16"}>
            <SkillsList
              title="Web Development"
              skills={[
                "HTML/CSS/Javascript",
                "Wordpress",
                "Bootstrap",
                "Tailwind",
                "ReactJS",
                "PHP",
                "Laravel",
              ]}
              icons={[
                FaHtml5,
                SiTailwindcss,
                FaCss3Alt,
                IoLogoJavascript,
                FaReact,
                FaPhp,
                FaLaravel,
              ]}
            />
            <SkillsList
              title="UI/UX"
              skills={["Figma", "Useberry", "Maze"]}
              icons={[FaFigma]}
            />
            <SkillsList
              title="Media Management"
              skills={[
                "Digital Illustration",
                "Photography",
                "Video Recording & Editing",
              ]}
              icons={[CiPen, FaVideo, FaCameraRetro]}
            />
            <SkillsList
              title="Adobe Creative Cloud"
              skills={[
                "Photoshop",
                "Illustrator",
                "Lightroom",
                "Premier",
                "After Effects",
                "Indesign",
                "Dimension",
                "Aero",
              ]}
              icons={[
                SiAdobephotoshop,
                SiAdobeillustrator,
                SiAdobeaftereffects,
                SiAdobeindesign,
                SiAdobepremierepro,
              ]}
            />
          </ContentContainer>
        </Col>
      </Row>
    </Container>
  );
}

function SkillsList({ title, skills, icons }) {
  return (
    <div className="w-full lg:w-1/2">
      <div className="lg:flex items-center">
        <h3 className="font-oswald text-3xl text-highlight mb-4 border-b-2 pb-2 border-white">{title}</h3>
        <ul className="flex gap-4 mb-5 lg:mb-2 flex-wrap lg:ml-5  lg:justify-end">
          {icons.map((Icon, index) => (
            <li key={index}>
              <Icon color="#f2f2f2" size='1.5rem'/>
            </li>
          ))}
        </ul>
      </div>

      <ul className="list-disc font-robcon text-xl flex flex-wrap gap-y-3 list-inside">
        {skills.map((item, index) => (
          <li key={index} className="basis-full sm:basis-1/2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
