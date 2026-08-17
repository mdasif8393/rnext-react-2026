import { useContext, useEffect, useEffectEvent } from "react";
import logVisit from "../utils/logVisit";
import ShoppingCartContext from "../contexts/ShoppingCartContext";

export default function Page({ url, onPageChange, onAddItems }) {
  const items = useContext(ShoppingCartContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
  }, [url]);

  return (
    <div>
      <div>This is page</div>
      <div>
        <button onClick={onPageChange}>Change Page</button>
        <button onClick={onAddItems}>Add new item</button>
      </div>
      <div>Total items in cart: {numberOfItems}</div>
    </div>
  );
}
