import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { nanoid } from "nanoid";
import Main from "./components/Main";
import RightBar from "./components/RightBar";
import { ProjectForm } from "./Forms";

function App() {
  const [view, setView] = React.useState("tasks");
  const [projects, setProjects] = React.useState([{id: 1, name: "General"}]);
  const [form, setForm] = React.useState("");

  const [projectText, setProjectText] = React.useState("");

  function handleProjectChange(e) {
    setProjectText((prev) => (prev = e.target.value));
  }

  function showForm(e) {
    setForm((prev) => (prev = e.target.id));
    console.log(form);
  }

  function hideForm() {
    setForm((prev) => (prev = ""));
  }

  function addProject() {
    setProjects((prev) => [...prev, {id: nanoid(), name: projectText}]);
    resetProject();
  }

  function resetProject() {
    setProjectText((prev) => (prev = ""));
  }

  function selectView(e) {
    const { id } = e.target;
    setView((prev) => (prev = id));
    console.log(id);
  }

  return (
    <div className="App">
      <Navigation handleClick={selectView} />
      <Main view={view} formHandler={showForm} projects={projects}/>
      <RightBar />
      {form === "projectForm" && (
        <ProjectForm
          onChange={handleProjectChange}
          onClick={addProject}
          value={projectText}
          hide={hideForm}
        />
      )}
    </div>
  );
}

export default App;
