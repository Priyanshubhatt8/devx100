import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      name: "Priyanshu",
      title: "Study",
      age: 12,
    },
    {
      name: "Akash mishra",
      title: "Playgames",
      age: 10,
    },
    {
      name: "Shubham mishra",
      title: "study",
      age: 11,
    },
  ]);
  function newtodo() {
    setTodo([
      ...todo,
      {
        name: "New priyanshu",
        title: "Study",
        age: "10",
      },
    ]);
  }

  return (
    <div>
      <button onClick={newtodo}> Add a random todo</button>

      {todo.map(function (todo) {
        return <Puttodo name={todo.name} title={todo.title}></Puttodo>;
      })}
    </div>
  );
}

function Puttodo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
    </div>
  );
}

export default App;
