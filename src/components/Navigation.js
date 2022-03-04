function Navigation(props) {
  return (
    <section className="navigation">
      <div className="profile">
        <div className="box">U</div>
        <p>Hi User</p>
      </div>
      <ul className="nav-items">
        <li onClick={props.handleClick} id="tasks">
          <i id="tasks" className="fa-solid fa-chart-pie"></i>
          <span id="tasks">Dashboard</span>
        </li>
        <li>
          <i className="fa-solid fa-calendar-day"></i>
          <span>Today</span>
        </li>
        <li>
          <i className="fa-solid fa-calendar-week"></i>
          <span>This Week</span>
        </li>
        <li>
          <i className="fa-solid fa-calendar-days"></i>
          <span>This Month</span>
        </li>
        <li onClick={props.handleClick} id="projects">
          <i id="projects" className="fa-solid fa-bars-progress"></i>
          <span id="projects">Projects</span>
        </li>
        <li onClick={props.handleClick} id="notes">
          <i id="notes" className="fa-solid fa-clipboard"></i>
          <span id="notes">Notes</span>
        </li>
      </ul>
      <div className="nav-toggle">
        <i className="fa-solid fa-angles-left"></i>
      </div>
    </section>
  );
}

export default Navigation;
