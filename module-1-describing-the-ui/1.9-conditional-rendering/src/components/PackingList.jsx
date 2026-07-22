function Item({ name, isPacked }) {
  let itemContent = "";

  if (isPacked) {
    itemContent = name + "✅";
  } else {
    itemContent = name;
  }

  return <li className="item">i{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
