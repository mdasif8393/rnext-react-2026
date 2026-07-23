function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function App() {
  return (
    <>
      <Cup guest={2} />
      <Cup guest={1} />
      <Cup guest={3} />
    </>
  );
}
