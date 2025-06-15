import './App.css';
import React from 'react';
import Project from './pages/Contacts';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contacts' element={<Project/>} />
      <Route path='/Gallery' element={<Gallery/>} />
      <Route path='/Profile' element={<Profile/>} />
    </Routes>
  );
}

export default App;
