import "./App.css";
import Navbar from "./components/Navbar";
import FirstSection from "./components/FirstSection";
import ImageSection from "./components/ImageSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import FifthSection from "./components/FifthSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <ImageSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <FifthSection />
      <Footer />
    </div>
  );
}

export default App;
