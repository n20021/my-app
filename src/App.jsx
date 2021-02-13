import React from 'react'
import home from './components/home'
import NasaPhoto from './components/NasaPhoto'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
export default function App () {
  return (
    <BrowserRouter>
      <div className='app'>
        <Route component={home} path='/' exact />
        <Route component={NasaPhoto} path='/nasaphoto' />
      </div>
    </BrowserRouter>
  )
}
