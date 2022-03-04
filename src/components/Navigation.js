function Navigation() {
  return (
    <section className="navigation">
      <div className="profile">
          <div className="box">U</div>
          <p>Hi User</p></div>
      <ul className="nav-items">
        <li>
          <i className="fa-solid fa-chart-pie"></i>
          <span>Dashboard</span>
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
        <li>
          <i className="fa-solid fa-bars-progress"></i>
          <span>Projects</span>
        </li>
        <li>
          <i className="fa-solid fa-clipboard"></i>
          <span>Notes</span>
        </li>
      </ul>
      <div className="nav-toggle">
        <i className="fa-solid fa-angles-left"></i>
      </div>
    </section>
  );
}

export default Navigation;
