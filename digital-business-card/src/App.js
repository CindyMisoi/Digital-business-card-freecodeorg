import './App.css';
import Info from './components/Info';
import About from './components/About';
import Interest from './components/Interest';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div className='box--container'>
    <Info/>
    <About/>
    <Interest/>
    <Footer/>
    </div> 
    </div>
  );
}

export default App;
