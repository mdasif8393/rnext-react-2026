import { useState } from "react";
import "./App.css";
// import MyComponent from "./components/MyComponent";
import ChatRoom from "./utils/ChatRoom";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100dvh",
      }}
    >
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <ChatRoom />}
    </div>
  );
}

export default App;
