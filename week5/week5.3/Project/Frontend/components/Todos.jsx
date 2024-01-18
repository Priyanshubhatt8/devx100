<link rel="stylesheet" href="App.css" />;

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div className="created">
            <h1 className="h">{todo.title}</h1>
            <h2 className="h2">{todo.description}</h2>
            <button className="bton">
              {todo.completed == true ? "completed" : "Mark as complete"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
