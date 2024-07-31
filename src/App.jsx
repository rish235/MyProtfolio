import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
function App() {
  return (
    <><div><Navbar/><Home/><Projects/><Skills/><Contact/><Footer/></div><Toaster/></>
    
  )
}

export default App