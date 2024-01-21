import React from 'react'
import SubPageBanner from '../components/SubPageBanner/SubPageBanner'
import ProjectList from '../components/ProjectList/ProjectList'
import { ProjectCard } from '../components/ProjectList/ProjectList'

export default function Projects() {
  return (
    <>
    <SubPageBanner text="Portfolio Projects" />
    <ProjectList text='Here are all of my featured projects. Feel free to look around!' projectLink={false}>
        <ProjectCard
        route='BeaconAlexandria'
        title='Beacon Alexandria'
        desc='A prototype of an app that combines multiple library databases into one place' 
        tags={['Lorem', 'Ipsum', 'Dolor']}
        img={'https://placehold.co/600x400'} 
        />
      </ProjectList>
    </>
  )
}
