import { nanoid } from "nanoid";

function Projects(props) {
  const projectItems = props.projects.map((project) => (
    <p key={nanoid()} className="project" id={project.id}> 
      {project.name}
    </p>
  ));

  return (
    <section className="projects">
      <h4>Projects</h4>
      <div className="projects-container">{projectItems}</div>
    </section>
  );
}

export default Projects;
