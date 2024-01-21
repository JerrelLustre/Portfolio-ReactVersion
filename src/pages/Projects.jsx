import React from "react";
import SubPageBanner from "../components/SubPageBanner/SubPageBanner";
import ProjectList from "../components/ProjectList/ProjectList";
import { ProjectCard } from "../components/ProjectList/ProjectList";
import WinterCityLightsThumbnail from "../assets/img/winter_city_lights/WinterCityLight-ProjectThumbnail.webp";

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
          tags={["HTML & PHP", "Design", "JS", "Plugin Usage"]}
          img={WinterCityLightsThumbnail}
        />
      </ProjectList>
    </>
  );
}
