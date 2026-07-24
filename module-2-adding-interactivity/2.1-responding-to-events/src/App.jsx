export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit");
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
