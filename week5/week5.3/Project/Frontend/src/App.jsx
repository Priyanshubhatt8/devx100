import { useState } from "react";
import { Createtodo } from "../components/Createtodo";
import { Todos } from "../components/Todos";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:6777/todo").then(async function (res) {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <Createtodo setTodos={setTodos}></Createtodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
