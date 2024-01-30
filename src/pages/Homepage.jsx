;


import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import HomepageIntroduction from "../components/HomepageIntroduction/HomepageIntroduction";
import ProjectList, { ProjectCard } from "../components/ProjectList/ProjectList";

// Thumbnails
import WinterCityLightsThumbnail from "../assets/img/winter_city_lights/WinterCityLight-ProjectThumbnail.webp";
import PatchworkThumbnail from "../assets/img/patchwork/JerrelLustre-patchworkThumbnail.webp";
import VanfilThumbnail from "../assets/img/vanfil/JerrelLustre-vanfil-thumbnail.webp"

export default function Homepage() {

  return (
    <>

      <HomepageBanner/>
      <HomepageIntroduction/>
      <ProjectList projectLink= {true}>
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
      </ProjectList>
    </>
  );
}
