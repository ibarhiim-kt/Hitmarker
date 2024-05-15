import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Second from './Component/Second';
import ThirdPage from './Component/ThirdPage';


function App() {
  return (
    <div className='abu'>
    <div className="background">
    <Header/>
    <Hero/>
    </div>
    <Second/>
    <ThirdPage/>
    </div>
  );
}

export default App;
