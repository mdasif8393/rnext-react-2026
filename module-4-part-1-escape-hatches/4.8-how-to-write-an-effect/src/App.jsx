import "./App.css";
// import MyComponent from "./components/MyComponent";
import ChatRoom from "./utils/ChatRoom";

function App() {
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "100dvh",
      }}
    >
      <ChatRoom />
    </div>
  );
}

export default App;
