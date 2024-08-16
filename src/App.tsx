import './App.css';
import CarsList from './components/cars/cars-list';
import HeroImageCarousel from './components/hero/hero-image-carousel';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImageCarousel />
      <CarsList />
    </div>
  );
}

export default App;
