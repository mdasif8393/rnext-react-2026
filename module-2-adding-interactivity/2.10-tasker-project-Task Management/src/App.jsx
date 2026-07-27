import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBoard from "./task/TaskBoard";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center"></div>
        <HeroSection />
        <TaskBoard />
        <Footer />
      </div>
    </>
  );
}

export default App;
