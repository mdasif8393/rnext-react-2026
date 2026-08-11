import Form from "./components/Form";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100dvh",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
