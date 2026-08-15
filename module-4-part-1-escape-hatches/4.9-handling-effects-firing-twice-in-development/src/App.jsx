import { useState } from "react";
import "./App.css";
import Playground from "./components/Playground";
import Comments from "./components/Comments";

function App() {
  // const [show, setShow] = useState(false);
  return (
    <>
      {/* <Map /> */}
      {/* <Dialogue /> */}
      {/* <Scroller /> */}
      {/* <Animation /> */}
      <Comments postId="4" />
      {/* <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <Playground />} */}
    </>
  );
}

export default App;
