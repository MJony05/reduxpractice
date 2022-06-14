import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState({ name: "Jony", age: 20 });
  function increment() {
    setState((obj) => {
      return {
        ...obj,
        name: "Shoh",
      };
    });
  }
  function decrement() {
    setState(state - 1);
  }
  return (
    <>
      <h1>{JSON.stringify(state)}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
export default UseState;
