import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { signout, username } from "../UserData";

function Navigation(props) {
  const { filter } = props;
  
  const dispatch = useDispatch();
  const userName = useSelector(username);

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
  }, [filter]);

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

  let navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    toast("Logout successfull ");
    navigate("/login");
    dispatch(signout(""))
  };

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    
    let authToken = sessionStorage.getItem("Auth Token");
    if (authToken) {
      setIsLoggedIn(prev => prev = true)
    }

    if (!authToken) {
      setIsLoggedIn(prev => prev = false)
    }
  }, []);

  return (
    <section className="navigation" style={navbarStyle}>
      <div className="nav-items">
        <div className="profile" style={profileStyle}>
          <div className="box">{userName ? userName.charAt(0) : "U"}</div>
          {!collapsed && <p>Hi {userName || "User"}</p>}
        </div>
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
        {!collapsed && <button className="logout-button" onClick={handleLogout}>Logout</button>}
      </div>
      <div className="nav-toggle" onClick={toggle}>
        {!collapsed && <i className="fa-solid fa-angles-left"></i>}
        {collapsed && <i className="fa-solid fa-angles-right"></i>}
      </div>
    </section>
  );
}

export default Navigation;
