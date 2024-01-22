// import { useEffect, useState } from "react";
// import React from "react";

// function App() {
//   return (
//     <>
//       <Cardwrapper innercomponent={<Newchild />}></Cardwrapper>
//     </>
//   );

//   function Newchild() {
//     return (
//       <>
//         <h1>Hi there welcome back to my channel</h1>
//       </>
//     );
//   }

//   function Cardwrapper({ innercomponent }) {
//     return (
//       <>
//         <h2 style={{ border: "2px solid green", padding: 20 }}>
//           {innercomponent}
//         </h2>
//       </>
//     );
//   }
// }

// export default App;

// let counter = 4;
// function App() {
//   const [todos, setTodos] = useState([
//     {
//       id: 1,
//       title: "Go to gym",
//       description: "After gym play valorant",
//     },
//     {
//       id: 2,
//       title: "Study now",
//       description: "After valorant study for 2 hours",
//     },
//     {
//       id: 3,
//       title: "Go to sleep",
//       description: "After study go to sleep at 10 pm",
//     },
//     {
//       id: 4,
//       title: "Wake up ",
//       description: "Wake up early",
//     },
//   ]);

//   function AddTodo() {
//     setTodos([
//       ...todos,
//       {
//         id: counter++,
//         title: title,
//         description: description,
//       },
//     ]);
//   }
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => {
//           setTitle(e.target.value);
//         }}
//       />
//       <input
//         type="text"
//         onChange={(e) => {
//           setDescription(e.target.value);
//         }}
//       />
//       <button onClick={AddTodo}>Add new Todo</button>

//       {todos.map((todo) => {
//         return (
//           <Todo
//             key={todo.id}
//             id={todo.id}
//             title={todo.title}
//             description={todo.description}
//           />
//         );
//       })}
//     </div>
//   );
// }

// function Todo({ id, title, description }) {
//   return (
//     <div>
//       <h2>
//         {" "}
//         {id}:{title}
//       </h2>
//       <h3>
//         {" "}
//         {id}:{description}
//       </h3>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     setInterval(() => {
//       fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       });
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo title={todo.title} description={todo.description} />
//       ))}
//     </div>
//   );
// }
// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }
// export default App;

// function App() {
//   const [title, setTitle] = useState("My name is ");

//   function changeme() {
//     setTitle("Your name is priyanshu bhatt" + Math.random());
//   }

//   return (
//     <>
//       <div>
//         <button onClick={changeme}>Change me</button>
//         <Header title={title}></Header>
//         <Header title="Hi welcome to this props"></Header>
//         <Header title="Hi welcome to this props"></Header>
//         <Header title="Hi welcome to this props"></Header>
//         <Header title="Hi welcome to this props"></Header>
//         <Header title="Hi welcome to this props"></Header>
//       </div>
//     </>
//   );
// }
// export default App;

// const Header = React.memo(function Header({ title }) {
//   return (
//     <div>
//       <div>{title}</div>
//     </div>
//   );
// });

// function App() {
//   return (
//     <>
//       <CardWrapper>hi there</CardWrapper>
//     </>
//   );
// }

// function CardWrapper({ children }) {
//   return (
//     <>
//       <div style={{ border: "2px solid red", padding: "20x" }}>
//         <h3>{children}</h3>
//       </div>
//     </>
//   );
// }

// function TextComponent() {
//   return (
//     <div>
//       <h1>Hi there</h1>
//     </div>
//   );
// }

// function TextComponent2() {
//   return (
//     <div>
//       <h1>Hi there2</h1>
//     </div>
//   );
// }
// export default App;

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
