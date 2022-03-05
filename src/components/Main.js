import Tasks from "./Tasks";
import Notes from "./Notes";
import Projects from "./Projects";
import { TaskStats, NoteStats, ProjectStats } from "./Stats";

function Main(props) {
  const { view, tasks, notes, projects, formHandler, deleteTask, editTask, completeTask } = props;
  return (
    <main>
      <header>
        <h2>{view}</h2>
        <div className="buttons">
          <button id="taskForm" onClick={() => formHandler("taskForm")}>
            <i className="fa-solid fa-plus"></i> New Task
          </button>
          <button id="projectForm" onClick={() => formHandler("projectForm")}>
            <i className="fa-solid fa-plus"></i> New Project
          </button>
          <button id="noteForm" onClick={() => formHandler("noteForm")}>
            <i className="fa-solid fa-plus"></i> New Note
          </button>
        </div>
      </header>
      {view === "Tasks" && <TaskStats tasks={tasks} /> }
      {view === "Notes" && <NoteStats notes={notes} />}
      {view === "Projects" && <ProjectStats projects={projects} />}
      {view === "Tasks" && <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>}
      {view === "Notes" && <Notes notes={notes} />}
      {view === "Projects" && <Projects projects={projects} />}
    </main>
  );
}

export default Main;
