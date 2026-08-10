import "./App.css";
import Counter from "./components/Counter";
import Stopwatch from "./components/Stopwatch";

function App() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100dvh",
      }}
    >
      <Counter />
    </div>
  );
}

export default App;
