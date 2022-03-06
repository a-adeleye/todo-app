import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Authentication from "./components/Authentication";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router basename="/">
      <div className="App">
        <>
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/login" element={<Authentication title="Login" />} />
            <Route
              path="/signup"
              element={<Authentication title="Sign Up" />}
            />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
