import "./App.css";
import Header from "./Header";
import Sidebar from "./SideBar";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div class="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
