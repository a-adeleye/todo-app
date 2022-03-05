import { CompletedChart, InProgressChart } from "./Chart";

function TaskStats(props) {
  return (
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
        <i id="notes" className="fa-solid fa-clipboard"></i>
        <div className="stat--details">
          {projectCount === 1 ? (
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
