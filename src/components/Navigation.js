import React from "react";

function Navigation(props) {

  React.useEffect(() => {

  })

  const [collapsed, setCollapsed] = React.useState(false);

  function toggle() {
    setCollapsed((prev) => (prev = !prev));
  }

  const navbarStyle = collapsed
    ? {
        width: "80px",
        alignItems: "center",
        padding: "2em",
        overflow: "hidden",
      }
    : { transition: "0.2s" };

    const profileStyle = collapsed ? {justifyContent: "center"} : { transition: "0.2s" };

  return (
    <section className="navigation" style={navbarStyle}>
      <div className="profile" style={profileStyle}>
        <div className="box">U</div>
        {!collapsed && <p>Hi User</p>}
      </div>
      <ul className="nav-items">
        <li onClick={props.handleClick} id="Tasks">
          <i id="Tasks" className="fa-solid fa-boxes-stacked"></i>
          {!collapsed && <span id="Tasks">Tasks</span>}
        </li>
        <li id="today" onClick={props.today}>
          <i className="fa-solid fa-calendar-day" id="today"></i>
          {!collapsed && <span id="today">Today</span>}
        </li>
        <li id="thisWeek" onClick={props.thisWeek}>
          <i className="fa-solid fa-calendar-week" id="thisWeek"></i>
          {!collapsed && <span id="thisWeek">This Week</span>}
        </li>
        <li id="thisMonth" onClick={props.thisMonth}>
          <i className="fa-solid fa-calendar-days" id="thisMonth"></i>
         {!collapsed && <span id="thisMonth">This Month</span>}
        </li>
        <li onClick={props.handleClick} id="Projects">
          <i id="Projects" className="fa-solid fa-bars-progress"></i>
         {!collapsed &&  <span id="Projects">Projects</span>}
        </li>
        <li onClick={props.handleClick} id="Notes">
          <i id="Notes" className="fa-solid fa-clipboard"></i>
          {!collapsed && <span id="Notes">Notes</span>}
        </li>
      </ul>
      <div className="nav-toggle" onClick={toggle}>
        {!collapsed && <i className="fa-solid fa-angles-left"></i>}
       {collapsed &&  <i className="fa-solid fa-angles-right"></i>}
      </div>
    </section>
  );
}

export default Navigation;
