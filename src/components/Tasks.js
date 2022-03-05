import { nanoid } from "nanoid";

function Task(props) {
  const { id, title, task, completeTask, project, dueDate, deleteTask, editTask, completed, } = props;

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
        <input type="checkbox" id={id} onChange={(e) => completeTask(e)} checked={completed}/>
        <i className="fa-solid fa-pen-to-square" id={id} onClick={(e) => editTask(e,"taskForm")}></i>
        <i className="fa-solid fa-trash" id={id} onClick={deleteTask}></i>
      </div>
    </div>
  );
}

function Tasks(props) {
  const { tasks, deleteTask, editTask, completeTask, filter, filteredTasks } = props;

  const taskArray = filter.state ? filteredTasks : tasks;

  const taskList = taskArray.map((task) => (
    <Task
      key={nanoid()}
      title={task.title}
      task={task.task}
      id={task.id}
      project={task.project}
      dueDate={task.dueDate}
      completed={task.completed}
      deleteTask={deleteTask}
      editTask={editTask}
      completeTask={completeTask}
      filter = {filter}
    />
  ));

  return (
    <section className="tasks">
      <h4>{filter.value}</h4>
      {taskList}
    </section>
  );
}

export default Tasks;
