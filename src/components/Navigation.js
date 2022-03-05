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
        <li id="today" onClick={props.today}>
          <i className="fa-solid fa-calendar-day" id="today"></i>
          <span id="today">Today</span>
        </li>
        <li id="thisWeek" onClick={props.thisWeek}>
          <i className="fa-solid fa-calendar-week" id="thisWeek"></i>
          <span id="thisWeek">This Week</span>
        </li>
        <li id="thisMonth" onClick={props.thisMonth}>
          <i className="fa-solid fa-calendar-days" id="thisMonth"></i>
          <span id="thisMonth">This Month</span>
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
