import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  function Addtodo() {
    setTodos([
      ...todos,
      {
        title: title,
        description: description,
      },
    ]);
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button onClick={Addtodo}>Add 1 more todo</button>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;
