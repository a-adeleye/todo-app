function Navigation(props) {
  return (
    <section className="navigation">
      <div className="profile">
        <div className="box">U</div>
        <p>Hi User</p>
      </div>
      <ul className="nav-items">
        <li onClick={props.handleClick} id="Tasks">
          <i id="Tasks" className="fa-solid fa-boxes-stacked"></i>
          <span id="Tasks">Tasks</span>
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
        <li onClick={props.handleClick} id="Projects">
          <i id="Projects" className="fa-solid fa-bars-progress"></i>
          <span id="Projects">Projects</span>
        </li>
        <li onClick={props.handleClick} id="Notes">
          <i id="Notes" className="fa-solid fa-clipboard"></i>
          <span id="Notes">Notes</span>
        </li>
      </ul>
      <div className="nav-toggle">
        <i className="fa-solid fa-angles-left"></i>
      </div>
    </section>
  );
}

export default Navigation;
