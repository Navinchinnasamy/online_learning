import logo from './logo.svg';
import './App.css';
import Preloader from './Components/Preloader';
import Header from './Components/Header';
import BackToTop from './Components/BackToTop';
import NavHeader from './Components/NavHeader';
import Slider from './Components/Slider';
import Books from './Components/Books';
import Counter from './Components/Counter';
import Team from './Components/Team';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Preloader />
	  <Header />
	  <BackToTop />
	  <NavHeader />
	  <Slider />
	  <Books />
	  <Counter />
	  <Team />
	  <Footer />
    </div>
  );
}

export default App;
