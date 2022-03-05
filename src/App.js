import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { nanoid } from "nanoid";
import Main from "./components/Main";
import RightBar from "./components/RightBar";
import { ProjectForm, NoteForm, TaskForm } from "./components/Forms";

function App() {
  //View

  const [view, setView] = React.useState("Tasks");

  function selectView(e) {
    const { id } = e.target;
    setView((prev) => (prev = id));
  }

  // Form display
  const [form, setForm] = React.useState("");

  function showForm(e) {
    setForm((prev) => (prev = e.target.id));
  }

  function hideForm() {
    setForm((prev) => (prev = ""));
  }

  // Projects
  const [projects, setProjects] = React.useState([]);

  const [projectText, setProjectText] = React.useState("");
  function handleProjectChange(e) {
    setProjectText((prev) => (prev = e.target.value));
  }

  function addProject() {
    setProjects((prev) => [...prev, { id: nanoid(), name: projectText }]);
    resetProject();
  }

  function resetProject() {
    setProjectText((prev) => (prev = ""));
  }

  // Notes
  const [notes, setNotes] = React.useState([]);
  const [noteData, setNoteData] = React.useState({
    id: nanoid(),
    title: "",
    noteText: "",
  });

  function handleNoteChange(e) {
    const { name, value } = e.target;
    setNoteData((prev) => (prev = { ...noteData, [name]: value }));
  }

  function addNote() {
    setNotes((prev) => [...prev, noteData]);
    resetNote();
  }

  function resetNote() {
    setNoteData(
      (prev) => (prev = { ...prev, id: nanoid(), title: "", noteText: "" })
    );
  }

  // Tasks

  const [tasks, setTasks] = React.useState([]);
  const [taskData, setTaskData] = React.useState({
    id: nanoid(),
    title: "",
    task: "",
    project: "General",
    dueDate: "",
    completed: false,
  });

  function handleTaskChange(e) {
    const { name, value } = e.target;
    setTaskData((prev) => (prev = { ...taskData, [name]: value }));
  }

  function addTask() {
    setTasks((prev) => [...prev, taskData]);
    resetTask();
  }

  function deleteTask(e) {
    setTasks((prev) => (prev = prev.filter((task) => task.id !== e.target.id)));
  }

  function resetTask() {
    setTaskData(
      (prev) =>
        (prev = {
          ...prev,
          id: nanoid(),
          title: "",
          task: "",
          project: "",
          dueDate: "",
        })
    );
  }

  console.log(tasks);

  return (
    <div className="App">
      <Navigation handleClick={selectView} />
      <Main
        view={view}
        formHandler={showForm}
        projects={projects}
        notes={notes}
        tasks={tasks}
        deleteTask={deleteTask}
      />
      <RightBar />
      {form === "projectForm" && (
        <ProjectForm
          onChange={handleProjectChange}
          onClick={addProject}
          value={projectText}
          hide={hideForm}
        />
      )}
      {form === "noteForm" && (
        <NoteForm
          onChange={handleNoteChange}
          onClick={addNote}
          title={noteData.title}
          body={noteData.noteText}
          hide={hideForm}
        />
      )}
      {form === "taskForm" && (
        <TaskForm
          projects={projects}
          hide={hideForm}
          onChange={handleTaskChange}
          onClick={addTask}
          title={taskData.title}
          task={taskData.task}
          project={taskData.project}
          dueDate={taskData.dueDate}
        />
      )}
    </div>
  );
}

export default App;
