export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
