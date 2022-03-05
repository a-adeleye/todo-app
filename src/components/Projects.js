import { nanoid } from "nanoid";

function Projects(props) {
  const projectItems = props.projects.map((project) => (
    <div key={nanoid()} className="project">
      <p>{project.name}</p>
      <div className="project-actions">
        <i
          className="fa-solid fa-pen-to-square"
          id={project.id}
          onClick={(e) => props.editProject(e, "projectForm")}
        ></i>
        <i
          className="fa-solid fa-trash"
          id={project.id}
          onClick={props.deleteProject}
        ></i>
      </div>
    </div>
  ));

  return (
    <section className="projects">
      <div className="projects-container">
        <div className="project">
          <p>General</p>
        </div>
        {projectItems}
      </div>
    </section>
  );
}

export default Projects;
