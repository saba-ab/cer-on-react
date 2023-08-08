import "./App.css";
import Header from "./header/Header";
import AboutUs from "./aboutUs/AboutUs";
import Slider from "./slider/Slider";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Slider />
      <AboutUs title="ჩვენ შესახებ" />
    </div>
  );
};

export default App;
