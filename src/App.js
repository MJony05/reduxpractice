import logo from "./logo.svg";
import "./App.css";
import WorldCup from "./components/WorldCup";
import SelectCountry from "./components/SelectCountry";
import UseState from "./hooks/useState";
import { useState } from "react";

function App() {
  const [count, setCount] = useState("");
  const getState = (val) => {
    setCount(val);
  };
  return (
    // <div className="App">
    //   <WorldCup valCountry={count} />
    //   <SelectCountry func={getState} />
    // </div>
    <UseState />
  );
}

export default App;
