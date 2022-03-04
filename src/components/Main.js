import { CompletedChart, InProgressChart } from "./Chart";
import Task from "./Task";

function Main() {
  return (
    <main>
      <header>
        <h2>Dashboard</h2>
        <div className="buttons">
          <button>
            <i className="fa-solid fa-plus"></i> New Task
          </button>
          <button>
            <i className="fa-solid fa-plus"></i> New Project
          </button>
          <button>
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
      <div className="view">
        <h4>Tasks</h4>
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
}

export default Main;
