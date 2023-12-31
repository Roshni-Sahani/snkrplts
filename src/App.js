import logo from './logo.svg';
import './App.css'
import Navigation from './components/Navigation'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Footer />
    </div>
  );
}

export default App;
