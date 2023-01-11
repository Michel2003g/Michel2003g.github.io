import projects from "../data/projects";

import ProjectCard from "./ProjectCard";

const ProjectCardContainer = ({requestAmount}) => {

  return (
    <div className="project-container">
      {projects.map((project, index) => {
        if (index <= requestAmount) {
            return <ProjectCard data={project} />
        }
      })}
    </div>
  )
}

export default ProjectCardContainer
