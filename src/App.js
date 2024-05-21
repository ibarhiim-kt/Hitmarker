import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Second from './Component/Second';
import ThirdPage from './Component/ThirdPage';
import Footer from './Component/Footer';
import ThirdPagePart1 from './Component/ThirdPagePart1';


function App() {
  return (
    <div className='mainPage'>
    <div className="background">
    <Header/>
    <Hero/>
    </div>
    <Second/>
    <ThirdPagePart1/>
    <ThirdPage/>
    <Footer/>
    </div>
  );
}

export default App;
