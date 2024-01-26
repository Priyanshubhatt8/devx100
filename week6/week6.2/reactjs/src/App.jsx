import React, { useEffect, useState } from "react";

import axios from "axios";

function App() {
  const [count, SetCount] = useState(0);
  const [sum, setSum] = useState(0);

  let count1 = 0;
  for (let i = 1; i <= sum.length; i++) {
    count1 = count1 + i;
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSum(e.target.value);
        }}
      />
      <br></br>
      <h3>
        Sum is {sum}and sum is {count}{" "}
      </h3>
      <br />

      <button
        onClick={() => {
          SetCount(count + 1);
        }}
      >
        Counter:{count}
      </button>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <Todo></Todo>
//       <h1>Hey akash</h1>
//     </div>
//   );
// }

// function Todo() {
//   const [todos, setTodos] = useState({});
//   const [todoid, SetTodoid] = useState(1);

//   useEffect(() => {
//     axios
//       .get("https://sum-server.100xdevs.com/todo?id=" + todoid)
//       .then((res) => {
//         setTodos(res.data.todo);
//       });
//   }, [todoid]);

//   return (
//     <>
//       <div>
//         <h1>{todos.title}</h1>
//         <h2>{todos.description}</h2>
//       </div>
//       <h1>Hi there</h1>;
//       <button
//         onClick={function () {
//           SetTodoid(1);
//         }}
//       >
//         1
//       </button>
//       <button
//         onClick={function () {
//           SetTodoid(2);
//         }}
//       >
//         2
//       </button>
//       <button
//         onClick={function () {
//           SetTodoid(3);
//         }}
//       >
//         3
//       </button>
//       <button
//         onClick={function () {
//           SetTodoid(4);
//         }}
//       >
//         4
//       </button>
//       <button
//         onClick={function () {
//           SetTodoid(5);
//         }}
//       >
//         5
//       </button>
//       <div>
//         <h1>{todos.title}</h1>
//         <h2>{todos.description}</h2>
//       </div>
//     </>
//   );
// }
// export default App;

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
//       setTodos(res.data.todos);
//     });
//   }, []);

//   function Addtodo() {
//     setTodos([
//       ...todos,
//       {
//         title: title,
//         description: description,
//       },
//     ]);
//   }
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           onChange={(e) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           onChange={(e) => {
//             setDescription(e.target.value);
//           }}
//         />

//         <button onClick={Addtodo}>Add 1 more todo</button>
//         {todos.map((todo) => {
//           return (
//             <div key={todo.id}>
//               <h1>{todo.title}</h1>
//               <h2>{todo.description}</h2>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }
// export default App;
