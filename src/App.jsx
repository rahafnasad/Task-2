import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prouduct from './Prouduct.jsx'
import Navbar from './Navbar.jsx'
import Resturent  from './Resturent'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Home'


function App() {

  return (
<>
<BrowserRouter>
<Navbar/>

<Routes>
<Route path='/' element={<Home/>}/>

  <Route path='/Resurent' element={<Resturent/>}/>
  <Route path='/Products' element={<Prouduct/>
}/>


</Routes></BrowserRouter>

</>
  )
}

export default App
