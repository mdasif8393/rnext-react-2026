import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Remove" : "Show"}
      </button>

      <hr />

      {show && <Welcome />}
    </>
  );
}

export default App;
