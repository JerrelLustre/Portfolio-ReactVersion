import SubPageBanner from "../components/SubPageBanner/SubPageBanner";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectCard } from "../components/ProjectList/ProjectList";
// Thumbnails
import WinterCityLightsThumbnail from "../assets/img/winter_city_lights/WinterCityLight-ProjectThumbnail.webp";
import PatchworkThumbnail from "../assets/img/patchwork/JerrelLustre-patchworkThumbnail.webp";
import VanfilThumbnail from "../assets/img/vanfil/JerrelLustre-vanfil-thumbnail.webp"
import DrawFourThumbnail from "../assets/img/drawfour/JerrelLustre-drawfour-thumbnail.webp";

export default function Projects() {
  return (
    <>
      <SubPageBanner text="Portfolio Projects" />
      <ProjectList
        text="Here are all of my featured projects. Feel free to look around!"
        projectLink={false}
      >
        <ProjectCard
          route="WinterCityLights"
          title="Winter City Lights"
          desc="A developed website for a mock Canadian winter festival"
          tags={["HTML & PHP", "Tailwind", "Design", "JS", "Plugin Usage"]}
          img={WinterCityLightsThumbnail}
        />
        <ProjectCard
          route="Patchwork"
          title="Patchwork"
          desc="A personal course and assignment tracker"
          tags={[
            "PHP Laravel",
            "Tailwind",
            "User Research",
            "SQL & MySQL",
            "Alpine.js",
          ]}
          img={PatchworkThumbnail}
        />
        <ProjectCard
          route="VanFilChurchWebsite"
          title="VanFil Church's website"
          desc="Vanfil's redeveloped Wordpress site"
          tags={[
            "Wordpress",
            "Media Management",
            "Site Design",
            "SEO Management"
          ]}
          img={VanfilThumbnail}
        />
        <ProjectCard
          route="DrawFour"
          title="DrawFour"
          desc="Line up 4 pieces to win in this ReactJS game"
          tags={[
            "ReactJS",
            "PeerJS",
            "P2P Networking",
            "Writing Game Logic",
            "UI/UX",
          ]}
          img={DrawFourThumbnail}
        />
      </ProjectList>
    </>
  );
}
