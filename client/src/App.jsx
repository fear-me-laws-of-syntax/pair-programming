import { useState } from 'react'
import axios from 'axios';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.scss'

function App() {

  return (    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<God />} />
        <Route path="/gods/:name" element={<GodDetails />} />
        <Route path="/pantheon/:pantheon" element={<God />} />
      </Routes>
</BrowserRouter>

  )
}

export default App;
