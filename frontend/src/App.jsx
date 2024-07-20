import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './components/Navabar'
import { Route, Router, Routes } from 'react-router-dom'
import ViewStudent from './components/ViewStudent'
import Add from './components/AddStudent'
import AddStudent from './components/AddStudent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navabar/>  
     <Routes>
     <Route path='/' element={<ViewStudent/>}/>
     <Route path='/a' element={<AddStudent/>}/>

     </Routes>
    </>
  )
}

export default App
