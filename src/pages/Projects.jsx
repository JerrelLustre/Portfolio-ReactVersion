
import SubPageBanner from "../components/SubPageBanner/SubPageBanner";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectCard } from "../components/ProjectList/ProjectList";
// Thumbnails
import WinterCityLightsThumbnail from "../assets/img/winter_city_lights/WinterCityLight-ProjectThumbnail.webp";
import PatchworkThumbnail from "../assets/img/patchwork/JerrelLustre-patchworkThumbnail.webp"

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
          tags={["HTML & PHP","Tailwind", "Design", "JS", "Plugin Usage"]}
          img={WinterCityLightsThumbnail}
        />
        <ProjectCard
          route="Patchwork"
          title="Patchwork"
          desc="A class and assignment tracker developed during my studies"
          tags={["PHP Laravel", "Tailwind", "User Research", "SQL & MySQL", "Alpine.js"]}
          img={PatchworkThumbnail}
        />
      </ProjectList>
    </>
  );
}
