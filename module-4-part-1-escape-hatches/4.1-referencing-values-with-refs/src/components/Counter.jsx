import { useRef, useState } from "react";

export default function Counter() {
  const ref = useRef(0);

  const handleClick = () => {
    ref.current += 1;
    console.log(ref.current);
  };

  return (
    <>
      <button onClick={handleClick}>Click Me! {ref.current}</button>
    </>
  );
}
