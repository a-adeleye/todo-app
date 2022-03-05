import { nanoid } from "nanoid";

function ProjectForm(props) {
  return (
    <div className="form-container">
      <form className="one-column-form">
        <i className="fa-solid fa-xmark" onClick={props.hide}></i>
        <label htmlFor="project">
          Add project
          <input
            type="text"
            name="project"
            id="project"
            onChange={props.onChange}
            value={props.value}
            placeholder="Project name"
          />
        </label>
        <button type="button" onClick={props.onClick}>
          Add project
        </button>
      </form>
    </div>
  );
}

function NoteForm(props) {
  return (
    <div className="form-container">
      <form className="one-column-form">
        <i className="fa-solid fa-xmark" onClick={props.hide}></i>
        <label htmlFor="title">
          Note Title
          <input
            type="text"
            name="title"
            id="title"
            onChange={props.onChange}
            value={props.title}
            placeholder="Note title"
          />
        </label>
        <label htmlFor="text">
          Note
          <textarea
            name="noteText"
            id="noteText"
            onChange={props.onChange}
            value={props.body}
            placeholder="Note content"
          ></textarea>
        </label>
        <button type="button" onClick= {props.editingOn ? props.update : props.add}>
          {props.editingOn ? 'Update Note' : 'Add Note'}
        </button>
      </form>
    </div>
  );
}

function TaskForm(props) {
  const projectList = props.projects.map((project) => (
    <option key={nanoid()} id={project.id}>
      {project.name}
    </option>
  ));

  return (
    <div className="form-container">
      <form className="two-column-form">
        <i className="fa-solid fa-xmark" onClick={props.hide}></i>
        <label htmlFor="title">
          Task Title
          <input
            type="text"
            name="title"
            id="title"
            onChange={props.onChange}
            value={props.title}
            placeholder="Task title"
          />
        </label>
        <label htmlFor="task">
          Task
          <input
            type="text"
            name="task"
            id="task"
            onChange={props.onChange}
            value={props.task}
            placeholder="Task"
          ></input>
        </label>
        <label htmlFor="project">
          Project
          <select
            name="project"
            id="project"
            onChange={props.onChange}
            value={props.project}
          >
            <option value="General">...select...</option>
            <option value="General">General</option>
            {projectList}
          </select>
        </label>
        <label htmlFor="dueDate">
          Due Date
          <input
            type="date"
            name="dueDate"
            id="dueDate"
            onChange={props.onChange}
            value={props.dueDate}
          ></input>
        </label>
        <button type="button" onClick={props.editingOn ? props.update : props.add}>
          {props.editingOn ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </div>
  );
}

export { ProjectForm, NoteForm, TaskForm };
