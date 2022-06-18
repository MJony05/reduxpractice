import "./App.css";
import ButtonCounter from "./components/ButtonCounter";
import DisplayCounter from "./components/DisplayCounter";
import Alert from "./hooks/useContext";
import Main from "./hooks/Main";
import {createContext, useState} from "react";
import {DisplayCounterContainer} from "./container/DisplayCounterContainer";
import {ButtonCounterContainer} from "./container/ButtonCounterContainer";
function App() {
  return (
    <div>
      <DisplayCounterContainer/>
      <ButtonCounterContainer/>
      {/*<Alert/>*/}
      {/*<Main/>*/}
    </div>



  );
}

export default App;
