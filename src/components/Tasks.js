function Task() {
  return (
    <div className="task">
      <i className="fa-solid fa-boxes-stacked"></i>
      <div className="task-details">
        <p>Meizu Mobile App Redesign</p>
        <p>Product Design</p>
      </div>
      <div className="task-actions">
        <input type="checkbox" name="" id="" />
        <i className="fa-solid fa-pen-to-square"></i>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
}

function Tasks() {
  return (
    <section className="tasks">
      <h4>Tasks</h4>
      <Task />
      <Task />
      <Task />
      <Task />
    </section>
  );
}

export default Tasks;