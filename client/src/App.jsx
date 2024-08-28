import { useState } from 'react'
import axios from 'axios';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.scss'
import HomePage from './Pages/HomePage/HomePage';
import Header from "./components/Header/Header";


function App() {

  return (    
    <BrowserRouter>
          <Header />
    <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/gods/:name" element={<GodDetails />} /> */}
        <Route path="/pantheon/:pantheon" element={<HomePage />} />
      </Routes>
</BrowserRouter>

  )
}

export default App;
