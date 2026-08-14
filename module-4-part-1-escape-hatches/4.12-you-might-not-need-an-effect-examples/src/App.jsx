import "./App.css";
import { useState } from "react";
import Example7 from "./components/Example7";

function App() {
  const [isOn, setIsOn] = useState(false); // example 7
  return (
    <>
      <p>{isOn ? "On" : "Off"}</p>
      <Example7 onChange={setIsOn} />
    </>
  );
}

export default App;
