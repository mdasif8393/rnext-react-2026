import { users } from "./transition/fakeuser";
import FindUser from "./transition/FindUser";

function App() {
  return <FindUser users={users} />;
}

export default App;
