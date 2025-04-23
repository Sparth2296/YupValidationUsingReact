import { useState } from 'react'
import './App.css'
import RegistrationFristForm from './pages/RegistrationFristForm'
import RegistretionLastForm from './pages/RegistretionLastForm'
import RegistretionSecondForm from './pages/RegistretionSecondForm'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RegistrationFristForm/>
      <RegistretionLastForm/>
      <RegistretionSecondForm/> */}

        <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationFristForm/>}/>
          <Route path='/RegistretionLastForm' element={<RegistretionLastForm/>}/>
          <Route path='/RegistretionSecondForm' element={<RegistretionSecondForm/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
