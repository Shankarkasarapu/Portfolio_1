import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Banner from './components/Banner';
import NavBar from "./components/NavBar"
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import LetsConnect from './components/LetsConnect';
import Footer from './components/Footer';
import Experince from './components/Experince';

function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Education/>
    <Skills/>
    <Experince/>
    <Projects/>
    <LetsConnect/>
    <Footer/>
    </>
  );
}

export default App;
