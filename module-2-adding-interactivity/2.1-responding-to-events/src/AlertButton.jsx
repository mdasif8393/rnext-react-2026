export default function AlertButton({ message, children }) {
  return (
    <div>
      <button onClick={() => alert(message)}>{children}</button>
    </div>
  );
}
