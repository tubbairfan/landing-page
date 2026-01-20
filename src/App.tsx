import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Landing_page} from "./screens/landing-page/index";
const App:React.FC= () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page/>} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
