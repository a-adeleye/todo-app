import React from "react";

function Navigation(props) {
const {filter} = props;

  React.useEffect(() => {
    function setActiveLink(e) {
      const links = Array.from(document.querySelectorAll("li"));
      for (let i = 0; i < links.length; i++) {
        links[i].id === filter.value
          ? links[i].classList.add("active-link")
          : links[i].classList.remove("active-link");
      }
    }
    setActiveLink();
  },[filter]);

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

  const profileStyle = collapsed
    ? { justifyContent: "center" }
    : { transition: "0.2s" };

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
        <li id="Today" onClick={props.today}>
          <i className="fa-solid fa-calendar-day" id="Today"></i>
          {!collapsed && <span id="Today">Today</span>}
        </li>
        <li id="This Week" onClick={props.thisWeek}>
          <i className="fa-solid fa-calendar-week" id="This Week"></i>
          {!collapsed && <span id="This Week">This Week</span>}
        </li>
        <li id="This Month" onClick={props.thisMonth}>
          <i className="fa-solid fa-calendar-days" id="This Month"></i>
          {!collapsed && <span id="This Month">This Month</span>}
        </li>
        <li onClick={props.handleClick} id="Projects">
          <i id="Projects" className="fa-solid fa-bars-progress"></i>
          {!collapsed && <span id="Projects">Projects</span>}
        </li>
        <li onClick={props.handleClick} id="Notes">
          <i id="Notes" className="fa-solid fa-clipboard"></i>
          {!collapsed && <span id="Notes">Notes</span>}
        </li>
      </ul>
      <div className="nav-toggle" onClick={toggle}>
        {!collapsed && <i className="fa-solid fa-angles-left"></i>}
        {collapsed && <i className="fa-solid fa-angles-right"></i>}
      </div>
    </section>
  );
}

export default Navigation;
