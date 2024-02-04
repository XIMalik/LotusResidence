import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lotus from './pages/Lotus'

export default function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route  exact path="/" element={<Lotus />}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

