import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }

    return count1 % 2 === 0;
  }, [count1]);

  return (
    <div>
      <Title />

      <ShowCount count={count1} title="Counter 1" />
      <span>{isEven ? "Even" : "Odd"}</span>

      <Button handleClick={incrementByOne}>Increment By one</Button>

      <hr />

      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={incrementByFive}>Increment By Five</Button>
    </div>
  );
}

export default App;
