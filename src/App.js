import './App.css'
import React, { useState, useEffect } from "react";

import { Login } from "./pages/Authorization";

import { Home } from './pages/Home';
import { Route,Routes } from 'react-router-dom';


export const App = () => {

  return ( 
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='login' element={<Login/>}/>
 
</Routes>
  )
}


