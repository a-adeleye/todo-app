import Tasks from "./Tasks";
import Notes from "./Notes";
import Projects from "./Projects";
import { TaskStats, NoteStats, ProjectStats } from "./Stats";

function Main(props) {
  return (
    <main>
      <header>
        <h2>Dashboard</h2>
        <div className="buttons">
          <button id="taskForm" onClick={props.formHandler}>
            <i className="fa-solid fa-plus"></i> New Task
          </button>
          <button id="projectForm" onClick={props.formHandler}>
            <i className="fa-solid fa-plus"></i> New Project
          </button>
          <button id="noteForm" onClick={props.formHandler}>
            <i className="fa-solid fa-plus"></i> New Note
          </button>
        </div>
      </header>
      {props.view === "tasks" && <TaskStats notes={props.notes} />}
      {props.view === "notes" && <NoteStats notes={props.notes} />}
      {props.view === "projects" && <ProjectStats projects={props.projects} />}
      {props.view === "tasks" && <Tasks></Tasks>}
      {props.view === "notes" && <Notes notes={props.notes} />}
      {props.view === "projects" && <Projects projects={props.projects} />}
    </main>
  );
}

export default Main;
