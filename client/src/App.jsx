import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Landing from './pages/Landing'
import LogIn from './pages/LogIn'
import Settings from './pages/Settings'
import SignUp from './pages/SignUp'
import Todo from './pages/Todo'
import axios from 'axios';




function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Landing/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
