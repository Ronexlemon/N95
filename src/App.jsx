import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Designs from './Pages/Designs';
import Research from './Pages/Research';
import HomeN95 from './Pages/n95/Homen95';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='designs' element={<Designs/>}/>
        <Route path='research' element={<Research/>}/>
        <Route path='slution' element={<HomeN95/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
