import {useState, useEffect} from 'react';
import Day4 from './Component/Day4/Day4';
import Day3 from './Component/Day3';
import FetchApi from './Component/Day4/FetchApi'
import './App.css';
import Header from './Component/Day2/Header';
import Footer from './Component/Day2/Footer';
import Form from './Component/Form';
import Home from './Component/Home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header/>
      <Home/>
      <Form/>
      {/* <FetchApi/> */}
      {/* <Day3/> */}
      {/* <Day4/> */}
      <Footer/>
         
    </div>
  );
}

export default App;
