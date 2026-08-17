import { useState } from "react";
import "./App.css";
import Page from "./components/Page";
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import Pointer from "./components/Pointer";

const items = [
  {
    id: 1,
    title: "Product 1",
  },
];

function App() {
  const [page, setPage] = useState("/home");
  const [cartItems, setCartItems] = useState(items);

  const handlePageChange = () => {
    setPage("/cart");
  };

  const addItem = () => {
    setCartItems([
      ...cartItems,
      {
        id: 2,
        title: "Product 2",
      },
    ]);
  };

  return (
    // <ShoppingCartContext.Provider value={cartItems}>
    //   <Page url={page} onPageChange={handlePageChange} onAddItems={addItem} />
    // </ShoppingCartContext.Provider>
    <>
      <Pointer />
    </>
  );
}

export default App;
