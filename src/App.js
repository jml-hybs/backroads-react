import { Footer } from './components/Footer';
import { Tours } from './components/Tours';
import { Services } from './components/Services';
import { About } from './components/About';
import { Hero } from './components/Hero';
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;