import { useState } from "react";
import "./App.css";

import Example2 from "./components/Example2";

function App() {
  const [userId, setUserId] = useState(1);
  return (
    <>
      <div>
        <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
          Switch to Profile No. {userId === 1 ? 2 : 1}
        </button>
      </div>
      <Example2 key={userId} userId={userId} />
    </>
  );
}

export default App;
