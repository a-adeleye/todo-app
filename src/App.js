import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { nanoid } from "nanoid";
import Main from "./components/Main";
import RightBar from "./components/RightBar";
import { ProjectForm, NoteForm, TaskForm } from "./components/Forms";
import { isToday, isThisWeek, isThisMonth } from "./dateFunction.js";

function App() {
  //View

  const [view, setView] = React.useState("Tasks");
  const [editingOn, setEditingOn] = React.useState(false);

  function selectView(e) {
    const { id } = e.target;
    setView((prev) => (prev = id));
    setFilter(prev => prev = {...prev, state: false, value: "Tasks"});
  }

  // Form display
  const [form, setForm] = React.useState("");

  function showForm(param) {
    setForm((prev) => (prev = param));
  }

  function hideForm() {
    setForm((prev) => (prev = ""));
    if (editingOn) {
      toggleEditing();
      resetTaskData();
      resetNoteData();
    }
  }

  // Projects
  const [projects, setProjects] = React.useState([]);

  const [projectData, setProjectData] = React.useState({
    id: nanoid(),
    name: "",
  });
  function handleProjectChange(e) {
    setProjectData((prev) => (prev = { ...prev, name: e.target.value }));
  }

  function addProject() {
    setProjects((prev) => [...prev, projectData]);
    resetProjectData();
  }

  function resetProjectData() {
    setProjectData((prev) => (prev = { id: nanoid(), name: "" }));
  }

  function deleteProject(e) {
    setProjects(
      (prev) => (prev = prev.filter((project) => project.id !== e.target.id))
    );
  }

  function updateProject() {
    setProjects((prev) =>
      prev.map((project) => (project.id === projectData.id ? projectData : project))
    );
    toggleEditing();
    resetProjectData();
  }

  function editProject(e, param) {
    toggleEditing();
    showForm(param);
    const currentProject = projects.filter(
      (project) => project.id === e.target.id
    );
    setProjectData((prev) => (prev = { ...prev, ...currentProject[0] }));
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
    resetNoteData();
  }

  function resetNoteData() {
    setNoteData(
      (prev) => (prev = { ...prev, id: nanoid(), title: "", noteText: "" })
    );
  }

  function deleteNote(e) {
    setNotes((prev) => (prev = prev.filter((note) => note.id !== e.target.id)));
  }

  function editNote(e, param) {
    toggleEditing();
    showForm(param);
    const currentNote = notes.filter((note) => note.id === e.target.id);
    setNoteData((prev) => (prev = { ...prev, ...currentNote[0] }));
  }

  function updateNote() {
    setNotes((prev) =>
      prev.map((note) => (note.id === noteData.id ? noteData : note))
    );
    toggleEditing();
    resetNoteData();
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
    resetTaskData();
  }

  function deleteTask(e) {
    setTasks((prev) => (prev = prev.filter((task) => task.id !== e.target.id)));
  }

  function resetTaskData() {
    setTaskData(
      (prev) =>
        (prev = {
          ...prev,
          id: nanoid(),
          title: "",
          task: "",
          project: "",
          dueDate: "",
          completed: false,
        })
    );
  }

  function toggleEditing() {
    setEditingOn((prev) => (prev = !prev));
  }

  function editTask(e, param) {
    toggleEditing();
    showForm(param);
    const currentTask = tasks.filter((task) => task.id === e.target.id);
    setTaskData((prev) => (prev = { ...prev, ...currentTask[0] }));
  }

  function updateTask() {
    setTasks((prev) =>
      prev.map((task) => (task.id === taskData.id ? taskData : task))
    );
    toggleEditing();
    resetTaskData();
  }

  function completeTask(e) {
    const { id, checked } = e.target;
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: checked } : task
      )
    );
  }

  const [filter, setFilter] = React.useState({state: false, value: "Tasks"});
  const [filteredTasks, setFilteredTasks] = React.useState([tasks]);

  function today(){
    setFilter(prev => prev = {...prev, state: true, value: "Today"})
    setFilteredTasks(prev => prev = tasks.filter(task => isToday(task.dueDate)));
  }

  function thisWeek(){
    setFilter(prev => prev = {...prev, state: true, value: "This Week"})
    setFilteredTasks(prev => prev = tasks.filter(task => isThisWeek(task.dueDate)));
  }

  function thisMonth(){
    setFilter(prev => prev = {...prev, state: true, value: "This Month"})
    setFilteredTasks(prev => prev = tasks.filter(task => isThisMonth(task.dueDate)));
  }

  console.log(filteredTasks);

console.log(tasks)
  return (
    <div className="App">
      <Navigation handleClick={selectView} thisMonth={thisMonth} today={today} thisWeek={thisWeek}/>
      <Main
        view={view}
        formHandler={showForm}
        projects={projects}
        notes={notes}
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        completeTask={completeTask}
        editNote={editNote}
        deleteNote={deleteNote}
        deleteProject={deleteProject}
        editProject={editProject}
        filter={filter}
        filteredTasks ={filteredTasks}
      />
      <RightBar />
      {form === "projectForm" && (
        <ProjectForm
          onChange={handleProjectChange}
          add={addProject}
          value={projectData.name}
          hide={hideForm}
          editingOn={editingOn}
          update={updateProject}
        />
      )}
      {form === "noteForm" && (
        <NoteForm
          onChange={handleNoteChange}
          add={addNote}
          title={noteData.title}
          body={noteData.noteText}
          hide={hideForm}
          editingOn={editingOn}
          update={updateNote}
        />
      )}
      {form === "taskForm" && (
        <TaskForm
          projects={projects}
          hide={hideForm}
          onChange={handleTaskChange}
          add={addTask}
          update={updateTask}
          title={taskData.title}
          task={taskData.task}
          project={taskData.project}
          dueDate={taskData.dueDate}
          editingOn={editingOn}
        />
      )}
    </div>
  );
}

export default App;
