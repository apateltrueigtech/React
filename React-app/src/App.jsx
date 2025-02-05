import {useState, useEffect} from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Register from './Component/Register';
import Home from './Component/Home';
import About from './Component/About';
import Explore from './Component/Explore';
import GamesApi from './Component/Games/GamesApi';
import UseGames from './Component/Games/UseGames'
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
      <Route path = '/About Us' element={<About Us/>}/>
      <Route path ='/Explore' element={<Explore/>}/>
      <Route path ='/Register' element={<Register/>}/>
      </Routes>
      {/* <Home/> */}
     <UseGames/>
      <GamesApi/>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
