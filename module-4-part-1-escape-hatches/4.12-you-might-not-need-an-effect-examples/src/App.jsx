import { useState } from "react";
import "./App.css";
import { items1, items2 } from "./data/itemsData";
import Example3 from "./components/Example3";

function App() {
  const [items, setItems] = useState(items1);

  return (
    <>
      <button onClick={() => setItems(items2)}>Switch to Items2</button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      <Example3 items={items} />
    </>
  );
}

export default App;
