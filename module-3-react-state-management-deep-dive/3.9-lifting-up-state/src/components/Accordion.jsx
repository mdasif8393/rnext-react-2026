import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Learn With Sumt</h2>
      <Panel
        title="Paid Course"
        isActive={activeIndex === 0}
        onActive={() => setActiveIndex(0)}
      >
        20 ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore
        nam suscipit reprehenderit accusamus sunt quia iste adipisci beatae sed.
      </Panel>
      <Panel
        title="Free Course"
        isActive={activeIndex === 1}
        onActive={() => setActiveIndex(1)}
      >
        30 ipsum dolor sit, amet consectetur adipisicing elit. Suscipit nam
        aliquid fugit alias, inventore laudantium? Adipisci magnam commodi cum
        obcaecati, reiciendis odit earum perspiciatis. Natus praesentium
        excepturi dolorum recusandae nemo!
      </Panel>
    </>
  );
}
