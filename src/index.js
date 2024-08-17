import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar.js';
import App from './App';
import Details from './components/details';
import Contact from './components/contact'
import Login from './components/login'
import Register from './components/register';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import MainSection from "./components/mainSection.js";
import Exercise from './components/exercise';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" exact element={<App/>}/>
      <Route path="/:id" element={<Details/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/login" element={<Login/>}/> */}
      <Route path="/exercise" element={<Exercise/>}/>

      {/* <Route path="/register" element={<Register/>}/> */}
      <Route path="/homePage" element={<MainSection/>}/>


    </Routes>
  </BrowserRouter>
);


