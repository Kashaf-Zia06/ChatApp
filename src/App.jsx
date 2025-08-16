import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className="bg-[url('/bgImage.svg')] bg-contain">
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='/Profile' element={<ProfilePage/>}></Route>
     </Routes>
    </div>

    
  )
}

export default App
