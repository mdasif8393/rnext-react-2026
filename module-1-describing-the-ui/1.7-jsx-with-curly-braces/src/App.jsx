const style1 = {
  backgroundColor: "red",
};

const style2 = {
  backgroundColor: "green",
};

const color = "red";

export default function App() {
  return (
    <ul style={color === "green" ? style2 : style1}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
