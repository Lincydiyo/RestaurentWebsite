import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import MenuPage from './MenuPage'
import OrderPage from './OrderPage'



function RouteHandle() {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<HomePage/>}/> 
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/menu' element={<MenuPage/>}/>
    <Route path='/order' element={<OrderPage/>}/>
</Routes>
</BrowserRouter>
  )
}

export default RouteHandle