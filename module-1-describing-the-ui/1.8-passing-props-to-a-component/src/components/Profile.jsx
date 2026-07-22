export default function Profile({ children, name }) {
  return (
    <div>
      <p>{name}</p>
      {children}
    </div>
  );
}
