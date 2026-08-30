import "./App.css";
import ButtonTap from "./components/ButtonTap";
import Keyframe from "./components/KeyFrame";
import Simple from "./components/Simple";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";

function App() {
  return (
    <>
      <Simple />
      <Keyframe />
      <ButtonTap />
      <TextMotion />
      <TransitionType />
      <Variants />
    </>
  );
}

export default App;
