import React from "react";

function Navigation(props) {
const {filter} = props;

  React.useEffect(() => {
    function setActiveLink(e) {
      const links = Array.from(document.querySelectorAll(".nav-item"));
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
      <div className="nav-items">
        <div onClick={props.handleClick} id="Tasks" className="nav-item">
          <i id="Tasks" className="fa-solid fa-boxes-stacked"></i>
          {!collapsed && <span id="Tasks">Tasks</span>}
        </div>
        <div id="Today" onClick={props.today} className="nav-item">
          <i className="fa-solid fa-calendar-day" id="Today"></i>
          {!collapsed && <span id="Today">Today</span>}
        </div>
        <div id="This Week" onClick={props.thisWeek} className="nav-item">
          <i className="fa-solid fa-calendar-week" id="This Week"></i>
          {!collapsed && <span id="This Week">This Week</span>}
        </div>
        <div id="This Month" onClick={props.thisMonth} className="nav-item">
          <i className="fa-solid fa-calendar-days" id="This Month"></i>
          {!collapsed && <span id="This Month">This Month</span>}
        </div>
        <div onClick={props.handleClick} id="Projects" className="nav-item">
          <i id="Projects" className="fa-solid fa-bars-progress"></i>
          {!collapsed && <span id="Projects">Projects</span>}
        </div>
        <div onClick={props.handleClick} id="Notes" className="nav-item">
          <i id="Notes" className="fa-solid fa-clipboard"></i>
          {!collapsed && <span id="Notes">Notes</span>}
        </div>
      </div>
      <div className="nav-toggle" onClick={toggle}>
        {!collapsed && <i className="fa-solid fa-angles-left"></i>}
        {collapsed && <i className="fa-solid fa-angles-right"></i>}
      </div>
    </section>
  );
}

export default Navigation;
