// import { useState } from "react";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Hello",
      description: "Not welcome",
    },
    {
      title: "You are wrong",
      description: "no you are not ",
    },
    {
      title: "What happend",
      description: "Thats not the problem here ",
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <>
      <br></br>
      <br></br>
      <button onClick={addTodo}>Add new todo</button>
      {todos.map(function (todo) {
        return (
          <>
            <Todo title={todo.title} description={todo.description}></Todo>
          </>
        );
      })}
    </> 
  );
}

function Todo({ title, description }) {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
    </>
  );
}

export default App;
//     <div>
//       <HeaderWithButton />
//       <Header title="My name is raman" />
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [firstTitle, setFirstTitle] = useState("my name is harkirat");

//   function changeTitle() {
//     setFirstTitle("My name is " + Math.random());
//   }

//   return (
//     <>
//       <button onClick={changeTitle}>Click me to change the title</button>
//       <Header title={firstTitle} />
//     </>
//   );
// }

// function Header({ title }) {
//   return <div>{title}</div>;
// }
//   const [title, setTitle] = useState("Priyanshu");
//   function Updatetitle() {
//     setTitle(`My name is  ${Math.random()}`);
//   }
//   return (
//     <div>
//       <button onClick={Updatetitle}>Click to update details</button>
//       <Header title={title}></Header>
//       <Header title="Hi get out"></Header>
//     </div>
//   );
// }
// function Header({ title }) {
//   return <div>{title}</div>;
