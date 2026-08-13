import { useState } from "react";
import "./App.css";

import Example3 from "./components/Example3";
import { items1, items2 } from "./data/itemsData";

function App() {
  // const [userId, setUserId] = useState(1);
  const [items, setItems] = useState(items1);

  return (
    <>
      {/* <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
          Switch to Profile No. {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} /> */}
      <button onClick={() => setItems(items2)}>Switch to Items2</button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>
      <Example3 items={items} />
    </>
  );
}

export default App;
