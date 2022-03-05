import { nanoid } from "nanoid";

function Task(props) {
  const { id, title, task, completed, project, dueDate, deleteTask, editTask } = props;

  return (
    <div className="task">
      <i className="fa-solid fa-boxes-stacked"></i>
      <div className="task-details">
        <p id={id}>{title}</p>
        <p>{task}</p>
      </div>
      <div className="more-details">
        <p>Project: <span>{project}</span> </p>
        <p>Due Date: <span>{dueDate}</span></p>
      </div>
      <div className="task-actions">
        <input type="checkbox" id={id} />
        <i className="fa-solid fa-pen-to-square" id={id} onClick={(e) => editTask(e,"taskForm")}></i>
        <i className="fa-solid fa-trash" id={id} onClick={deleteTask}></i>
      </div>
    </div>
  );
}

function Tasks(props) {
  const { tasks, deleteTask, editTask } = props;

  const taskList = tasks.map((task) => (
    <Task
      key={nanoid()}
      title={task.title}
      task={task.task}
      id={task.id}
      project={task.project}
      dueDate={task.dueDate}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  return (
    <section className="tasks">
      <h4>Tasks</h4>
      {taskList}
    </section>
  );
}

export default Tasks;
