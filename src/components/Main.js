import { CompletedChart, InProgressChart } from "./Chart";
import Tasks from "./Tasks";
import Notes from "../Notes";
import Projects from "./Projects";

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
      <div className="stats">
        <div className="stat">
          <i className="fa-solid fa-check-double"></i>
          <div className="stat--details">
            <h4>12 Tasks</h4>
            <p>Completed</p>
          </div>
          <div className="stat--chart">
            <CompletedChart percentage="100" />
          </div>
        </div>
        <div className="stat">
          <i className="fa-solid fa-boxes-stacked"></i>
          <div className="stat--details">
            <h4>4 Tasks</h4>
            <p>In Progress</p>
          </div>
          <div className="stat--chart">
            <InProgressChart percentage="50" />
          </div>
        </div>
      </div>
     {props.view === 'tasks' && <Tasks></Tasks>}
      {props.view === 'notes' && <Notes notes={props.notes}/>}
      {props.view === 'projects' && <Projects projects={props.projects}/>}
    </main>
  );
}

export default Main;
