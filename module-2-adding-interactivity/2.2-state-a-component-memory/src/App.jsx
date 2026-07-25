import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>

      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);
        }}
      >
        +3
      </button>
    </div>
  );
};

export default App;
