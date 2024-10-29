import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Slider from "./components/Slider";
import Virtual from "./components/Virtual";
import Products from "./components/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
    </div>
  );
}

export default App;
