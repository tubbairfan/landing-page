import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing_page} from "./screens/landing-page/index";
import { Footer } from './components/Footer';
const App:React.FC= () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page/>} />
        
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  )
}

export default App
