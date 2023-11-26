import './App.css';

import Contact from './Contact';
import Team from './Team';
import Home from './Home';
import AboutProduct from "./AboutProduct"

//для меню
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  //menu
  //внутри нашей папки устанавливаем:
  //npm install react-router-dom
  //потом устанавливаем:
  //npm i react-router
  //берем наше меню в тег <Router>
  //вводим тег <nav> который отвечает за отображение компонента
  //вводим тег <Link to="/"
  //вводим тег <Routes>
  // -> <Route />
  //в нем пишем саму дорогу к компоненту, используя слово element={< />}

  return (
    <div>
      <Router>
        <nav>
          <Link to="/" className='link' >Shop</Link>
          <Link to="/team" className='link' >TEAM</Link>
          <Link to="/contact" className='link' >Contact Us</Link>
        </nav>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path="/team" element={ <Team/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about/:title" element={ <AboutProduct />}/>
        </Routes>
      </Router>    
    </div>
  );
}
export default App;
