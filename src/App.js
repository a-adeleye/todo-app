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
  const [editingOn, setEditingOn] = React.useState(false);

  function selectView(e) {
    const { id } = e.target;
    setView((prev) => (prev = id));
  }

  // Form display
  const [form, setForm] = React.useState("");

  function showForm(param) {
    setForm((prev) => (prev = param));
  }

  function hideForm() {
    setForm(prev => prev = "");
    if(editingOn){
      toggleEditing()
      resetTaskData();
    }
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

  function toggleEditing(){
    setEditingOn(prev => prev =! prev)
  }

  function editTask(e, param){
    toggleEditing();
    showForm(param);
    const currentTask = tasks.filter(task => task.id === e.target.id);
    setTaskData(prev => prev = {...prev, ...currentTask[0]})
  }

  function updateTask(e){
    setTasks(prev => prev.map(task => task.id === taskData.id ? taskData : task));
    toggleEditing();
    resetTaskData();
  }

  function completeTask(e){
    const {id, checked} = e.target;
    console.log(checked)
    setTasks(prev => prev.map(task => task.id === id ? {...task, completed: checked} : task))
  }

  console.table(tasks)

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
        editTask ={editTask}
        completeTask={completeTask}
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
          add={addTask}
          update={updateTask}
          title={taskData.title}
          task={taskData.task}
          project={taskData.project}
          dueDate={taskData.dueDate}
          editingOn ={editingOn}
        />
      )}
    </div>
  );
}

export default App;
