import './App.css';
import About from './components/About';
import Brand from './components/Brand';
import FAG from './components/FAG';
import Footer from './components/Footer';
import Header from './components/Header';
import Join from './components/Join';
import Path from './components/Path';
import Reward from './components/Reward';
import Riddim from './components/Riddim';
import Roadmap from './components/Roadmap';
import Sign from './components/Sign';
import Slider from './components/Slider';
import Team from './components/Team';
import Vision from './components/Vision';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Sign />
      <Vision />
      <Riddim />
      <Reward />
      <Path />
      <Roadmap />
      <About />
      <Team />
      <Brand />
      <FAG />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
