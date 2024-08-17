import './App.css';
import CarsList from './components/cars/cars-list';
import ContactNumbers from './components/contact/contact-numbers';
import Footer from './components/footer/footer';
import HeroImageCarousel from './components/hero/hero-image-carousel';
import Map from './components/maps/map';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImageCarousel />
      <CarsList />
      <ContactNumbers />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
