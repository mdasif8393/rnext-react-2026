import "./App.css";
import ButtonTap from "./components/ButtonTap";
import Counter from "./components/Counter";
import Keyframe from "./components/KeyFrame";
import ScrollReveal from "./components/ScrollReveal";
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
      <Counter />
      <ScrollReveal />
    </>
  );
}

export default App;
