import React from "react";


import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import HomepageIntroduction from "../components/HomepageIntroduction/HomepageIntroduction";
import ProjectList, { ProjectCard } from "../components/ProjectList/ProjectList";




export default function Homepage() {

  return (
    <>
      <HomepageBanner/>
      <HomepageIntroduction/>
      <ProjectList>
        <ProjectCard
        route='#'
        title='Beacon Alexandria'
        desc='A prototype of an app that combines multiple library databases into one place' 
        tags={['Lorem', 'Ipsum', 'Dolor']}
        img={'https://placehold.co/600x400'} 
        />
        <ProjectCard
        route='#'
        title='Beacon Alexandria'
        desc='A prototype of an app that combines multiple library databases into one place' 
        tags={['Lorem', 'Ipsum', 'Dolor']}
        img={'https://placehold.co/600x400'} 
        />
        <ProjectCard
        route='#'
        title='Beacon Alexandria'
        desc='A prototype of an app that combines multiple library databases into one place' 
        tags={['Lorem', 'Ipsum', 'Dolor']}
        img={'https://placehold.co/600x400'} 
        />
      </ProjectList>
    </>
  );
}
