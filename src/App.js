import logo from './logo.svg';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import About from './components/about';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Cards />
      <About />
      <Contact />
    </div>
  );
}

export default App;
