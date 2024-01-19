// import { useState } from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("Priyanshu");

  function Updatetitle() {
    setTitle(`My name is  ${Math.random()}`);
  }
  return (
    <div>
      <button onClick={Updatetitle}>Click to update details</button>
      <Header title={title}></Header>
      <Header title="Hi get out"></Header>
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}
export default App;
