// Components
import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import HomepageIntroduction from "../components/HomepageIntroduction/HomepageIntroduction";
import ProjectList, {
  ProjectCard,
} from "../components/ProjectList/ProjectList";
import AnimationContainer from "../components/AnimationContainer/AnimationContainer";

// Thumbnails
import WinterCityLightsThumbnail from "../assets/img/winter_city_lights/WinterCityLight-ProjectThumbnail.webp";
import PatchworkThumbnail from "../assets/img/patchwork/JerrelLustre-patchworkThumbnail.webp";
import VanfilThumbnail from "../assets/img/vanfil/JerrelLustre-vanfil-thumbnail.webp";
import DrawFourThumbnail from "../assets/img/drawfour/JerrelLustre-drawfour-thumbnail.webp";

export default function Homepage() {
  return (
    <AnimationContainer>
      <HomepageBanner />
      <HomepageIntroduction />
      <ProjectList projectLink={true}>
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
            "SEO Management",
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
    </AnimationContainer>
  );
}
