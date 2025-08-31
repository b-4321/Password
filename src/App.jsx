import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Navbar />
      <div className=" bg-[#000000] bg-[radial-gradient(#200122,#6f0000)] bg-[size:20px_20px]">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App
