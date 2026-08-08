import { useState } from "react";
import "./App.css";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./SideBar";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <div>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </div>
  );
}

export default App;
