import {useState, useEffect} from 'react';
import Day4 from './Component/Day4/Day4';
import Day3 from './Component/Day3';
import FetchApi from './Component/Day4/FetchApi'
import './App.css';
import Header from './Component/Day2/Header';
import Footer from './Component/Day2/Footer';
import Register from './Component/Register';
import Home from './Component/Home';
import Explore from './Component/Explore';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { toggleTheme } from './Component/Theme/ThemeSlice';
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
     
      <Router>
      <Header/>
      <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path ='/Explore' element={<Explore/>}/>
      <Route path ='/Register' element={<Register/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <FetchApi/> */}
      {/* <Day3/> */}
      {/* <Day4/> */}
      
      </Router>
    </>
  );
}

export default App;
