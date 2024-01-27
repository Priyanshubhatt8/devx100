import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import axios from "axios";

function App() {
  const [Counter, SetCount] = useState(0);

  // function a() {
  //   console.log("Again rerender");
  // }

  var a = useCallback(() => {
    console.log("not rendered");
  }, []);
  return (
    <>
      <div>
        <button
          onClick={() => {
            SetCount(Counter + 1);
          }}
        >
          Counter {Counter}
        </button>

        <Demo a={a}></Demo>
      </div>
    </>
  );
}

const Demo = memo(function Demo({ a }) {
  return (
    <div>
      <h1>Hi there </h1>
      {/* <h2>{a}</h2> */}
    </div>
  );
});
export default App;

// const [sum, setSum] = useState(0);
// const [value, setFinalvalue] = useState(0);

// useEffect(() => {
//   let count = 0;
//   for (let i = 1; i <= sum; i++) {
//     count = count + i;
//   }
//   setFinalvalue(count);
// }, [sum]);

// let Count = useMemo(() => {
//   let finalCount = 0;
//   for (let i = 1; i <= sum; i++) {
//     finalCount = finalCount + i;
//   }
// return finalCount;
// }, [sum]);
// return (
//   <div>
//     <input
//       type="text"
//       onChange={(e) => {
//         setSum(e.target.value);
//       }}
//     />
//     <br></br>
//     <h3>
//       Input is {sum} and The Sum of {Count}{" "}
//     </h3>
//     <br />

//     <button
//       onClick={() => {
//         SetCount(Counter + 1);
//       }}
//     >
//       Counter:{Counter}
//     </button>
//   </div>
// );
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
