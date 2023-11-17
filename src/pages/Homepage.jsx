import React from "react";


import HomepageBanner from "../components/HomepageBanner/HomepageBanner";
import HomepageIntroduction from "../components/HomepageIntroduction/HomepageIntroduction";
import ProjectList from "../components/ProjectList/ProjectList";


export default function Homepage() {


  return (
    <>
      <HomepageBanner/>
      <HomepageIntroduction/>
      <ProjectList/>

    </>
  );
}
