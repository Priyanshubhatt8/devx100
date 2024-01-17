export function Createtodo() {
  return (
    <div>
      <div className="MainTodoDiv">
        <h1>Welcome To my Todo Application</h1>

        <input type="text" placeholder="Title" className="TodoTitle"></input>
        <br />
        <input
          type="text"
          placeholder="Description"
          className="Tododescription"
        ></input>
        <br />
        <button className="btn">Add a Todo</button>
      </div>
    </div>
  );
}
