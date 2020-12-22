// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preloader from './Components/Preloader';
import Header from './Components/Header';
import BackToTop from './Components/BackToTop';
import NavHeader from './Components/NavHeader';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Preloader />
	  <Header />
	  <BackToTop />
	  <NavHeader />
	  <Switch>
		<Route exact path='/' component={HomePage} />
		<Route exact path='/home' component={HomePage} />
		<Route exact path='/about' component={HomePage} />
		<Route exact path='/courses/:id?' component={HomePage} />
		<Route exact path='/contact' component={HomePage} />
	  </Switch>
	  <Footer />
    </Router>
  );
}

export default App;
