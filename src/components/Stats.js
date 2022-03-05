import { CompletedChart, InProgressChart } from "./Chart";

function TaskStats(props) {
  const { tasks } = props;

  const taskCount = tasks.length;
  const inProgressTaskCount = tasks.filter((task) => !task.completed).length;
  const completedTaskCount = tasks.filter((task) => task.completed).length;
  const completedPercentage =
  completedTaskCount < 1 ? "" : Math.round((completedTaskCount / taskCount) * 100);
  const inProgressPercentage = taskCount < 1 ? "" : 100 - completedPercentage;

  return (
    <div className="stats">
      <div className="stat">
        <i className="fa-solid fa-check-double"></i>
        <div className="stat--details">
          <h4>
            {inProgressTaskCount} {inProgressTaskCount > 1 ? "Tasks" : "Task"}
          </h4>
          <p>In Progress</p>
        </div>
        <div className="stat--chart">
          <InProgressChart percentage={inProgressPercentage} />
        </div>
      </div>
      <div className="stat">
        <i className="fa-solid fa-boxes-stacked"></i>
        <div className="stat--details">
          <h4>
            {completedTaskCount} {completedTaskCount > 1 ? "Tasks" : "Task"}
          </h4>
          <p>Completed</p>
        </div>
        <div className="stat--chart">
          <CompletedChart percentage={completedPercentage} />
        </div>
      </div>
    </div>
  );
}

function NoteStats(props) {
  const { notes } = props;

  const noteCount = notes.length;

  return (
    <div className="stats">
      <div className="stat one-column">
        <i id="notes" className="fa-solid fa-clipboard"></i>
        <div className="stat--details">
          {!noteCount ? (
            <h4>You have no notes</h4>
          ) : (
            <h4>
              {noteCount} {noteCount > 1 ? "Notes" : "Note"}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectStats(props) {
  const { projects } = props;

  const projectCount = projects.length;

  return (
    <div className="stats">
      <div className="stat one-column">
        <i id="notes" className="fa-solid fa-bars-progress"></i>
        <div className="stat--details">
          {!projectCount ? (
            <h4>You only have the default project</h4>
          ) : (
            <h4>
              {projectCount} {projectCount > 1 ? "Projects" : "Project"}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}

export { TaskStats, NoteStats, ProjectStats };
