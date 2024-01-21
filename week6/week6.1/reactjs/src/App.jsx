import { useState } from "react";
function App() {
  return (
    <>
      <CardWrapper innerComponent={<TextComponent />}></CardWrapper>
      <CardWrapper innerComponent={<TextComponent2 />}></CardWrapper>
    </>
  );
}

function CardWrapper({ innerComponent }) {
  return (
    <>
      <div style={{ border: "2px solid red", padding: "20x" }}>
        <h3>{innerComponent}</h3>
      </div>
    </>
  );
}

function TextComponent() {
  return (
    <div>
      <h1>Hi there</h1>
    </div>
  );
}

function TextComponent2() {
  return (
    <div>
      <h1>Hi there2</h1>
    </div>
  );
}
export default App;

// const [todos, setTodos] = useState([
//   {
//     id: 1,
//     title: "Hello",
//     description: "Not welcome",
//   },
//   {
//     id: 2,
//     title: "You are wrong",
//     description: "no you are not ",
//   },
//   {
//     id: 3,
//     title: "What happend",
//     description: "Thats not the problem here ",
//   },
// ]);

// function addTodo() {
//   setTodos([
//     ...todos,
//     {
//       id: counter++,
//       title: Math.random(),
//       description: Math.random(),
//     },
//   ]);
// }
// return (
//   <>
//     <br></br>
//     <br></br>
//     <button onClick={addTodo}>Add new todo</button>
//     {todos.map((todo)=> {
//       return (
//         <>
//           <Todo
//             key={todo.id}
//             title={todo.title}
//             description={todo.description}
//           ></Todo>
//         </>
//       );
//     })}
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
