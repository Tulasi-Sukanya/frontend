import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home'
import Scholarship from './Components/Pages/Scholarship'
import './App.css'

const App = () => {
  return (
    <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scholarship" element={<Scholarship />} />
          </Routes>
    </div>
  )
}

export default App