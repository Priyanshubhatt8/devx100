// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increament() {
    setCount(count + 1);
  }
  function Decreament() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>Increment</button>
      <button onClick={Decreament}>Decreament</button>
    </div>
  );
}

export default App;
