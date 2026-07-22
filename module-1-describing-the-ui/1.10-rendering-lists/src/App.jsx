import "./App.css";

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

const chemists = people
  .filter((p) => p.profession === "chemist")
  .map((chemist) => <li key={chemist.id}>{chemist.name}</li>);

function App() {
  return (
    <div>
      <ul>{chemists}</ul>
    </div>
  );
}

export default App;
