import { useState } from "react";
<link rel="stylesheet" href="App.css" />;
export function Createtodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <div className="MainTodoDiv">
        <h1>Welcome To my Todo Application</h1>

        <input
          type="text"
          placeholder="Title"
          className="TodoTitle"
          onChange={function (e) {
            const value = e.target.value;
            setTitle(value); // corrected here
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Description"
          className="Tododescription"
          onChange={function (e) {
            const value = e.target.value;
            setDescription(value); // corrected here
          }}
        />
        <br />
        <button
          className="btn"
          onClick={function () {
            fetch("http://localhost:6777/todo", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            }).then(async function (res) {
              const json = await res.json();
              console.log("Todo added");
              console.log(json);
            });
            props.setTodos([
              ...props.todos,
              {
                title,
                description,
              },
            ]);
          }}
        >
          Add a Todo
        </button>
      </div>
    </div>
  );
}
